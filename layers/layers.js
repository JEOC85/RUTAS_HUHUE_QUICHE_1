ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10288801.598667, 1705283.076739, -10038021.729979, 1822660.874703]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1 = new ol.format.GeoJSON();
var features_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1 = format_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1.readFeatures(json_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1.addFeatures(features_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1);
var lyr_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1, 
                style: style_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1,
                popuplayertitle: 'RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03',
                interactive: false,
                title: '<img src="styles/legend/RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1.png" /> RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03'
            });
var format_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2 = new ol.format.GeoJSON();
var features_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2 = format_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2.readFeatures(json_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2.addFeatures(features_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2);
var lyr_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2, 
                style: style_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2,
                popuplayertitle: 'RUTA_2_NENTON_SAN MATEO_RN09NORTE_12_RN09NORTE_13',
                interactive: false,
                title: '<img src="styles/legend/RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2.png" /> RUTA_2_NENTON_SAN MATEO_RN09NORTE_12_RN09NORTE_13'
            });
var format_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3 = new ol.format.GeoJSON();
var features_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3 = format_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3.readFeatures(json_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3.addFeatures(features_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3);
var lyr_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3, 
                style: style_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3,
                popuplayertitle: 'RUTA_3_NEBAJ_BARILLAS_RN-NORTE-09-13',
                interactive: false,
                title: '<img src="styles/legend/RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3.png" /> RUTA_3_NEBAJ_BARILLAS_RN-NORTE-09-13'
            });
var format_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4 = new ol.format.GeoJSON();
var features_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4 = format_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4.readFeatures(json_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4.addFeatures(features_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4);
var lyr_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4, 
                style: style_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4,
                popuplayertitle: 'RUTA_4_RN-QUI-03-02_NEBAJ_BARILLAS',
                interactive: false,
                title: '<img src="styles/legend/RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4.png" /> RUTA_4_RN-QUI-03-02_NEBAJ_BARILLAS'
            });
var format_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5 = new ol.format.GeoJSON();
var features_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5 = format_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5.readFeatures(json_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5.addFeatures(features_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5);
var lyr_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5, 
                style: style_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5,
                popuplayertitle: 'RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35',
                interactive: false,
                title: '<img src="styles/legend/RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5.png" /> RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35'
            });
var format_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6 = new ol.format.GeoJSON();
var features_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6 = format_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6.readFeatures(json_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6.addFeatures(features_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6);
var lyr_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6, 
                style: style_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6,
                popuplayertitle: 'RUTA_6_ZACUALPA_CANILLA_RD_05_02',
                interactive: false,
                title: '<img src="styles/legend/RUTA_6_ZACUALPA_CANILLA_RD_05_02_6.png" /> RUTA_6_ZACUALPA_CANILLA_RD_05_02'
            });
var format_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7 = new ol.format.GeoJSON();
var features_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7 = format_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7.readFeatures(json_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7.addFeatures(features_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7);
var lyr_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7, 
                style: style_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7,
                popuplayertitle: 'RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RD-QUI-05-02',
                interactive: false,
                title: '<img src="styles/legend/RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7.png" /> RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RD-QUI-05-02'
            });
var format_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8 = new ol.format.GeoJSON();
var features_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8 = format_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8.readFeatures(json_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8.addFeatures(features_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8);
var lyr_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8, 
                style: style_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8,
                popuplayertitle: 'RUTA_8_BARILLAS_FRANJA_TRANSVERSAL',
                interactive: false,
                title: '<img src="styles/legend/RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8.png" /> RUTA_8_BARILLAS_FRANJA_TRANSVERSAL'
            });
var format_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9 = new ol.format.GeoJSON();
var features_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9 = format_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9.readFeatures(json_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9.addFeatures(features_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9);
var lyr_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9, 
                style: style_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9,
                popuplayertitle: 'RUTA_9_PACHALUM_RD-QUI-18_CUBULCO_SAN_MARTIN_JILOTE',
                interactive: false,
                title: '<img src="styles/legend/RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9.png" /> RUTA_9_PACHALUM_RD-QUI-18_CUBULCO_SAN_MARTIN_JILOTE'
            });
var format_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10 = new ol.format.GeoJSON();
var features_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10 = format_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10.readFeatures(json_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10.addFeatures(features_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10);
var lyr_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10, 
                style: style_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10,
                popuplayertitle: 'RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI-02_04A_ZACUALP_CHINIQ',
                interactive: false,
                title: '<img src="styles/legend/RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10.png" /> RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI-02_04A_ZACUALP_CHINIQ'
            });
