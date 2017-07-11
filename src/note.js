class Note {
  constructor(title, body) {
    this.title = title
    this.body = body
  }

  renderShortNote() {
    return(
      `<li class="selected-note">
        <span class="note-title" font-weight: bold>${this.title}</span><br>
        <span class="note-body">${this.body.slice(0,30)}...</span>
      </li>`
    )
  }

  renderNote() {
    return(
      `<li class="selected-note">
        <span class="note-title" font-weight: bold>${this.title}</span><br>
        <span class="note-body">${this.body}</span>
      </li>`
    )
  }

}
