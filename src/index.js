$(document).ready(function(){
  const notesList = new NotesList()
  createNote(notesList)
} )

function createNote(notesList) {
  $('#create-note').on("submit", function(event){
    event.preventDefault()
    let noteTitle = $('#noteTitle').val()
    let noteBody = $('#noteBody').val()
    notesList.addNote(noteTitle, noteBody)
    $('#noteTitle').val('')
    $('#noteBody').val('')
    $('#notes-list').html(notesList.renderNotesList())
  })
}
