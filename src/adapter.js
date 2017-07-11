class Adapter {

  // function getNotes(callback) {
  //   fetch("/api/v1/notes")
  //   .then(response => return reponse.json())
  //   .then(callback)
  // }

  function getNotes(){
    $.get( "/api/v1/notes", function( data ) {
      debugger
      $( "#notes-list" ).html( data );
      alert( "Load was performed." );
    });
  }

  function postNotes(){
    $("#submit-new-note").click(function(){
        $.post("/api/v1/notes",
        {
          user_ID: 'user'
          title: 'title'
          body: 'body'
        }),
        .done(function(){
          alert( "Your note has been sent to the API")
        })
        .fail(function(){
          alert( "Post requested failed")
        })
    })
}
