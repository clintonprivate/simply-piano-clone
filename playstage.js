function startPlayStage() {
    document.getElementsByClassName("note")[0].remove();
    var backgroundMusic = document.getElementById("backgroundmusic");
    backgroundMusic.src = 'song.mp3';
    backgroundMusic.playbackRate = 0.5;
    backgroundMusic.play()
}
