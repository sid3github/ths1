
$('document').ready(function () {
    $('#submit-btn').on('click', function () {
        // var body = $('body');
        var street = $('#street').val();
        var city = $('#city').val();
        var address = street + ',' + city;
        var googleMapsBaseUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=';
        var googleMapsUrl = googleMapsBaseUrl + address + '&key=AIzaSyCpFT1rfG93z6U4AHowzjpT96WEqozjJRs';
        var backgroundImage = '<img class="bgimg" src=" ' + googleMapsUrl + ' ">';

        $('#map .bgimg').remove();
        $('#map').append(backgroundImage);

//wiki_info
    var wikiLocation = street + ',' + '_' + city;
    var wikiURL = 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=' + wikiLocation;
    console.log(wikiURL);

    function printContent(result) {
        var wikiContent = '<p class="wiki-content"></p>';
        $('#content').append(wikiContent);
        $('.wiki-content').html(result[2]);
    }

    $.ajax(wikiURL, {
        dataType: 'jsonp',
        method: 'GET',
        success: function (result) {
            console.log(result);
            printContent(result);
        },
        error: function (data) {
            console.log(data);
        }
    });

    });
});
