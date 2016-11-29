(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, { frequency: 100 });
    };

    //Shake Code

    var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

    function onSuccess(acceleration) {
        x1 = acceleration.x;
        y1 = acceleration.y;
        z1 = accelereation.z;
    }

    function onError(e) {
        //do something
    }

    setInterval(function () {
        var change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);

        // adjust the value of "25" to change when a "shake" is detected
        if (change > 25) {
            //alert('Earthquake!!!!')'

            var bodyElement = document.querySelector("body");
            bodyElement.style.backgroundColor = getRandomColor();
        }

        x2 = x1;
        y2 = y1;
        z2 = z1;
    }, 100)

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
