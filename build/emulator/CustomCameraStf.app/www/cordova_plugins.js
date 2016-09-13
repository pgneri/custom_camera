cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.performanceactive.plugins.camera/js/customcamera.js",
        "id": "com.performanceactive.plugins.camera.customCamera",
        "pluginId": "com.performanceactive.plugins.camera",
        "clobbers": [
            "navigator.customCamera"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.performanceactive.plugins.camera": "2.0"
}
// BOTTOM OF METADATA
});