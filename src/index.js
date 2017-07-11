const notesList = new NotesList()
const adapter = new Adapter()
$(document).ready(function(){
  adapter.getNotes(successCallbackGet)
  createNote(notesList)
} )

function successCallbackPost(event) {
  event.preventDefault()
  notesList.addNote(noteTitle, noteBody)
  $('#noteTitle').val('')
  $('#noteBody').val('')
  $('#notes-list').html(notesList.renderNotesList())
}

function createNote(notesList) {
  $('#create-note').on("submit", function() {
    let noteTitle = $('#noteTitle').val()
    let noteBody = $('#noteBody').val()
    adapter.postNote(noteTitle, noteBody, successCallbackPost)
  })}

  function successCallbackGet(){

  }
