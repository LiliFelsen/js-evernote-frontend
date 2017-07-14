const baseURL = "http://localhost:3000/api/v1/notes"

class Adapter {
  constructor(){
  }

  getNotes(callback){
    fetch(baseURL)
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error))
  }

  getOneNote(noteId, callback){
    fetch(baseURL + `/${noteId}`)
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error))
  }

  postNote(title, noteBody, callback) {
    fetch(baseURL, {
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
    fetch(baseURL + `/${noteId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(callback)
    .catch(error => console.log(error))
  }

  updateNote(noteId, title, noteBody, callback) {
    fetch(baseURL + `/${noteId}`, {
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
