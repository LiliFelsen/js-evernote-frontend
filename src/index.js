const notesList = new NotesList()
const adapter = new Adapter()

$(document).ready(
  function(){
  createNote(notesList)
  adapter.getNotes(successCallbackGet)
})

// function successCallbackPost() {
//   notesList.addNote(noteTitle, noteBody)
//   $('#notes-list').html(notesList.renderNotesList())
//   $('#noteTitle').val('')
//   $('#noteBody').val('')
// }

function createNote(notesList) {
  $('#create-note').on("submit", function(e) {
    e.preventDefault()
    let noteTitle = $('#noteTitle').val()
    let noteBody = $('#noteBody').val()
    notesList.addNote(noteTitle, noteBody)
    adapter.postNote(noteTitle, noteBody)
    $('#notes-list').html(notesList.renderNotesList())
    $('#one-note').html(notesList.renderSelectedNote())
    $('#noteTitle').val('')
    $('#noteBody').val('')
  })}

  function successCallbackGet(data){
    data.forEach(noteItem => {
      notesList.addNote(noteItem.title,noteItem.body)
    })
    $('#notes-list').html(notesList.renderNotesList())
  }
