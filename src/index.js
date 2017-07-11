$(document).ready(
  function(){
  const notesList = new NotesList()
  const adapter = new Adapter()
  createNote(notesList)
  adapter.getNotes(successCallbackGet)
})

const notesList = new NotesList()
const adapter = new Adapter()

function createNote(notesList) {
  $('#create-note').on("submit", function(e) {
    e.preventDefault()
    // debugger
    let adapter = new Adapter()
    let noteTitle = $('#noteTitle').val()
    let noteBody = $('#noteBody').val()
    debugger
    adapter.postNote(noteTitle, noteBody, successCallbackPost)
  })}

  function successCallbackPost() {
    alert("success")
    // let newNote = new Note(noteTitle, noteBody)
    // // notesList.addNote(noteTitle, noteBody)
    // $('#noteTitle').val('')
    // $('#noteBody').val('')
    // $('#notes-list').html(notesList.renderNotesList())
    // debugger
    // event.preventDefault()
  }

    function successCallbackGet(data){
      let notesList = new NotesList()
      data.forEach(
        noteItem => {
          notesList.addNote(noteItem.title,noteItem.body)
      })
      $( "#notes-list" ).html(notesList.renderNotesList());
      // alert( "Load was performed." );
    }
