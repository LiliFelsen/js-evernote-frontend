const adapter = new Adapter()

$(document).ready(
  function(){
  createNote()
  adapter.getNotes(successCallbackGet)
  showSelectedNote()
  deleteNote()
})

function successCallbackPost() {
  adapter.getNotes(successCallbackGet)
}

function createNote() {
  $('#create-note-form').on("submit", function(event) {
    event.preventDefault()
    let noteTitle = $('#noteTitle').val()
    let noteBody = $('#noteBody').val()
    adapter.postNote(noteTitle, noteBody,successCallbackPost)
    $('#noteTitle').val('')
    $('#noteBody').val('')
    // $('#create-note-div').toggle(display)
    // debugger
    // $('#selected-note').html(notesList.renderSelectedNote())
  })}

  function successCallbackGet(data){
    const notesList = new NotesList()
    data.forEach(noteItem => {
      notesList.addNote(noteItem.title, noteItem.body, noteItem.id)
    })
    $('#notes-list').html(notesList.renderNotesList())
  }

  function callbackShowSelectedNote(data) {
    console.log(data)
    // debugger
    let newNoteId = data.id
    let newNoteTitle = data.title
    let newNoteBody = data.body
    let newNote = new Note(data.title, data.body, data.id)
    $('#selected-note').html(newNote.renderNote())
  }

  function showSelectedNote() {
    $('#notes-list').on("click", "#listed-note", function(event) {
      event.preventDefault()
      // debugger
      let noteId = $(event.target).data().id
      adapter.getOneNote(noteId, callbackShowSelectedNote)
    })
  }

  function deleteNoteCallback() {
    $('#selected-note').empty()
    alert('Your note has been deleted.')
    adapter.getNotes(successCallbackGet)
  }

  function deleteNote() {
    $('#selected-note').on("click", "#delete-note", function(event) {
      event.preventDefault()
      let noteId = $(event.target).data().id
      adapter.deleteNote(noteId, deleteNoteCallback)
    })
  }

  // function showCreateFrom() {
  //   $('#create-note-link').on("click", function() {
  //     $('#create-note-div').toggle(display)
  //   })
  // }
