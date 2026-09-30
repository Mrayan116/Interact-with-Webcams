/* =========================
   HOME PAGE
   Mouse trail
   ========================= */

const trailCanvas = document.getElementById("trail");

if (trailCanvas) {

    const trailContext = trailCanvas.getContext("2d");

    let points = [];


    function resizeTrail() {

        trailCanvas.width = window.innerWidth;
        trailCanvas.height = window.innerHeight;

    }


    window.addEventListener("resize", resizeTrail);

