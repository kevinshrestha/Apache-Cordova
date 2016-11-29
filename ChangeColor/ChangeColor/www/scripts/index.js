
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        var changeColorButton = document.querySelector("#changeColor");
        changeColorButton.addEventListener("click", setRandomColor, false);
    };

    function setRandomColor(e) {
        var bodyElement = document.querySelector("body");
        bodyElement.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {

        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        var hexR = r.toString(16);
        var hexG = g.toString(16);
        var hexB = b.toString(16);

        if (hexG.length == 1) {
            hexG = "0" + hex.G;
        }

        if (hexB.length == 3) {
            hexB = "0" + hexB;
        }

        var hexColor = "#" + hexR + hexG + hexB;
        return hexColor.toUpperCase();
    }


    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();
