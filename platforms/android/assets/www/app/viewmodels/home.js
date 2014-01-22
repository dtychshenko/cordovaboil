define(['plugins/router'], function(router) {
    return {
        displayName: 'Home',
        activate: function () {
            //...
        },
        deactivate: function () {
            //...
        },
        getCoordinates: function() {
        	if (navigator.geolocation)
        		navigator.geolocation.getCurrentPosition(
	                function (data) {
	                    alert("Latitude: " + data.coords.latitude + 
	                    	  "\nLongitude: " + data.coords.longitude);
	                },
        			function(e){
        				alert("Error: " + e.code + "\nMessage: " + e.message);
        			},
        			{
        				timeout: 3000
        			}
    			);
        	else
        		alert("Your device does not support geolocation services");
        },
        getDevice: function() {
        	if (window.device)
        		alert('Model: ' + device.model + 
        			  '\nCordova: ' + device.cordova +
        			  '\nPlatform: ' + device.platform +
        			  '\nUUID: ' + device.uuid +
        			  '\nVersion: ' + device.version
        		);
        	else
    			alert("Sorry, can't determine your devcie type");
        },
        getVibrate: function() {
        	if (navigator.notification && navigator.notification.vibrate)
        		navigator.notification.vibrate(1000);
        	else
        		alert("Sorry, couldn't vibrate");
        },
        getNextScreen: function() {
        	 router.navigate('pin');
        }
    };
});