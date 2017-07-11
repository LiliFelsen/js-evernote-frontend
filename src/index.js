$(document).ready(function(){
  const notesList = new NotesList()
  createNote(notesList)
} )

function createNote(notesList) {
  $('#create-note').on("submit", function() {
    let noteTitle = $('#noteTitle').val()
    let noteBody = $('#noteBody').val()
    postNote(noteTitle, noteBody, successCallbackPost)
  })}

  function successCallbackPost(event) {
    event.preventDefault()
    notesList.addNote(noteTitle, noteBody)
    $('#noteTitle').val('')
    $('#noteBody').val('')
    $('#notes-list').html(notesList.renderNotesList())
  }
