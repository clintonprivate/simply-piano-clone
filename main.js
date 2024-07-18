var stageType = "newnote";
var staffNotes = ["E", "F", "G", "A", "B", "C", "D", "E", "F"];
var noteToPlay = "E";
var notesToLearn = ["A3", "B3", "E4", "F#3", "G#3", "C#4", "E#4"]
var highestStaffLineHeight = document.getElementById("staff").offsetTop;
var lowestStaffLineHeight = document.getElementById("staff").offsetTop + document.getElementById("staff").offsetHeight;

function setInstructionText(note) {
    document.getElementById("instruct").innerHTML = "Play the note " + note;
}

function setNotePosition() {
    var noteHeight = document.getElementsByClassName("note")[0].offsetHeight;
    var headHeight = document.getElementsByClassName("notehead")[0].offsetHeight;
    var staffHeight = document.getElementById("staff").offsetHeight;
    var notePosition = lowestStaffLineHeight - noteHeight + headHeight/2 - staffHeight/8*staffNotes.indexOf(noteToPlay);
    document.getElementsByClassName("note")[0].style.top = notePosition.toString() + "px";
}

setInstructionText(noteToPlay)
setNotePosition();
