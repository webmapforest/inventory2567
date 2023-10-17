var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_2 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> ขสป.อมก๋อย'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> อช.ดอยผ้าห่มปก'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> อช.ออบหลวง'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> ขสป.เชียงดาว'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> หน่วยพิทักษ์ อช.ผ้าห่มปก'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> หน่วยพิทักษ์ อช.ออบหลวง'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> หน่วยพิทักษ์ฯ ขสป.เชียงดาว'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> หน่วยพิทักษ์ฯ ขสป.อมก๋อย'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> แปลงสำรวจ'
            });

lyr_ESRIWorldTopo_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_GoogleTerrainHybrid_2.setVisible(false);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleTerrainHybrid_2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11];
lyr__3.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr__4.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr__5.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr__6.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr__7.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr__8.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr__9.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Amphoe': 'Amphoe', 'DIVIS_NT': 'DIVIS_NT', 'DNP_NT': 'DNP_NT', 'Easting': 'Easting', 'GISCODE': 'GISCODE', 'Northing': 'Northing', 'OBJECTID': 'OBJECTID', 'PARO_NT': 'PARO_NT', 'Province': 'Province', 'Tambon': 'Tambon', 'Type_TH': 'Type_TH', 'UNITD_T': 'UNITD_T', 'Zone_': 'Zone_', 'check': 'check', 'source': 'source', });
lyr__10.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Amphoe': 'Amphoe', 'DIVIS_NT': 'DIVIS_NT', 'DNP_NT': 'DNP_NT', 'Easting': 'Easting', 'GISCODE': 'GISCODE', 'Northing': 'Northing', 'OBJECTID': 'OBJECTID', 'PARO_NT': 'PARO_NT', 'Province': 'Province', 'Tambon': 'Tambon', 'Type_TH': 'Type_TH', 'UNITD_T': 'UNITD_T', 'Zone_': 'Zone_', 'check': 'check', 'source': 'source', });
lyr__11.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'ClusterId_': 'ClusterId_', 'E_wgs': 'E_wgs', 'FType_23': 'FType_23', 'F_NF': 'F_NF', 'Group_F_Th': 'Group_F_Th', 'Map_sheet': 'Map_sheet', 'N_wgs': 'N_wgs', 'Name_Th': 'Name_Th', 'No': 'No', 'PRAO_Prote': 'PRAO_Prote', 'PROV_Th': 'PROV_Th', 'Region_Th': 'Region_Th', 'Spacing': 'Spacing', 'Type_Th': 'Type_Th', 'Zone': 'Zone', 'in_out': 'in_out', });
lyr__3.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr__4.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr__5.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr__6.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr__7.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr__8.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr__9.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Amphoe': 'TextEdit', 'DIVIS_NT': 'TextEdit', 'DNP_NT': 'TextEdit', 'Easting': 'TextEdit', 'GISCODE': 'TextEdit', 'Northing': 'TextEdit', 'OBJECTID': 'TextEdit', 'PARO_NT': 'TextEdit', 'Province': 'TextEdit', 'Tambon': 'TextEdit', 'Type_TH': 'TextEdit', 'UNITD_T': 'TextEdit', 'Zone_': 'TextEdit', 'check': 'TextEdit', 'source': 'TextEdit', });
lyr__10.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Amphoe': 'TextEdit', 'DIVIS_NT': 'TextEdit', 'DNP_NT': 'TextEdit', 'Easting': 'TextEdit', 'GISCODE': 'TextEdit', 'Northing': 'TextEdit', 'OBJECTID': 'TextEdit', 'PARO_NT': 'TextEdit', 'Province': 'TextEdit', 'Tambon': 'TextEdit', 'Type_TH': 'TextEdit', 'UNITD_T': 'TextEdit', 'Zone_': 'TextEdit', 'check': 'TextEdit', 'source': 'TextEdit', });
lyr__11.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'ClusterId_': 'TextEdit', 'E_wgs': 'TextEdit', 'FType_23': 'TextEdit', 'F_NF': 'TextEdit', 'Group_F_Th': 'TextEdit', 'Map_sheet': 'TextEdit', 'N_wgs': 'TextEdit', 'Name_Th': 'TextEdit', 'No': 'TextEdit', 'PRAO_Prote': 'TextEdit', 'PROV_Th': 'TextEdit', 'Region_Th': 'TextEdit', 'Spacing': 'TextEdit', 'Type_Th': 'TextEdit', 'Zone': 'TextEdit', 'in_out': 'TextEdit', });
lyr__3.set('fieldLabels', {'name': 'inline label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr__4.set('fieldLabels', {'name': 'inline label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr__5.set('fieldLabels', {'name': 'inline label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr__6.set('fieldLabels', {'name': 'inline label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr__7.set('fieldLabels', {'name': 'inline label', 'folders': 'inline label', 'description': 'inline label', 'altitude': 'inline label', 'alt_mode': 'inline label', 'time_begin': 'inline label', 'time_end': 'inline label', 'time_when': 'inline label', });
lyr__8.set('fieldLabels', {'name': 'inline label', 'folders': 'inline label', 'description': 'inline label', 'altitude': 'inline label', 'alt_mode': 'inline label', 'time_begin': 'inline label', 'time_end': 'inline label', 'time_when': 'inline label', });
lyr__9.set('fieldLabels', {'name': 'inline label', 'folders': 'inline label', 'description': 'inline label', 'altitude': 'inline label', 'alt_mode': 'inline label', 'time_begin': 'inline label', 'time_end': 'inline label', 'time_when': 'inline label', 'Amphoe': 'inline label', 'DIVIS_NT': 'inline label', 'DNP_NT': 'inline label', 'Easting': 'inline label', 'GISCODE': 'inline label', 'Northing': 'inline label', 'OBJECTID': 'inline label', 'PARO_NT': 'inline label', 'Province': 'inline label', 'Tambon': 'inline label', 'Type_TH': 'inline label', 'UNITD_T': 'inline label', 'Zone_': 'inline label', 'check': 'inline label', 'source': 'inline label', });
lyr__10.set('fieldLabels', {'name': 'inline label', 'folders': 'inline label', 'description': 'inline label', 'altitude': 'inline label', 'alt_mode': 'inline label', 'time_begin': 'inline label', 'time_end': 'inline label', 'time_when': 'inline label', 'Amphoe': 'inline label', 'DIVIS_NT': 'inline label', 'DNP_NT': 'inline label', 'Easting': 'inline label', 'GISCODE': 'inline label', 'Northing': 'inline label', 'OBJECTID': 'inline label', 'PARO_NT': 'inline label', 'Province': 'inline label', 'Tambon': 'inline label', 'Type_TH': 'inline label', 'UNITD_T': 'inline label', 'Zone_': 'inline label', 'check': 'inline label', 'source': 'inline label', });
lyr__11.set('fieldLabels', {'name': 'inline label', 'folders': 'inline label', 'description': 'inline label', 'altitude': 'inline label', 'alt_mode': 'inline label', 'time_begin': 'inline label', 'time_end': 'inline label', 'time_when': 'inline label', 'ClusterId_': 'inline label', 'E_wgs': 'inline label', 'FType_23': 'inline label', 'F_NF': 'inline label', 'Group_F_Th': 'inline label', 'Map_sheet': 'inline label', 'N_wgs': 'inline label', 'Name_Th': 'inline label', 'No': 'inline label', 'PRAO_Prote': 'inline label', 'PROV_Th': 'inline label', 'Region_Th': 'inline label', 'Spacing': 'inline label', 'Type_Th': 'inline label', 'Zone': 'inline label', 'in_out': 'inline label', });
lyr__11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});