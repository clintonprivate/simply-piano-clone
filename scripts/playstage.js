function fetchMusicXML() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', musixXmlUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var xmlDoc = xhr.responseXML;
                var musicXML = new XMLSerializer().serializeToString(xmlDoc);
                displaySheetMusic(musicXML);
            }
        }
    };
    xhr.send();
}

function displaySheetMusic(musicXML) {
    var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmd-container");
    osmd.load(musicXML);
}

function startPlayStage() {
    document.getElementsByClassName("note")[0].remove();
    var backgroundMusic = document.getElementById("backgroundmusic");
    backgroundMusic.src = songUrl;
    backgroundMusic.playbackRate = 0.5;
    backgroundMusic.play()
    fetchMusicXML();
}
