$(document).ready(function () {
    get_via();
});

function get_via() {
    $.ajax({
        url: 'get_point/', type: "GET", dataType: 'json',
        success: function (data) {
            puntos = new L.geoJSON(data.features, {
                onEachFeature: function (feature, layer) {
                    layer.bindPopup('Punto Muestra: ' + feature.properties.punto_muestra.toString())
                }
            }).addTo(mapa)
            lyrControl.addOverlay(puntos, 'Puntos', 'Puntos')

        }, beforeSend: function () {
            $("#modal1").modal('show')
        }, complete: function () {
            $("#modal1").modal('hide')
        }, error: function (xhr, ajaxOptions, thrownError) {
            $("#modal1").modal('hide')
            alert("Hubo un error por favor revise la conexión a internet");
        }
    })
}