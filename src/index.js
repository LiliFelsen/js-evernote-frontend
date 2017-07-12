const adapter = new Adapter()

$(document).ready(
  function(){
  createNote()
  adapter.getNotes(successCallbackGet)
  showSelectedNote()
})

function successCallbackPost() {
  adapter.getNotes(successCallbackGet)
}

function createNote() {
  $('#create-note').on("submit", function(event) {
    event.preventDefault()
    let noteTitle = $('#noteTitle').val()
    let noteBody = $('#noteBody').val()
    adapter.postNote(noteTitle, noteBody,successCallbackPost)
    $('#noteTitle').val('')
    $('#noteBody').val('')
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
  }

  function showSelectedNote() {
    $('#notes-list').on("click", "#listed-note", function(event) {
      event.preventDefault()
      let noteId = $(event.target).data().id
      adapter.getOneNote(noteId, callbackShowNote)
    })
  }
