function prepareSheetMusicSVG() {
    // Scale up SVG
    var svg = document.getElementById("Piano0-1");
    var staff = document.getElementById("staff");
    var originalHeight = Number(document.getElementsByTagName("rect")[0].getAttribute("height")); 
    var desiredHeight = staff.offsetHeight;
    var scaleRatio = (desiredHeight/originalHeight).toFixed(2);
    svg.setAttribute('transform', "scale(" + scaleRatio.toString() + ")");
    
    // Reset padding
    var xDistance = -svg.getBBox().x.toFixed(2);
    var yDistance = -Number(document.getElementsByTagName("rect")[0].getAttribute("y")).toFixed(2);
    
    // Add horizontal padding
    var paddingAmount = staff.offsetWidth / 6;
    var finalX = xDistance + paddingAmount;
    svg.setAttribute('transform', svg.getAttribute("transform") + "translate(" + finalX.toString() + ", " + yDistance.toString() + ")");

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
    var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmd-container", {drawTitle: false, drawMetronomeMarks: false, drawPartNames: false, drawMeasureNumbers: false});
    osmd.load(musicXML);
    osmd.render();
    setTimeout(prepareSheetMusicSVG, 2000);
}

function startPlayStage() {
    document.getElementsByClassName("note")[0].remove();
    var backgroundMusic = document.getElementById("backgroundmusic");
    backgroundMusic.src = songUrl;
    backgroundMusic.playbackRate = 0.5;
    backgroundMusic.play()
    fetchMusicXML();
}
