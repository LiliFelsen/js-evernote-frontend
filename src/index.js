const adapter = new Adapter()

$(document).ready(
  function(){
  adapter.getNotes(successCallbackGet)
  createNote()
  showSelectedNote()
  deleteNote()
  showCreateForm()
  showEditForm()
  updateNote()
})

function successCallbackPost() {
  adapter.getNotes(successCallbackGet)
  // debugger
  let id = $('#listed-note').first().data().id + 1
  adapter.getOneNote(id, callbackShowSelectedNote)
}

function createNote() {
  $('#create-note-form').on("submit", function(event) {
    event.preventDefault()
    let noteTitle = $('#noteTitle').val()
    let noteBody = $('#noteBody').val()
    adapter.postNote(noteTitle, noteBody,successCallbackPost)
    $('#noteTitle').val('')
    $('#noteBody').val('')
    $('#create-note-div').toggle(false)
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
    let newNoteId = data.id
    let newNoteTitle = data.title
    let newNoteBody = data.body
    let newNote = new Note(data.title, data.body, data.id)
    $('#selected-note').html(newNote.renderNote())
  }

  function showSelectedNote() {
    $('#notes-list').on("click", "#listed-note", function(event) {
      event.preventDefault()
      $('#create-note-div').toggle(false)
      $('#update-note-div').toggle(false)
      $('#selected-note').toggle(true)
      let noteId = $(event.target).data().id
      adapter.getOneNote(noteId, callbackShowSelectedNote)
    })
  }

  function deleteNoteCallback() {
    $('#selected-note').empty()
    // alert('Your note has been deleted.')
    adapter.getNotes(successCallbackGet)
  }

  function deleteNote() {
    $('#selected-note').on("click", "#delete-note", function(event) {
      event.preventDefault()
      let noteId = $(event.target).data().id
      adapter.deleteNote(noteId, deleteNoteCallback)
    })
  }

  function showCreateForm() {
    $('#create-note-link').on("click", function(event) {
      event.preventDefault()
      $('#create-note-div').toggle(true)
      $('#selected-note').toggle(false)
      $('#update-note-div').toggle(false)
    })
  }

  function showEditCallback(data) {
    let newNoteId = data.id
    let newNoteTitle = data.title
    let newNoteBody = data.body
    let newNote = new Note(data.title, data.body, data.id)
    $('#update-note-div').html(newNote.renderEditForm())
    $('#update-note-div').toggle(true)
    $('#selected-note').toggle(false)
  }

  function showEditForm() {
    $('#selected-note').on("click", "#edit-note", function(event) {
      event.preventDefault()
      let noteId = $(event.target).data().id
      adapter.getOneNote(noteId, showEditCallback)
    })
  }

  function updateNoteCallback(data) {
    console.log(data)
    let title = data.title
    let body = data.body
    let id = data.id
    let updatedNote = new Note(title, body, id)
    $('#selected-note').toggle(true)
    $('#update-note-div').toggle(false)
    $('#selected-note').html(updatedNote.renderNote())
    adapter.getNotes(successCallbackGet)
  }

  function updateNote() {
    $('#update-note-div').on("submit", "#update-note-form", function(event) {
      event.preventDefault()
      let updatedNoteTitle = $('#updatedNoteTitle').val()
      let updatedNoteBody = $('#updatedNoteBody').val()
      let idOfUpdatedNote = $('#updatedNoteId').val()
      adapter.updateNote(idOfUpdatedNote, updatedNoteTitle, updatedNoteBody, updateNoteCallback)
    })

  }
