window.addEventListener("load", function() {
    var f = document.getElementById('Blink');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 1000);

}, false);