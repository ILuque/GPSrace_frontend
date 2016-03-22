/*mapInfo.js*/


(function(mapInfo, $, undefined) {
    "use strict";
    /* device / device-user information */
    mapInfo.show = function() { //called in  ajax.initialize.fun (when we have the data)
        $("#devices").html(""); //reemplaces the code existing in the html file
        /* creates each of the divs with the device contents
         ** * myMap.dev array has an extra item:
         ** 		this is due myMap.dev[0] is empty
         ** 		myMap.dev[1] is the first element
         */
        for (var i = myMap.dev.length - 1; i > 0; i--) {
            $("#devices").prepend("<div class='device device" + i + "' onclick='mapInfo.selectDev(" + i + ")'>" +
                "<div class='userPic'>" +
                "<img src='devices/" + i + ".jpg'>" +
                "</div>" +
                " <div class='circle'>" + i + "</div>" +
                " <p class='userName'>" + myMap.dev[i].name +
                "<img src='img/flags/4x3/"+myMap.dev[i].country+".svg' class='flag'>"+
                 "</p>" +
                "<p> Time: " +
                Math.floor((Math.random() * 60) + 10) + ":" +
                Math.floor((Math.random() * 60) + 10) +
                "</p>" +

                "</div>");
        }

    };

    mapInfo.selectDev = function(deviceNum) {
        for (var i = 1; i <= myMap.sumDev; i++) { //clear highlighted
            $(".device" + i).removeClass("highlight");
            console.log(i);
        }
        $(".device" + deviceNum).addClass("highlight");
        // bounce marker  myMap.dev[deviceNum].marker

        myMap.dev[deviceNum].marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){myMap.dev[deviceNum].marker.setAnimation(null);}, 2125);	


    };

    mapInfo.toggleBar = function(){
    	$("#mapInfo").toggleClass("hide");
    	$("#toggleBar").toggleClass("rotate");
    };



}(window.mapInfo = window.mapInfo || {}, jQuery));
