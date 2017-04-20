window.addEventListener("load", function() {
    var f = document.getElementById('Blink');
    setInterval(function() {
        f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
    }, 800);

}, false);