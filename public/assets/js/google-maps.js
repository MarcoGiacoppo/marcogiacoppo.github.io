function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -8.639880, lng: 115.140167};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Canggu, INA' // Title Location
    });
}