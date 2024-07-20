function setInstructionText(note) {
    document.getElementById("instruct").innerHTML = "Play the note " + note[0];
}

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
    var elements = Array.from(document.getElementsByClassName("note"));
    for (let i = 1; i < elements.length; i++) {
        elements[i].remove();
    }
    document.getElementsByClassName("notehead")[0].classList.remove("fadetogreen");
    document.getElementsByClassName("notestem")[0].classList.remove("fadetogreen");
    var nextStage = createNextStage();
    console.log(nextStage);
    for (let i = 0; i < nextStage.length; i++) {
        var nextNote = nextStage[i];
        nextNote = [nextNote.slice(0, -1), Number(nextNote.slice(-1))];
        setNotePosition(nextNote);
        if (i < nextStage.length - 1) {
            addMoreNotes();
        }
    }
}

function setNotePosition(nextNote) {
    var lowestStaffNote = ["E", 4];
    var lowestStaffLineHeight = document.getElementById("staff").offsetTop + document.getElementById("staff").offsetHeight;
    var noteOrder = ["C", "D", "E", "F", "G", "A", "B"];
    var noteHeight = document.getElementsByClassName("note")[0].offsetHeight;
    var headHeight = document.getElementsByClassName("notehead")[0].offsetHeight;
    var staffHeight = document.getElementById("staff").offsetHeight;
    var notePosition = lowestStaffLineHeight - noteHeight + headHeight/2 - staffHeight/8 * (7 * (nextNote[1] - lowestStaffNote[1]) + (noteOrder.indexOf(nextNote[0][0]) - noteOrder.indexOf(lowestStaffNote[0])));
    document.getElementsByClassName("note")[document.getElementsByClassName("note").length-1].style.top = notePosition.toString() + "px";
}

function addMoreNotes() {
    var xMargin = 120;
    var initialNote = document.getElementsByClassName("note")[document.getElementsByClassName("note").length-1];
    var clonedNote = initialNote.cloneNode(true);
    clonedNote.style.left = (initialNote.offsetLeft + xMargin).toString() + "px";
    clonedNote.style.top = initialNote.offsetTop.toString() + "px";
    document.body.appendChild(clonedNote);
}
