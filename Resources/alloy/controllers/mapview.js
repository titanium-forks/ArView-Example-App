function Controller() {
    function createMapAnnotationsFromPois(pois) {
        var annotations = [];
        for (var i = 0; pois.length > i; i++) {
            var poi = pois[i];
            var annotation = Ti.Map.createAnnotation({
                latitude: poi.latitude,
                longitude: poi.longitude,
                pincolor: Ti.Map.ANNOTATION_RED,
                title: poi.title,
                subtitle: poi.address
            });
            annotations.push(annotation);
        }
        return annotations;
    }
    function showMap(anns) {
        $.mapview.region = {
            latitude: loc.latitude,
            longitude: loc.longitude,
            latitudeDelta: .01,
            longitudeDelta: .01
        };
        for (var i = 0, l = anns.length; l > i; i++) $.mapview.addAnnotation(anns[i]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("GooglePlace");
    $.__views.win = Ti.UI.createWindow({
        layout: "vertical",
        backgroundColor: "#666",
        id: "win",
        title: "Map View"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    var __alloyId22 = [];
    $.__views.mapview = Ti.Map.createView({
        animate: true,
        regionFit: true,
        userLocation: true,
        mapType: Ti.Map.STANDARD_TYPE,
        annotations: __alloyId22,
        id: "mapview",
        ns: Ti.Map
    });
    $.__views.win.add($.__views.mapview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var pois = args.pois;
    var loc = args.loc;
    var anns = createMapAnnotationsFromPois(pois);
    showMap(anns);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;