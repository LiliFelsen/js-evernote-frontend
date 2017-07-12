class Note {
  constructor(title, body, id) {
    this.title = title
    this.body = body
    this.id = id
  }

  renderShortNote() {
    return(
      `<li class="note">
        <a class="item" id="listed-note" data-id=${this.id}>
         ${this.title}:<br>
         ${this.body.slice(0,30)}...
        </a>
      </li>`
    )
  }

  renderNote() {
    return(
      `<div class="ui raised segment">
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

  renderEditForm() {
    return(
      `<h3 class="ui header">Update your note</h3>
      <div class="ui raised segment">
        <form id="update-note-form" class="ui form">
          <input type="hidden" id="updatedNoteId" value="${this.id}">
          <div class="field">
            <label>Title</label>
            <input id="updatedNoteTitle" value="${this.title}">
          </div>
          <div class="field">
            <label>Body</label>
            <textarea id="updatedNoteBody">${this.body}</textarea>
          </div>
          <button id="update-note-button" class="ui button" type="submit">Update</button>
        </form>
      </div>`
    )
  }

}
