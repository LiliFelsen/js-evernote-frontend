class notesList {
  constructor(data) {
      this.notes = []
  }

  addNewNote(title, body) {
    const note = new Note(title, body)
    this.notes.push(note)
  }

  renderNotesList() {
    return this.notes.map(note => note.renderNote())
  }

}
