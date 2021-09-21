var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GoodCityIndex_1 = new ol.format.GeoJSON();
var features_GoodCityIndex_1 = format_GoodCityIndex_1.readFeatures(json_GoodCityIndex_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GoodCityIndex_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GoodCityIndex_1.addFeatures(features_GoodCityIndex_1);
var lyr_GoodCityIndex_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GoodCityIndex_1, 
                style: style_GoodCityIndex_1,
                interactive: true,
    title: 'Good City Index<br />\
    <img src="styles/legend/GoodCityIndex_1_0.png" /> 20 - 47.2<br />\
    <img src="styles/legend/GoodCityIndex_1_1.png" /> 47.2 - 65<br />\
    <img src="styles/legend/GoodCityIndex_1_2.png" /> 65 - 74.8<br />\
    <img src="styles/legend/GoodCityIndex_1_3.png" /> 74.8 - 89<br />\
    <img src="styles/legend/GoodCityIndex_1_4.png" /> 89 - 100<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoodCityIndex_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoodCityIndex_1];
lyr_GoodCityIndex_1.set('fieldAliases', {'id': 'id', 'GCI': 'GCI', });
lyr_GoodCityIndex_1.set('fieldImages', {'id': 'TextEdit', 'GCI': 'TextEdit', });
lyr_GoodCityIndex_1.set('fieldLabels', {'id': 'no label', 'GCI': 'no label', });
lyr_GoodCityIndex_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});