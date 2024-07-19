var currentNote = 0;
var cooldown = false;
document.addEventListener('keydown', function(event) {
    if (event.key === 'p' && cooldown == false) {
        document.getElementsByClassName("notehead")[currentNote].classList.add("fadetogreen");
        document.getElementsByClassName("notestem")[currentNote].classList.add("fadetogreen");
        currentNote++;
        cooldown = true;
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key === 'p') {
        cooldown = false;
    }
});
