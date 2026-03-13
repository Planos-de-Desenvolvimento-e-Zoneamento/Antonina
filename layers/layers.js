ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-48.697668, -25.461630, -48.660427, -25.442704]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservao_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_1 = format_UnidadesdeConservao_1.readFeatures(json_UnidadesdeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadesdeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_1.addFeatures(features_UnidadesdeConservao_1);
var lyr_UnidadesdeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_1, 
                style: style_UnidadesdeConservao_1,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_1.png" /> Unidades de Conservação '
            });
var format_reasUrbanaseRurais_2 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_2 = format_reasUrbanaseRurais_2.readFeatures(json_reasUrbanaseRurais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasUrbanaseRurais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_2.addFeatures(features_reasUrbanaseRurais_2);
var lyr_reasUrbanaseRurais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_2, 
                style: style_reasUrbanaseRurais_2,
                popuplayertitle: 'Áreas Urbanas e Rurais ',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_2.png" /> Áreas Urbanas e Rurais '
            });
var format_FundeadourosLongoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_3 = format_FundeadourosLongoPrazo_3.readFeatures(json_FundeadourosLongoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_3.addFeatures(features_FundeadourosLongoPrazo_3);
var lyr_FundeadourosLongoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_3, 
                style: style_FundeadourosLongoPrazo_3,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_3.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_4 = format_FundeadourosMdioPrazo_4.readFeatures(json_FundeadourosMdioPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_4.addFeatures(features_FundeadourosMdioPrazo_4);
var lyr_FundeadourosMdioPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_4, 
                style: style_FundeadourosMdioPrazo_4,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_4.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_5 = format_FundeadourosCurtoPrazo_5.readFeatures(json_FundeadourosCurtoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_5.addFeatures(features_FundeadourosCurtoPrazo_5);
var lyr_FundeadourosCurtoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_5, 
                style: style_FundeadourosCurtoPrazo_5,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_5.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_6 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_6 = format_FundeadourosSituaoAtual_6.readFeatures(json_FundeadourosSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_6.addFeatures(features_FundeadourosSituaoAtual_6);
var lyr_FundeadourosSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_6, 
                style: style_FundeadourosSituaoAtual_6,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_6.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_7 = format_BaciasdeEvoluoLongoPrazo_7.readFeatures(json_BaciasdeEvoluoLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_7.addFeatures(features_BaciasdeEvoluoLongoPrazo_7);
var lyr_BaciasdeEvoluoLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_7, 
                style: style_BaciasdeEvoluoLongoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_7.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_8 = format_BaciasdeEvoluoMdioPrazo_8.readFeatures(json_BaciasdeEvoluoMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_8.addFeatures(features_BaciasdeEvoluoMdioPrazo_8);
var lyr_BaciasdeEvoluoMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_8, 
                style: style_BaciasdeEvoluoMdioPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_8.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_9 = format_BaciasdeEvoluoCurtoPrazo_9.readFeatures(json_BaciasdeEvoluoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_9.addFeatures(features_BaciasdeEvoluoCurtoPrazo_9);
var lyr_BaciasdeEvoluoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_9, 
                style: style_BaciasdeEvoluoCurtoPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_9.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_10 = format_BaciasdeEvoluoSituaoAtual_10.readFeatures(json_BaciasdeEvoluoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_10.addFeatures(features_BaciasdeEvoluoSituaoAtual_10);
var lyr_BaciasdeEvoluoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_10, 
                style: style_BaciasdeEvoluoSituaoAtual_10,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_10.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_11 = format_CanaisdeAcessoLongoPrazo_11.readFeatures(json_CanaisdeAcessoLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_11.addFeatures(features_CanaisdeAcessoLongoPrazo_11);
var lyr_CanaisdeAcessoLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_11, 
                style: style_CanaisdeAcessoLongoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_11.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_12 = format_CanaisdeAcessoMdioPrazo_12.readFeatures(json_CanaisdeAcessoMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_12.addFeatures(features_CanaisdeAcessoMdioPrazo_12);
var lyr_CanaisdeAcessoMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_12, 
                style: style_CanaisdeAcessoMdioPrazo_12,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_12.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_13 = format_CanaisdeAcessoCurtoPrazo_13.readFeatures(json_CanaisdeAcessoCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_13.addFeatures(features_CanaisdeAcessoCurtoPrazo_13);
var lyr_CanaisdeAcessoCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_13, 
                style: style_CanaisdeAcessoCurtoPrazo_13,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_13.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_14 = format_CanaisdeAcessoSituaoAtual_14.readFeatures(json_CanaisdeAcessoSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_14.addFeatures(features_CanaisdeAcessoSituaoAtual_14);
var lyr_CanaisdeAcessoSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_14, 
                style: style_CanaisdeAcessoSituaoAtual_14,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_14.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosFerroviriosInternosLongoPrazo_15 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosLongoPrazo_15 = format_AcessosFerroviriosInternosLongoPrazo_15.readFeatures(json_AcessosFerroviriosInternosLongoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosLongoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosLongoPrazo_15.addFeatures(features_AcessosFerroviriosInternosLongoPrazo_15);
var lyr_AcessosFerroviriosInternosLongoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosLongoPrazo_15, 
                style: style_AcessosFerroviriosInternosLongoPrazo_15,
                popuplayertitle: 'Acessos Ferroviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosLongoPrazo_15.png" /> Acessos Ferroviários Internos - Longo Prazo '
            });
var format_AcessosFerroviriosInternosMdioPrazo_16 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_16 = format_AcessosFerroviriosInternosMdioPrazo_16.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_16.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_16);
var lyr_AcessosFerroviriosInternosMdioPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_16, 
                style: style_AcessosFerroviriosInternosMdioPrazo_16,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_16.png" /> Acessos Ferroviários Internos - Médio Prazo '
            });
var format_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosCurtoPrazo_17 = format_AcessosFerroviriosInternosCurtoPrazo_17.readFeatures(json_AcessosFerroviriosInternosCurtoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosCurtoPrazo_17.addFeatures(features_AcessosFerroviriosInternosCurtoPrazo_17);
var lyr_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosCurtoPrazo_17, 
                style: style_AcessosFerroviriosInternosCurtoPrazo_17,
                popuplayertitle: 'Acessos Ferroviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosCurtoPrazo_17.png" /> Acessos Ferroviários Internos - Curto Prazo '
            });
var format_AcessosFerroviriosInternosSituaoAtual_18 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosSituaoAtual_18 = format_AcessosFerroviriosInternosSituaoAtual_18.readFeatures(json_AcessosFerroviriosInternosSituaoAtual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosSituaoAtual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosSituaoAtual_18.addFeatures(features_AcessosFerroviriosInternosSituaoAtual_18);
var lyr_AcessosFerroviriosInternosSituaoAtual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosSituaoAtual_18, 
                style: style_AcessosFerroviriosInternosSituaoAtual_18,
                popuplayertitle: 'Acessos Ferroviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosSituaoAtual_18.png" /> Acessos Ferroviários Internos - Situação Atual '
            });
var format_AcessosFerroviriosExternos_19 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_19 = format_AcessosFerroviriosExternos_19.readFeatures(json_AcessosFerroviriosExternos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosExternos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_19.addFeatures(features_AcessosFerroviriosExternos_19);
var lyr_AcessosFerroviriosExternos_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_19, 
                style: style_AcessosFerroviriosExternos_19,
                popuplayertitle: 'Acessos Ferroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_19.png" /> Acessos Ferroviários Externos '
            });
var format_AcessosRodoviriosExternos_20 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_20 = format_AcessosRodoviriosExternos_20.readFeatures(json_AcessosRodoviriosExternos_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_20.addFeatures(features_AcessosRodoviriosExternos_20);
var lyr_AcessosRodoviriosExternos_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_20, 
                style: style_AcessosRodoviriosExternos_20,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_20.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_25 = format_reasNoAfetassOperaesPorturiasLongoPrazo_25.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_25.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_25);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_25, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_25.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_26 = format_reasNoAfetassOperaesPorturiasMdioPrazo_26.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_26.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_26);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_26, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_26.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_27 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_27.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_27.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_27);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_27, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_27.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_28 = format_reasNoAfetassOperaesPorturiasSituaoAtual_28.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_28.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_28);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_28, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_28.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_reaseInstalaesAlfandegadas_29 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_29 = format_reaseInstalaesAlfandegadas_29.readFeatures(json_reaseInstalaesAlfandegadas_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_29.addFeatures(features_reaseInstalaesAlfandegadas_29);
var lyr_reaseInstalaesAlfandegadas_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_29, 
                style: style_reaseInstalaesAlfandegadas_29,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_29.png" /> Áreas e Instalações Alfandegadas '
            });
var format_AcostagemLongoPrazo_30 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_30 = format_AcostagemLongoPrazo_30.readFeatures(json_AcostagemLongoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_30.addFeatures(features_AcostagemLongoPrazo_30);
var lyr_AcostagemLongoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_30, 
                style: style_AcostagemLongoPrazo_30,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_30.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_31 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_31 = format_AcostagemMdioPrazo_31.readFeatures(json_AcostagemMdioPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_31.addFeatures(features_AcostagemMdioPrazo_31);
var lyr_AcostagemMdioPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_31, 
                style: style_AcostagemMdioPrazo_31,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_31.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_32 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_32 = format_AcostagemCurtoPrazo_32.readFeatures(json_AcostagemCurtoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_32.addFeatures(features_AcostagemCurtoPrazo_32);
var lyr_AcostagemCurtoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_32, 
                style: style_AcostagemCurtoPrazo_32,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_32.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_33 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_33 = format_AcostagemSituaoAtual_33.readFeatures(json_AcostagemSituaoAtual_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_33.addFeatures(features_AcostagemSituaoAtual_33);
var lyr_AcostagemSituaoAtual_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_33, 
                style: style_AcostagemSituaoAtual_33,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_33.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_34 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_34 = format_ArmazenagemLongoPrazo_34.readFeatures(json_ArmazenagemLongoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_34.addFeatures(features_ArmazenagemLongoPrazo_34);
var lyr_ArmazenagemLongoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_34, 
                style: style_ArmazenagemLongoPrazo_34,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_34.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_35 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_35 = format_ArmazenagemMdioPrazo_35.readFeatures(json_ArmazenagemMdioPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_35.addFeatures(features_ArmazenagemMdioPrazo_35);
var lyr_ArmazenagemMdioPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_35, 
                style: style_ArmazenagemMdioPrazo_35,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_35.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_36 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_36 = format_ArmazenagemCurtoPrazo_36.readFeatures(json_ArmazenagemCurtoPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_36.addFeatures(features_ArmazenagemCurtoPrazo_36);
var lyr_ArmazenagemCurtoPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_36, 
                style: style_ArmazenagemCurtoPrazo_36,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_36.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_37 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_37 = format_ArmazenagemSituaoAtual_37.readFeatures(json_ArmazenagemSituaoAtual_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_37.addFeatures(features_ArmazenagemSituaoAtual_37);
var lyr_ArmazenagemSituaoAtual_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_37, 
                style: style_ArmazenagemSituaoAtual_37,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_37.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_38.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_39.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_41.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_42 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_42 = format_reasAfetassOperaesPorturiasLongoPrazo_42.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_42.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_42);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_42, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_42,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_42.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_43 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_43 = format_reasAfetassOperaesPorturiasMdioPrazo_43.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_43.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_43);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_43, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_43,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_43.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_44 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_44 = format_reasAfetassOperaesPorturiasCurtoPrazo_44.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_44.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_44);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_44, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_44,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_44.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_45 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_45 = format_reasAfetassOperaesPorturiasSituaoAtual_45.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_45.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_45);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_45, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_45,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_45.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeAntonina_46 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeAntonina_46 = format_PoligonaldareadoPortoOrganizadodeAntonina_46.readFeatures(json_PoligonaldareadoPortoOrganizadodeAntonina_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeAntonina_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeAntonina_46.addFeatures(features_PoligonaldareadoPortoOrganizadodeAntonina_46);
var lyr_PoligonaldareadoPortoOrganizadodeAntonina_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeAntonina_46, 
                style: style_PoligonaldareadoPortoOrganizadodeAntonina_46,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Antonina',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeAntonina_46.png" /> Poligonal da Área do Porto Organizado de Antonina'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeAntonina_46,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_42,lyr_reasAfetassOperaesPorturiasMdioPrazo_43,lyr_reasAfetassOperaesPorturiasCurtoPrazo_44,lyr_reasAfetassOperaesPorturiasSituaoAtual_45,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas'});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_34,lyr_ArmazenagemMdioPrazo_35,lyr_ArmazenagemCurtoPrazo_36,lyr_ArmazenagemSituaoAtual_37,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_30,lyr_AcostagemMdioPrazo_31,lyr_AcostagemCurtoPrazo_32,lyr_AcostagemSituaoAtual_33,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_29,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_25,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_26,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_27,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_28,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_20,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_19,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos '});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosLongoPrazo_15,lyr_AcessosFerroviriosInternosMdioPrazo_16,lyr_AcessosFerroviriosInternosCurtoPrazo_17,lyr_AcessosFerroviriosInternosSituaoAtual_18,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_11,lyr_CanaisdeAcessoMdioPrazo_12,lyr_CanaisdeAcessoCurtoPrazo_13,lyr_CanaisdeAcessoSituaoAtual_14,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_7,lyr_BaciasdeEvoluoMdioPrazo_8,lyr_BaciasdeEvoluoCurtoPrazo_9,lyr_BaciasdeEvoluoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_3,lyr_FundeadourosMdioPrazo_4,lyr_FundeadourosCurtoPrazo_5,lyr_FundeadourosSituaoAtual_6,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_2,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_1,],
                                fold: 'open',
                                title: 'Unidades de Conservação '});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservao_1.setVisible(false);lyr_reasUrbanaseRurais_2.setVisible(false);lyr_FundeadourosLongoPrazo_3.setVisible(false);lyr_FundeadourosMdioPrazo_4.setVisible(false);lyr_FundeadourosCurtoPrazo_5.setVisible(false);lyr_FundeadourosSituaoAtual_6.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_8.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_9.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_10.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_11.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_12.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_13.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_14.setVisible(false);lyr_AcessosFerroviriosInternosLongoPrazo_15.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_16.setVisible(false);lyr_AcessosFerroviriosInternosCurtoPrazo_17.setVisible(false);lyr_AcessosFerroviriosInternosSituaoAtual_18.setVisible(false);lyr_AcessosFerroviriosExternos_19.setVisible(false);lyr_AcessosRodoviriosExternos_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_28.setVisible(false);lyr_reaseInstalaesAlfandegadas_29.setVisible(false);lyr_AcostagemLongoPrazo_30.setVisible(false);lyr_AcostagemMdioPrazo_31.setVisible(false);lyr_AcostagemCurtoPrazo_32.setVisible(false);lyr_AcostagemSituaoAtual_33.setVisible(false);lyr_ArmazenagemLongoPrazo_34.setVisible(false);lyr_ArmazenagemMdioPrazo_35.setVisible(false);lyr_ArmazenagemCurtoPrazo_36.setVisible(false);lyr_ArmazenagemSituaoAtual_37.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_42.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_43.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_44.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_45.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeAntonina_46.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadesdeConservao,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosFerroviriosInternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_reaseInstalaesAlfandegadas,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadesdeConservao_1.set('fieldAliases', {'Nome': 'Nome', 'Inst_Legal': 'Instrumento Legal ', 'Area': 'Área (m²) ', });
lyr_reasUrbanaseRurais_2.set('fieldAliases', {'Tipo': 'Tipo', 'Inst_Legal': 'Instrumento Legal ', 'Area': 'Área (m²) ', });
lyr_FundeadourosLongoPrazo_3.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_4.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_5.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_6.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosExternos_19.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descrição ', });
lyr_AcessosRodoviriosExternos_20.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Area': 'Área (m²) ', 'Util_area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Area': 'Área (m²) ', 'Util_area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Area': 'Área (m²) ', 'Util_area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Area': 'Área (m²) ', 'Util_area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_25.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_26.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_27.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_28.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_reaseInstalaesAlfandegadas_29.set('fieldAliases', {'Inst_Legal': 'Instrumento Legal ', });
lyr_AcostagemLongoPrazo_30.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_31.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_32.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_33.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_34.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade ', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemMdioPrazo_35.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemCurtoPrazo_36.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemSituaoAtual_37.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²)', 'Volume': 'Volume (m³) ', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_42.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_43.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_44.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_45.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizadodeAntonina_46.set('fieldAliases', {'Name': 'Anexo ', 'ins': 'Instrumento Legal ', });
lyr_UnidadesdeConservao_1.set('fieldImages', {'Nome': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasUrbanaseRurais_2.set('fieldImages', {'Tipo': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Area': 'TextEdit', });
lyr_FundeadourosLongoPrazo_3.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_4.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_5.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_6.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosExternos_19.set('fieldImages', {'Linha': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_AcessosRodoviriosExternos_20.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Area': 'TextEdit', 'Util_area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Area': 'TextEdit', 'Util_area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Area': 'TextEdit', 'Util_area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Area': 'TextEdit', 'Util_area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_25.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_26.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_27.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_28.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_29.set('fieldImages', {'Inst_Legal': 'TextEdit', });
lyr_AcostagemLongoPrazo_30.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'Range', 'Profund': 'Range', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_31.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'Range', 'Profund': 'Range', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_32.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'Range', 'Profund': 'Range', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_33.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'Range', 'Profund': 'Range', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_34.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_35.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_36.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_37.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_42.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_43.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_44.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_45.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeAntonina_46.set('fieldImages', {'Name': 'TextEdit', 'ins': 'TextEdit', });
lyr_UnidadesdeConservao_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_2.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_3.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_4.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_5.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_6.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_19.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util_area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util_area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util_area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util_area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_25.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_29.set('fieldLabels', {'Inst_Legal': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_30.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_31.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_32.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_33.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_34.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_35.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_36.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_37.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_38.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_39.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_40.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_41.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeAntonina_46.set('fieldLabels', {'Name': 'inline label - visible with data', 'ins': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeAntonina_46.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});