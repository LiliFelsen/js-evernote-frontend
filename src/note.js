class Note {
  constructor(title, body, id) {
    this.title = title
    this.body = body
    this.id = id
  }

  renderShortNote() {
    return(
      `<a class="item" id="listed-note">
      <li class="note">
        <span class="note-title" data-id=${this.id}>${this.title}:</span><br>
        <span class="note-body" data-id=${this.id}>${this.body.slice(0,30)}...</span>
      </li></a>`
    )
  }

  renderNote() {
    return(
      `<div>
        <h3 class="note-title" data-id=${this.id}>${this.title}:</h3>
        <p class="note-body" data-id=${this.id}>${this.body}</p>
      </div>`
    )
  }

}
