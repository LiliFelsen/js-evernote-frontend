class Note {
  constructor(title, body) {
    this.title = title
    this.body = body
  }

  renderNote() {
    return(
      `<li class="selected-note">
        <span class="note-title">${this.title}</span>
        <span class="note-body">${this.body}</span>
      </li>`
    )
  }

}
