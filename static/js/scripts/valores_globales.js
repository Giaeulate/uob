
// mapa
var mapa;
var geoupOverlayer;
var vias;
var estaciones;
var pob_inicio;
var pob_fin;
var baseLayers;
var lyrControl;
var valor_municipios = [0];
var valor_provincias = [0];
var valor_departamentos = [0];
var printer;
var ur = '<a href="https://www.google.com">Google</a>';
var popup = L.popup({
    maxHeight: 500,
    maxWidth: 300,
}).setContent(ur)

var inicioIcon = L.icon({
    iconUrl: 'media/arrows/f4.png',
    iconSize:     [39, 39],
    iconAnchor:   [22, 22],
    popupAnchor:  [-3, -7]
});
var estacionIcon = L.icon({
    iconUrl: 'media/arrows/f2.png',
    iconSize:     [46, 46],
    iconAnchor:   [30, 30],
    popupAnchor:  [-3, -7]
});
var finIcon = L.icon({
    iconUrl: 'media/arrows/f5.png',
    iconSize:     [39, 39],
    iconAnchor:   [22, 22],
    popupAnchor:  [-3, -7]
});

function estiloInicio(feature, latlng) {
    return L.marker(latlng, {icon: inicioIcon});
}

function estiloEstacion(feature, latlng) {
    return L.marker(latlng, {icon: estacionIcon});
}

function estiloFin(feature, latlng) {
    return L.marker(latlng, {icon: finIcon});
}

var url_departamento = 'departamento/'
var url_provincia = 'provincia/'
var valor_id_categoria_vias = []

