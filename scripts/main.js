function setInstructionText(note) {
    document.getElementById("instruct").innerHTML = "Play the note " + note[0];
}

setInstructionText(["A", 3]);
setNotePosition();
addMoreNotes("newnote");
