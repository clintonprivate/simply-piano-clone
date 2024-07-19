function createNextStage() {
    var stage = [];
    if (currentStage == 1) {
        stage = Array(3).fill(notesToLearn[0]);
        learnedNotes.push(notesToLearn[0]);
    } else if (currentStage == 2) {
        stage = Array(3).fill(notesToLearn[1]);
        learnedNotes.push(notesToLearn[1]);
    } else if (learnedNotes.length < notesToLearn.length) {
        if (currentStage % 2 == 0) {
            stage = Array(3).fill(notesToLearn[learnedNotes.length]);
            learnedNotes.push(notesToLearn[learnedNotes.length]);
        }
        else {
            var latestLearnedNote = learnedNotes[learnedNotes.length-1];
            stage.push(latestLearnedNote);
            for (let i = 0; i < 4; i++) {
                const randomIndex = Math.floor(Math.random() * learnedNotes.length);
                stage.push(learnedNotes[randomIndex]);
            }
            stage = shuffleArray(stage);
        }
    }
    else {
        stage = ["play"];
    }
    currentStage++;
    return stage;
}

function generateNewNotes() {
    var nextStage = createNextStage();
}

function setNotePosition() {
    var lowestStaffNote = ["E", 4];
    var lowestStaffLineHeight = document.getElementById("staff").offsetTop + document.getElementById("staff").offsetHeight;
    var noteOrder = ["C", "D", "E", "F", "G", "A", "B"];
    var noteToPlay = ["A", 3];
    var noteHeight = document.getElementsByClassName("note")[0].offsetHeight;
    var headHeight = document.getElementsByClassName("notehead")[0].offsetHeight;
    var staffHeight = document.getElementById("staff").offsetHeight;
    var notePosition = lowestStaffLineHeight - noteHeight + headHeight/2 - staffHeight/8 * (7 * (noteToPlay[1] - lowestStaffNote[1]) + (noteOrder.indexOf(noteToPlay[0]) - noteOrder.indexOf(lowestStaffNote[0])));//-4
    document.getElementsByClassName("note")[0].style.top = notePosition.toString() + "px";
}

function addMoreNotes(stageType) {
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
