function prepareSheetMusicSVG() {
    // Remove padding
    var staff = document.getElementById("Piano0-1");
    staff.setAttribute('transform', 'translate(150, -113) scale(1.8)');
    
    // Remove clef symbols
    var elements = document.querySelectorAll('.vf-clef');
    elements.forEach(function(element) {
        element.remove();
    });

    // Remove time signature symbol
    document.getElementsByClassName("vf-timesignature")[0].remove();
    
    // Move SVG into staff
    var element = document.getElementsByTagName('svg')[0];
    var newParent = document.getElementById('scrolling');
    newParent.appendChild(element);
}

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
    var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmd-container", {
        drawTitle: false,
        drawMetronomeMarks: false,
        drawPartNames: false,
        drawMeasureNumbers: false
    });
    osmd.load(musicXML);
    osmd.render();
    setTimeout(prepareSheetMusicSVG, 2000);
}

function startPlayStage() {
    document.getElementsByClassName("note")[0].remove();
    var backgroundMusic = document.getElementById("backgroundmusic");
    backgroundMusic.src = songUrl;
    backgroundMusic.playbackRate = 0.5;
    //backgroundMusic.play()
    fetchMusicXML();
}