var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19,attribution: '&copy; <a href="http.//www.openstreetmap.org/copyright">OpenStreetMap</a>'});
var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {maxZoom: 17,attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanorams.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> ' +'(<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'});
var mapLink = '<a href="http://www.esri.com/">Esri</a>';
var wholink = 'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
var satellite = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {attribution: '&copy; '+mapLink+', '+wholink,maxZoom: 18,})

// graficos
var myChart;
var myChart2;
var barcharData;
var config;

var v_rodaduras = [];
var v_tipos = [];
var v_estaciones = [];
var v_years = [];
var v_tramos = [];
var v_rutas = [];

function showhidemap(){
    $("#gis").toggle('slow');
    $("#row_map").toggleClass('col-sm-2 col-md-4')
}

function create_tabla2(lista, year){
    //console.log(lista)
    var tabla = '<table class="table table-hover">'+
        '  <tr class="table-primary">'+
        '    <th scope="row">AÑO</th>'+
        '    <td>'+year+'</td>'+
        '  </tr>'+
        '  <tr class="table-secondary">'+
        '    <th scope="row">TPDA</th>'+
        '    <td>'+lista[0]+'</td>'+
        '  </tr>'+
        '  <tr class="table-secondary">'+
        '    <th scope="row">DD1</th>'+
        '    <td>'+lista[1]+'</td>'+
        '  </tr>'+
        '  <tr class="table-secondary">'+
        '    <th scope="row">DD2</th>'+
        '    <td>'+lista[2]+'</td>'+
        '  </tr>'+
        '  <tr class="table-secondary">'+
        '    <th scope="row">LIVIANOS</th>'+
        '    <td>'+lista[3]+'</td>'+
        '  </tr>'+
        '  <tr class="table-secondary">'+
        '    <th scope="row">BUSES</th>'+
        '    <td>'+lista[4]+'</td>'+
        '  </tr>'+
        '  <tr class="table-secondary">'+
        '    <th scope="row">CAMINOES</th>'+
        '    <td>'+lista[5]+'</td>'+
        '  </tr>'+
        '  <tr class="table-secondary">'+
        '    <th scope="row">OTROS</th>'+
        '    <td>'+lista[6]+'</td>'+
        '  </tr>'+
        '  <tr class="table-secondary">'+
        '    <th scope="row">PASAJEROS</th>'+
        '    <td>'+lista[7]+'</td>'+
        '  </tr>'+
        '  <tr class="table-secondary">'+
        '    <th scope="row">CARGA</th>'+
        '    <td>'+lista[8]+'</td>'+
        '  </tr>'+
        '</table>';
    return tabla
}

function randomColors(n,m=0.2) {
    lista_color = []
    lista_bordes = []
    for(var i=0;i<n;i++){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        lista_color.push("rgb(" + r + "," + g + "," + b + ","+m+")");
        lista_bordes.push("rgb(" + r + "," + g + "," + b + ", 1)");
    }
    return [lista_color, lista_bordes];
};

function change(newType) {
    var ctx = document.getElementById("myChart").getContext("2d");

    if (myChart) {myChart.destroy();}

    var temp = jQuery.extend(true, {}, config);
    temp.type = newType;
    myChart = new Chart(ctx, temp);
};

function create_tabla(lista, lista2){
    
    var y_2027 = 0
    var y_2022 = 0
    var obj2 = lista2[0].fields
    var tabla = '<table class="table table-hover">'+
        '  <tr class="table-primary">'+
        '    <th scope="row">AÑO</th>'+
        '    <th scope="row">TPDA</th>'+
        '    <th scope="row">DD1</th>'+
        '    <th scope="row">DD2</th>'+
        '    <th scope="row">LIVIANO</th>'+
        '    <th scope="row">BUS</th>'+
        '    <th scope="row">CAMION</th>'+
        '    <th scope="row">OTRO</th>'+
        '    <th scope="row">PASAJERO</th>'+
        '    <th scope="row">CARGA</th>'+
        '  </tr>';
        for(var i=0;i<lista.length;i++){
            var obj=lista[i].fields
            if (obj.year == 2027){
                y_2027 = obj
            }
            if (obj.year == 2022){
                y_2022 = obj
            }
            if (obj.tpda != 0 && obj.year != 2027 && obj.year !=2022){
                tabla +=
                '  <tr class="table-secondary">'+
                '    <td>'+obj.year+'</td>'+
                '    <td>'+Math.round(obj.tpda)+'</td>'+
                '    <td>'+Math.round(obj.dd1)+'</td>'+
                '    <td>'+Math.round(obj.dd2)+'</td>'+
                '    <td>'+Math.round(obj.liviano)+'</td>'+
                '    <td>'+Math.round(obj.bus)+'</td>'+
                '    <td>'+Math.round(obj.camion)+'</td>'+
                '    <td>'+Math.round(obj.otro)+'</td>'+
                '    <td>'+Math.round(obj.pasajero)+'</td>'+
                '    <td>'+Math.round(obj.carga)+'</td>'+
                '  </tr>';
            }
        }        
        var longitud = lista[0].fields.longitud
        
        if (obj2.prom_tpda_1 != 0){
            tabla += '  <tr class="table-primary">'+
                //'    <th scope="row">COBERTURA</th>'+
                '    <th scope="row">PROMEDIO TPDA</th>'+
                '    <th scope="row">PROMEDIO TPDA REAL</th>'+
                '    <th scope="row">PROMEDIO DD1</th>'+
                '    <th scope="row">PROMEDIO DD2</th>'+
                '    <th scope="row">PROMEDIO LIVIANO</th>'+
                '    <th scope="row">PROMEDIO BUS</th>'+
                '    <th scope="row">PROMEDIO CAMION</th>'+
                '    <th scope="row">PROMEDIO OTRO</th>'+
                '    <th scope="row">PROMEDIO PASAJERO</th>'+
                '    <th scope="row">PROMEDIO CARGA</th>'+
                '  </tr>';
            tabla +=
            '  <tr class="table-secondary">'+
           // '    <td>'+obj2.cobertura+'</td>'+
            '    <td>'+Math.round(obj2.prom_tpda_1)+'</td>'+
            '    <td>'+Math.round(obj2.prom_tpda_2)+'</td>'+
            '    <td>'+Math.round(obj2.prom_dd1)+'</td>'+
            '    <td>'+Math.round(obj2.prom_dd2)+'</td>'+
            '    <td>'+Math.round(obj2.prom_liviano)+'</td>'+
            '    <td>'+Math.round(obj2.prom_bus)+'</td>'+
            '    <td>'+Math.round(obj2.prom_camion)+'</td>'+
            '    <td>'+Math.round(obj2.prom_otro)+'</td>'+
            '    <td>'+Math.round(obj2.prom_pasajero)+'</td>'+
            '    <td>'+Math.round(obj2.prom_carga)+'</td>'+
            '  </tr>';
            ///////////////////////////
            tabla += '  <tr class="table-primary">'+
            '    <th scope="row">COBERTURA</th>'+
            '    <th scope="row">PROYECCIÓN TPDA 2022</th>'+
            '    <th scope="row">PROYECCIÓN TPDA 2027</th>'+
            '    <th scope="row">HORA MINIMA</th>'+
            '    <th scope="row">HORA MAXIMA</th>'+
            '    <th scope="row">HORA CONSTANTE</th>'+
            '    <th scope="row">MES PICO</th>'+
            '    <th scope="row">K</th>'+
            '    <th scope="row">CONCLUSIÓN</th>'+
            '    <th scope="row">LONGITUD</th>'+
            '  </tr>';
            tabla +=
            '  <tr class="table-secondary">'+
            '    <td>'+obj2.cobertura+'</td>'+
            '    <td>'+Math.round(y_2022.tpda)+'</td>'+
            '    <td>'+Math.round(y_2027.tpda)+'</td>'+
            '    <td>'+obj2.hora_minina+'</td>'+
            '    <td>'+obj2.hora_maxima+'</td>'+
            '    <td>'+obj2.hora_constante+'</td>'+
            '    <td>'+obj2.mes_pico+'</td>'+
            '    <td>'+obj2.k+'</td>'+
            '    <td>'+obj2.conclusion+'</td>'+
            '    <td>'+longitud+'</td>'+
            '  </tr>';
        }
    tabla += '</table>';
    return tabla
}

function create_graph(lista){
    
    var lista_t= [];
    for(var i=0;i<lista.length;i++){
        var obj=lista[i].fields
        if (obj.year == 2027){
            y_2027 = obj
        }
        if (obj.year == 2022){
            y_2022 = obj
        }
        if (obj.tpda != 0 && obj.year != 2027 && obj.year !=2022){
            var colorR = randomColors(1, 0.5);
            var datos = {
                type: 'bar',
                label: obj.year,
                backgroundColor: colorR[0][0],borderColor: colorR[1][0],barPercentage: 0.5,
                barThickness: 6,maxBarThickness: 8,minBarLength: 2,
                data: [
                    Math.round(obj.tpda), Math.round(obj.dd1),Math.round(obj.dd2),Math.round(obj.liviano),
                    Math.round(obj.bus),Math.round(obj.camion),Math.round(obj.otro),Math.round(obj.pasajero),
                    Math.round(obj.carga)
                ],
                //data: data.valores_totales[i],
                borderWidth: 2,
                pointStyle: 'rectRot',
                pointRadius: 10,
            }
            lista_t.push(datos);
        }
    }
    console.log(lista_t)
    
    barcharData = {
        labels: ['TPDA','DD1','DD2','LIVIANO','BUSES','CAMIÓN','OTRO','PASAJERO','CARGA'],
        datasets: lista_t
    }
    config = {
        data: barcharData,
        events: false,
        tooltips: {
            enabled: false
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'VÍAS'
            },
            tooltips: {
                mode: 'index', intersect: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                    position: 'left',
                },],
            },
        }
    }
    change('bar');
}