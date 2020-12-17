window.onload = function () {

    PageEffects();

}


//渡邉担当部分の関数たち
function PageEffects() {

    $(function () {

        var Midashi = $("#h2");

        const CoolTime = 500;

        Midashi.mouseover(function () {
            Midashi.stop(true).animate({
                fontSize: 30
            }, CoolTime);

        });


        Midashi.mouseout(function () {
            Midashi.stop(true).animate({
                fontSize: 24
            }, CoolTime);
        });
    });
}

$(document).ready(function () {
    $(".animsition").animsition({
        inClass: 'zoom-in-lg',
        outClass: 'zoom-out-lg',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) {
            window.location.href = url;
        }
    });
});

//Snowflakes
function snow() {

    const canvas = document.getElementById("background");
    const ctx = canvas.getContext("2d");

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    //Set number of snowflakes
    let numberFlakes = 400;
    let snowflakes = [];

    for (let i = 0; i < numberFlakes; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 3 + 1,
            d: Math.random() + 2
        })
    }

    //Draw the snowflakes
    function drawFlakes() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "white";
        ctx.beginPath();

        for (let i = 0; i < numberFlakes; i++) {
            let sf = snowflakes[i];
            ctx.moveTo(sf.x, sf.y);
            ctx.arc(sf.x, sf.y, sf.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        moveFlakes();
    }

    //Move the snowflakes
    function moveFlakes() {
        for (let i = 0; i < numberFlakes; i++) {
            let sf = snowflakes[i];
            sf.y += Math.pow(sf.d, 2) + 1;

            if (sf.y > height) {
                snowflakes[i] = {
                    x: Math.random() * width,
                    y: 0,
                    r: sf.r,
                    d: sf.d
                };
            }
        }
    }
    //Snowflake animation
    setInterval(drawFlakes, 26);
}

var Winname = location.href;
var indexHTML = "file:///D:/xampp/htdocs/ncc/index.html"
if (location.href == indexHTML) {

    const countDownDate = new Date("Jan 1, 2021, 00:00:00").getTime();

    const x = setInterval(function () {

        //Today's date + time
        let now = new Date().getTime();
        let distance = countDownDate - now;

        //Calculations for days/hours/minutes/seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("message").innerHTML = "Happy new year!";
            document.getElementById("countdown").innerHTML = "- 0 - 0 - 0 - 0 -"
        }
    }, 1000);

}

$(function () {
    $('#message').textillate({
        loop: true,
        minDisplayTime: 3000,
        initialDelay: 1000,
        autoStart: true,

        in: {
            effect: 'rotateInDownLeft',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false
        },

        out: {
            effect: 'hinge',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false
        }

    });

});

//Countdown timer
//11am on December 25th
