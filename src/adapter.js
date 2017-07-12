class Adapter {
  constructor(){
  }

  getNotes(callback){
    fetch("http://localhost:3000/api/v1/notes")
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error))
  }

  getOneNote(noteId, callback){
    fetch(`http://localhost:3000/api/v1/notes/${noteId}`)
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error))
  }

  postNote(title, noteBody, callback) {
    fetch("http://localhost:3000/api/v1/notes", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: 1,
        title: title,
        body: noteBody
      })
    })
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error))
  }

  deleteNote(noteId, callback) {
    fetch(`http://localhost:3000/api/v1/notes/${noteId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error))
  }

  updateNote(noteId, title, noteBody, callback) {
    fetch(`http://localhost:3000/api/v1/notes/${noteId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: 1,
        title: title,
        body: noteBody
      })
    })
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error))
  }

}
