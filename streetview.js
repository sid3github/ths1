$('#submit-btn').on('click', function () {

    // var body = $('body');
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ',' + city;


    var googleMapsBaseUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=';
    var googleMapsUrl = googleMapsBaseUrl + address + '&key=AIzaSyCpFT1rfG93z6U4AHowzjpT96WEqozjJRs';
    var backgroundImage = '<img class="bgimg" src=" '+ googleMapsUrl +' ">';

    $('#map .bgimg').remove();
    $('#map').append(backgroundImage);
});