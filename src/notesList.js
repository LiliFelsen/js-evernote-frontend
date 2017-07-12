class NotesList {
  constructor(data) {
      this.notes = []
  }

  addNote(title, body, id) {
    const note = new Note(title, body, id)
    this.notes.unshift(note)
  }

  renderNotesList() {
    return this.notes.map(note => note.renderShortNote())
  }

  // renderSelectedNote() {
  //   return (this.notes[0]).renderNote()
  // }
}
