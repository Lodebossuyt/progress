function SetProgress(progress) {
    var elem = document.getElementById("myBar");
    var width = 0;
    if(progress == 0) {
        updateProgress(width, elem);
    }
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= progress) {
            clearInterval(id);
        } else {
            width++;
            updateProgress(width, elem);
        }
    }
}

function updateProgress(width, elem) {
    elem.style.width = width + "%";
    elem.innerHTML = width + "%";
}