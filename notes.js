var stageType = "newnote";
var lowestStaffNote = ["E", 4];
var lowestStaffLineHeight = document.getElementById("staff").offsetTop + document.getElementById("staff").offsetHeight;
var noteOrder = ["C", "D", "E", "F", "G", "A", "B"];
var noteToPlay = ["A", 3];
var notesToLearn = ["A3", "B3", "E4", "F#3", "G#3", "C#4", "E#4"];

function setNotePosition() {
    var noteHeight = document.getElementsByClassName("note")[0].offsetHeight;
    var headHeight = document.getElementsByClassName("notehead")[0].offsetHeight;
    var staffHeight = document.getElementById("staff").offsetHeight;
    var notePosition = lowestStaffLineHeight - noteHeight + headHeight/2 - staffHeight/8 * (7 * (noteToPlay[1] - lowestStaffNote[1]) + (noteOrder.indexOf(noteToPlay[0]) - noteOrder.indexOf(lowestStaffNote[0])));//-4
    document.getElementsByClassName("note")[0].style.top = notePosition.toString() + "px";
}

function addMoreNotes() {
    if (stageType == "newnote") {
        var xMargin = 120;
        for (let i = 0; i < 2; i++) {
            var initialNote = document.getElementsByClassName("note")[0];
            var clonedNote = initialNote.cloneNode(true);
            clonedNote.style.left = (initialNote.offsetLeft + xMargin).toString() + "px";
            clonedNote.style.top = initialNote.offsetTop.toString() + "px";
            document.body.appendChild(clonedNote);
            xMargin += 120;
        }
    }
}
