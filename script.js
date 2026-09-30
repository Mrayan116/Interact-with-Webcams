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
      resizeTrail();


    window.addEventListener("mousemove", function(event) {

        points.push({
            x: event.clientX,
            y: event.clientY,
            life: 1
        });


        if (points.length > 40) {
            points.shift();
        }

    });


    function drawTrail() {

        trailContext.clearRect(
            0,
            0,
            trailCanvas.width,
            trailCanvas.height
        );


        for (let i = 0; i < points.length; i++) {

            const point = points[i];

            point.life -= 0.035;


            if (point.life <= 0) {
                continue;
            }


            trailContext.beginPath();


            trailContext.arc(
                point.x,
                point.y,
                3 + (1 - point.life) * 4,
                0,
                Math.PI * 2
            );

           trailContext.fillStyle =
                `rgba(255,255,255,${point.life * 0.5})`;


            trailContext.fill();

        }


        points = points.filter(function(point) {
            return point.life > 0;
        });


        requestAnimationFrame(drawTrail);

    }


    drawTrail();

}


