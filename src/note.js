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
      `<br><h3 class="ui header">Update or Delete one of your notes</h3>
      <div class="ui raised segment">
        <h3 class="note-title" data-id=${this.id}>${this.title}</h3>
        <p class="note-body" data-id=${this.id}>${this.body}</p>
        <button class="ui icon button" id="edit-note" data-id=${this.id}>
          <i class="edit icon"></i>
          Edit
        </button>
        <button class="ui icon button" id="delete-note" data-id=${this.id}>
          <i class="trash outline icon"></i>
          Delete
        </button>
      </div>`
    )
  }

}
