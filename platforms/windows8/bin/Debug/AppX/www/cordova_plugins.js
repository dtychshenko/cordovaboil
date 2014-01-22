cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/src/windows8/NotificationProxy.js",
        "id": "org.apache.cordova.dialogs.NotificationProxy",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/src/windows8/GeolocationProxy.js",
        "id": "org.apache.cordova.geolocation.GeolocationProxy",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/src/windows8/DeviceProxy.js",
        "id": "org.apache.cordova.device.DeviceProxy",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.vibration": "0.3.6",
    "org.apache.cordova.dialogs": "0.2.5",
    "org.apache.cordova.geolocation": "0.3.5",
    "org.apache.cordova.device": "0.2.7"
}
// BOTTOM OF METADATA
});