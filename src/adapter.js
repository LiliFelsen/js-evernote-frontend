class Adapter {
  constructor(){}

  getNotes(callback) {
    fetch("http://localhost:3000/api/v1/notes")
    .then(response => response.json())
    .then(callback)
  }

  postNote(title, noteBody, callback) {
    fetch("http://localhost:3000/api/v1/notes", {
      method: 'POST',
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
