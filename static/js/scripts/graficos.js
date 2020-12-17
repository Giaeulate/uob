
function randomColors2(n,m=0.2) {
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

function change2(newType) {
    var ctx = document.getElementById("myChart").getContext("2d");

    if (myChart) {myChart.destroy();}

    var temp = jQuery.extend(true, {}, config);
    temp.type = newType;
    myChart = new Chart(ctx, temp);
};

function graficar_via2(v, etiqueta, data){
    //console.log(data[0].datos_x)
    lista_t = [];
    for (var i=0;i<v_years.length;i++){
        var colorR = randomColors(1, 0.5);
        var datos = {
            type: v,
            label: etiqueta + (v_years[i]),
            backgroundColor: colorR[0][0],
            borderColor: colorR[1][0],
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: data[i].datos_x[0],
            //data: data.valores_totales[i],
            borderWidth: 2,
            pointStyle: 'rectRot',
            pointRadius: 10,
        }
        lista_t.push(datos);
        //console.log(data.valores[i])
    }

    barcharData = {
        labels: data[0].datos_y,
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
                text: etiqueta
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
    change2(v);
}

function addCarousel(lista=['/media/image_blank.jpg'], nombre='estacion-1'){
    if (lista.length == 0){
        return '<img width="350" src="/media/image_blank.jpg" alt="First slide">'
    }
    var carousel = '<div id="idCarousel" class="carousel slide" data-ride="carousel">'+
                   '<div class="carousel-inner">';
    var img;
    for (var i=0;i<lista.length;i++){
        if (i==1){
            img += '<div class="carousel-item active"><img class="d-block" width="800" height="500" src="'+lista[i]+'" alt="First slide"></div>'
        }else{
            img += '<div class="carousel-item"><img class="d-block" width="800" height="500" src="'+lista[i]+'" alt="First slide"></div>'
        }
    }
    carousel += img;
    carousel += '<a class="carousel-control-prev" href="#idCarousel" role="button" data-slide="prev">'+
                '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                '<span class="sr-only">Previous</span>'+
                '</a>'+
                '<a class="carousel-control-next" href="#idCarousel" role="button" data-slide="next">'+
                    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                    '<span class="sr-only">Next</span>'+
                '</a>'+
                '</div>';
    
    return carousel;
}

function addC(){
    return '<ul class="nav nav-tabs">'+
    '<li class="nav-item">'+
        '<a class="nav-link active" data-toggle="tab" href="#home">Home</a>'+
    '</li>'+
    '<li class="nav-item">'+
        '<a class="nav-link" data-toggle="tab" href="#profile">Profile</a>'+
    '</li>'+
    '</ul>'+
    '<div id="myTabContent" class="tab-content">'+
        '<div class="tab-pane fade active show" id="home">'+
            '<img height="420" width="420" src="/media/graficos/1-CV_KJBFLfB.png">'+
        '</div>'+
        '<div class="tab-pane fade" id="profile">'+
            '<img height="420" width="420" src="/media/graficos/1-FE.png">'+
        '</div>'+
    '</div>';
}

function tablaEstacion(estacion,tramo_abc,inicio_estudio,fin_estudio,fin_estudio,observacion,calidad,ajuste_coordenada){
    var tabla = $("#tablaEstacion");
    var tab = '';
    tab += '<table class="table table-hover">'+
            '  <tr class="table-primary">'+
            '    <th scope="row">ESTACIÓN</th>'+
            '    <td>'+estacion+'</td>'+
            '  </tr>'+
            '  <tr class="table-secondary">'+
            '    <th scope="row">TRAMO ABC</th>'+
            '    <td>'+tramo_abc+'</td>'+
            '  </tr>'+
            '  <tr class="table-secondary">'+
            '    <th scope="row">INICIO ESTUDIO</th>'+
            '    <td>'+inicio_estudio+'</td>'+
            '  </tr>'+
            '  <tr class="table-secondary">'+
            '    <th scope="row">FIN ESTUDIO</th>'+
            '    <td>'+fin_estudio+'</td>'+
            '  </tr>'+
            '  <tr class="table-secondary">'+
            '    <th scope="row">OBSERVACIÓN</th>'+
            '    <td>'+observacion+'</td>'+
            '  </tr>'+
            '  <tr class="table-secondary">'+
            '    <th scope="row">CALIDAD</th>'+
            '    <td>'+calidad+'</td>'+
            '  </tr>'+
            '  <tr class="table-secondary">'+
            '    <th scope="row">AJUSTE COORDENADA</th>'+
            '    <td>'+ajuste_coordenada+'</td>'+
            '  </tr>'+
            '</table>';
    tabla.html(tab)
}