var format_MUNICIPIOS_HUEHUE_QUICHE_11 = new ol.format.GeoJSON();
var features_MUNICIPIOS_HUEHUE_QUICHE_11 = format_MUNICIPIOS_HUEHUE_QUICHE_11.readFeatures(json_MUNICIPIOS_HUEHUE_QUICHE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_HUEHUE_QUICHE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_HUEHUE_QUICHE_11.addFeatures(features_MUNICIPIOS_HUEHUE_QUICHE_11);
var lyr_MUNICIPIOS_HUEHUE_QUICHE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_HUEHUE_QUICHE_11, 
                style: style_MUNICIPIOS_HUEHUE_QUICHE_11,
                popuplayertitle: 'MUNICIPIOS_HUEHUE_QUICHE',
                interactive: false,
                title: '<img src="styles/legend/MUNICIPIOS_HUEHUE_QUICHE_11.png" /> MUNICIPIOS_HUEHUE_QUICHE'
            });
var format_POBLADOS_12 = new ol.format.GeoJSON();
var features_POBLADOS_12 = format_POBLADOS_12.readFeatures(json_POBLADOS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POBLADOS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLADOS_12.addFeatures(features_POBLADOS_12);
var lyr_POBLADOS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POBLADOS_12, 
                style: style_POBLADOS_12,
                popuplayertitle: 'POBLADOS',
                interactive: false,
                title: '<img src="styles/legend/POBLADOS_12.png" /> POBLADOS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1.setVisible(true);lyr_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2.setVisible(true);lyr_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3.setVisible(true);lyr_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4.setVisible(true);lyr_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5.setVisible(true);lyr_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6.setVisible(true);lyr_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7.setVisible(true);lyr_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8.setVisible(true);lyr_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9.setVisible(true);lyr_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10.setVisible(true);lyr_MUNICIPIOS_HUEHUE_QUICHE_11.setVisible(true);lyr_POBLADOS_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1,lyr_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2,lyr_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3,lyr_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4,lyr_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5,lyr_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6,lyr_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7,lyr_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8,lyr_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9,lyr_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10,lyr_MUNICIPIOS_HUEHUE_QUICHE_11,lyr_POBLADOS_12];
lyr_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'PAIS': 'PAIS', 'layer': 'layer', 'Categoria': 'Categoria', 'Descripcio': 'Descripcio', 'long': 'long', 'long_m': 'long_m', });
lyr_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', 'X1': 'X1', 'Y1': 'Y1', 'X2': 'X2', 'Y2': 'Y2', 'TERRA2025': 'TERRA2025', 'TERRA2024': 'TERRA2024', });
lyr_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', 'X1': 'X1', 'Y1': 'Y1', 'X2': 'X2', 'Y2': 'Y2', 'TERRA2025': 'TERRA2025', 'TERRA2024': 'TERRA2024', });
lyr_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', 'X1': 'X1', 'Y1': 'Y1', 'X2': 'X2', 'Y2': 'Y2', 'TERRA2025': 'TERRA2025', 'TERRA2024': 'TERRA2024', });
lyr_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', 'X1': 'X1', 'Y1': 'Y1', 'X2': 'X2', 'Y2': 'Y2', 'TERRA2025': 'TERRA2025', 'TERRA2024': 'TERRA2024', });
lyr_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', 'X1': 'X1', 'Y1': 'Y1', 'X2': 'X2', 'Y2': 'Y2', 'TERRA2025': 'TERRA2025', 'TERRA2024': 'TERRA2024', });
lyr_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', 'X1': 'X1', 'Y1': 'Y1', 'X2': 'X2', 'Y2': 'Y2', 'TERRA2025': 'TERRA2025', 'TERRA2024': 'TERRA2024', });
lyr_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'PAIS': 'PAIS', 'layer': 'layer', 'Categoria': 'Categoria', 'Descripcio': 'Descripcio', 'long': 'long', 'long_m': 'long_m', });
lyr_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'PAIS': 'PAIS', 'layer': 'layer', 'Categoria': 'Categoria', 'Descripcio': 'Descripcio', 'long': 'long', 'long_m': 'long_m', });
lyr_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'PAIS': 'PAIS', 'layer': 'layer', 'Categoria': 'Categoria', 'Descripcio': 'Descripcio', 'long': 'long', 'long_m': 'long_m', });
lyr_MUNICIPIOS_HUEHUE_QUICHE_11.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'municipio': 'municipio', 'cod_dep': 'cod_dep', 'departamen': 'departamen', 'codigo_mun': 'codigo_mun', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_POBLADOS_12.set('fieldAliases', {'OID_': 'OID_', 'COD_CENSO': 'COD_CENSO', 'COD_CART': 'COD_CART', 'NUEVO_COD': 'NUEVO_COD', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'LUGAR_POBL': 'LUGAR_POBL', 'CATEGORIA': 'CATEGORIA', 'REUBICADO': 'REUBICADO', 'OID1': 'OID1', 'POBTOT': 'POBTOT', 'HOMBRES': 'HOMBRES', 'MUJERES': 'MUJERES', 'GRUPO1': 'GRUPO1', 'GRUPO2': 'GRUPO2', 'GRUPO3': 'GRUPO3', 'GRUPO4': 'GRUPO4', 'GRUPO5': 'GRUPO5', 'GRUPO6': 'GRUPO6', 'GRUPO7': 'GRUPO7', 'GRUPO8': 'GRUPO8', 'GRUPO9': 'GRUPO9', 'GRUPO10': 'GRUPO10', 'GRUPO11': 'GRUPO11', 'GRUPO12': 'GRUPO12', 'GRUPO13': 'GRUPO13', 'GRUPO14': 'GRUPO14', 'URBANA': 'URBANA', 'RURAL': 'RURAL', 'OID_1': 'OID_1', 'X_': 'X_', 'Y_': 'Y_', });
lyr_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'PAIS': 'TextEdit', 'layer': 'TextEdit', 'Categoria': 'TextEdit', 'Descripcio': 'TextEdit', 'long': 'TextEdit', 'long_m': 'TextEdit', });
lyr_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'TERRA2025': 'TextEdit', 'TERRA2024': 'TextEdit', });
lyr_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'TERRA2025': 'TextEdit', 'TERRA2024': 'TextEdit', });
lyr_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'TERRA2025': 'TextEdit', 'TERRA2024': 'TextEdit', });
lyr_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'TERRA2025': 'TextEdit', 'TERRA2024': 'TextEdit', });
lyr_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'TERRA2025': 'TextEdit', 'TERRA2024': 'TextEdit', });
lyr_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'TERRA2025': 'TextEdit', 'TERRA2024': 'TextEdit', });
lyr_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'PAIS': 'TextEdit', 'layer': 'TextEdit', 'Categoria': 'TextEdit', 'Descripcio': 'TextEdit', 'long': 'TextEdit', 'long_m': 'TextEdit', });
lyr_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'PAIS': 'TextEdit', 'layer': 'TextEdit', 'Categoria': 'TextEdit', 'Descripcio': 'TextEdit', 'long': 'TextEdit', 'long_m': 'TextEdit', });
lyr_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'PAIS': 'TextEdit', 'layer': 'TextEdit', 'Categoria': 'TextEdit', 'Descripcio': 'TextEdit', 'long': 'TextEdit', 'long_m': 'TextEdit', });
lyr_MUNICIPIOS_HUEHUE_QUICHE_11.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'municipio': 'TextEdit', 'cod_dep': 'TextEdit', 'departamen': 'TextEdit', 'codigo_mun': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_POBLADOS_12.set('fieldImages', {'OID_': 'Range', 'COD_CENSO': 'TextEdit', 'COD_CART': 'TextEdit', 'NUEVO_COD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LUGAR_POBL': 'TextEdit', 'CATEGORIA': 'TextEdit', 'REUBICADO': 'TextEdit', 'OID1': 'Range', 'POBTOT': 'Range', 'HOMBRES': 'TextEdit', 'MUJERES': 'TextEdit', 'GRUPO1': 'Range', 'GRUPO2': 'Range', 'GRUPO3': 'Range', 'GRUPO4': 'Range', 'GRUPO5': 'Range', 'GRUPO6': 'Range', 'GRUPO7': 'Range', 'GRUPO8': 'Range', 'GRUPO9': 'Range', 'GRUPO10': 'Range', 'GRUPO11': 'Range', 'GRUPO12': 'Range', 'GRUPO13': 'Range', 'GRUPO14': 'Range', 'URBANA': 'Range', 'RURAL': 'Range', 'OID_1': 'Range', 'X_': 'TextEdit', 'Y_': 'TextEdit', });
lyr_RUTA_1_SAN_MATEO_IXTATAN_NENTON_RN_HUE_12_03_1.set('fieldLabels', {'NOMBRE': 'no label', 'TIPO': 'no label', 'PAIS': 'no label', 'layer': 'no label', 'Categoria': 'no label', 'Descripcio': 'no label', 'long': 'no label', 'long_m': 'no label', });
lyr_RUTA_2_NENTON_SANMATEO_RN09NORTE_12_RN09NORTE_13_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'DESCRIPCIO': 'no label', 'LONGITUD': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'UBG': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X2': 'no label', 'Y2': 'no label', 'TERRA2025': 'no label', 'TERRA2024': 'no label', });
lyr_RUTA_3_NEBAJ_BARILLAS_RNNORTE0913_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'DESCRIPCIO': 'no label', 'LONGITUD': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'UBG': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X2': 'no label', 'Y2': 'no label', 'TERRA2025': 'no label', 'TERRA2024': 'no label', });
lyr_RUTA_4_RNQUI0302_NEBAJ_BARILLAS_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'DESCRIPCIO': 'no label', 'LONGITUD': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'UBG': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X2': 'no label', 'Y2': 'no label', 'TERRA2025': 'no label', 'TERRA2024': 'no label', });
lyr_RUTA_5_SN_P_JOCOPILAS_SN_BART_JOCOTEN_SACAPULAS_RD_QUI_35_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'DESCRIPCIO': 'no label', 'LONGITUD': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'UBG': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X2': 'no label', 'Y2': 'no label', 'TERRA2025': 'no label', 'TERRA2024': 'no label', });
lyr_RUTA_6_ZACUALPA_CANILLA_RD_05_02_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'DESCRIPCIO': 'no label', 'LONGITUD': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'UBG': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X2': 'no label', 'Y2': 'no label', 'TERRA2025': 'no label', 'TERRA2024': 'no label', });
lyr_RUTA_7_JOYABAJ_RD_QUI_02_04B_CANILLA_RDQUI0502_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'DESCRIPCIO': 'no label', 'LONGITUD': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'UBG': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X2': 'no label', 'Y2': 'no label', 'TERRA2025': 'no label', 'TERRA2024': 'no label', });
lyr_RUTA_8_BARILLAS_FRANJA_TRANSVERSAL_8.set('fieldLabels', {'NOMBRE': 'no label', 'TIPO': 'no label', 'PAIS': 'no label', 'layer': 'no label', 'Categoria': 'no label', 'Descripcio': 'no label', 'long': 'no label', 'long_m': 'no label', });
lyr_RUTA_9_PACHALUM_RDQUI18_CUBULCO_SAN_MARTIN_JILOTE_9.set('fieldLabels', {'NOMBRE': 'no label', 'TIPO': 'no label', 'PAIS': 'no label', 'layer': 'no label', 'Categoria': 'no label', 'Descripcio': 'no label', 'long': 'no label', 'long_m': 'no label', });
lyr_RUTA_10_SN_MARTIN_JILOTE_JOYABAJ_RD_QUI02_04A_ZACUALP_CHINIQ_10.set('fieldLabels', {'NOMBRE': 'no label', 'TIPO': 'no label', 'PAIS': 'no label', 'layer': 'no label', 'Categoria': 'no label', 'Descripcio': 'no label', 'long': 'no label', 'long_m': 'no label', });
lyr_MUNICIPIOS_HUEHUE_QUICHE_11.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'municipio': 'no label', 'cod_dep': 'no label', 'departamen': 'no label', 'codigo_mun': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_POBLADOS_12.set('fieldLabels', {'OID_': 'no label', 'COD_CENSO': 'no label', 'COD_CART': 'no label', 'NUEVO_COD': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'LUGAR_POBL': 'no label', 'CATEGORIA': 'no label', 'REUBICADO': 'no label', 'OID1': 'no label', 'POBTOT': 'no label', 'HOMBRES': 'no label', 'MUJERES': 'no label', 'GRUPO1': 'no label', 'GRUPO2': 'no label', 'GRUPO3': 'no label', 'GRUPO4': 'no label', 'GRUPO5': 'no label', 'GRUPO6': 'no label', 'GRUPO7': 'no label', 'GRUPO8': 'no label', 'GRUPO9': 'no label', 'GRUPO10': 'no label', 'GRUPO11': 'no label', 'GRUPO12': 'no label', 'GRUPO13': 'no label', 'GRUPO14': 'no label', 'URBANA': 'no label', 'RURAL': 'no label', 'OID_1': 'no label', 'X_': 'no label', 'Y_': 'no label', });
lyr_POBLADOS_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});