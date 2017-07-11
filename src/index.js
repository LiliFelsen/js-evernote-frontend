const notesList = new NotesList()
const adapter = new Adapter()

$(document).ready(
  function(){
  createNote(notesList)
  adapter.getNotes(successCallbackGet)
})

function successCallbackPost(event) {
  event.preventDefault()
  notesList.addNote(noteTitle, noteBody)
  $('#noteTitle').val('')
  $('#noteBody').val('')
  $('#notes-list').html(notesList.renderNotesList())
}

function createNote(notesList) {
  $('#create-note').on("submit", function(e) {
    e.preventDefault()
    debugger
    let noteTitle = $('#noteTitle').val()
    let noteBody = $('#noteBody').val()
    adapter.postNote(noteTitle, noteBody, successCallbackPost)
  })}

  function successCallbackPost() {
    notesList.addNote(noteTitle, noteBody)
    $('#noteTitle').val('')
    $('#noteBody').val('')
    $('#notes-list').html(notesList.renderNotesList())}

    function successCallbackGet(data){
      // let notesList = new NotesList()
      data.forEach(noteItem => {
        notesList.addNote(noteItem.title,noteItem.body)
      })
      $( "#notes-list" ).html(notesList.renderNotesList());
      // alert( "Load was performed." );
    }
