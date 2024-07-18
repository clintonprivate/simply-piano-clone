function setInstructionText(note) {
    document.getElementById("instruct").innerHTML = "Play the note " + note[0];
}

setInstructionText(noteToPlay)
setNotePosition();
addMoreNotes();
