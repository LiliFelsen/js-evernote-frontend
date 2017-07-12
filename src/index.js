const notesList = new NotesList()
const adapter = new Adapter()

$(document).ready(
  function(){
  createNote(notesList)
  adapter.getNotes(successCallbackGet)
})


const notesList = new NotesList()
const adapter = new Adapter()

// function successCallbackPost() {
//   notesList.addNote(noteTitle, noteBody)
//   $('#notes-list').html(notesList.renderNotesList())
//   $('#noteTitle').val('')
//   $('#noteBody').val('')
// }


function createNote(notesList) {
  $('#submit-new-note').on("submit", function(e) {
    e.preventDefault()
    let adapter = new Adapter()
    let noteTitle = $('#create-note #noteTitle').val()
    let noteBody = $('#create-note #noteBody').val()
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

    }
