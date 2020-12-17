function addCarousel(lista=['/media/image_blank.jpg'], nombre='estacion-1'){
    console.log(lista)
    var carousel = '<div id="'+nombre+'" class="carousel slide" data-ride="carousel">'+
                   '<div class="carousel-inner">';
    var img;
    for (var i=0;i<lista.length;i++){
        if (i==1){
            img += '<div class="carousel-item active"><img class="d-block w-100" src="'+lista[i]+'" alt="First slide"></div>'
        }else{
            img += '<div class="carousel-item"><img class="d-block w-100" src="'+lista[i]+'" alt="First slide"></div>'
        }
    }
    carousel += '<a class="carousel-control-prev" href="#'+nombre+'" role="button" data-slide="prev">'+
                '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                '<span class="sr-only">Previous</span>'+
                '</a>'+
                '<a class="carousel-control-next" href="#'+nombre+'" role="button" data-slide="next">'+
                    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                    '<span class="sr-only">Next</span>'+
                '</a>'+
                '</div>'
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
        '<p>Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>'+
    '</div>'+
    '<div class="tab-pane fade" id="profile">'+
        '<p>Food truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>'+
    '</div>'+
    '</div>';
}

function addC2(){
    return '<div class="carousel-inner" role="listbox">'+
            '<div class="carousel-item text-center text-light mb-5 active">'+
                '<img height="420" width="420" src="/media/graficos/1-CV_KJBFLfB.png">'+
            '</div>'+
    '</div>';
}