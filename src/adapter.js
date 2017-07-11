class Adapter {

  function getNotes(callback) {
    fetch("/api/v1/notes")
    .then(response => reponse.json())
    .then(callback)
  }

  function postNote(title, body, callback) {
    fetch("/api/v1/notes", {
      method: 'POST',
      body: JSON.stringify({
        user_id: 1,
        title: title,
        body: body
      })
    })
    .then(response => reponse.json())
    .then(callback)
    .catch(error => console.log(error))
  }

}
