$(document).ready(function () {
    $('form').submit(function () {
        var location = $('#locationInput').val();
        $('#locationInput').val('');
        console.log(location);
        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&&appid=238984bd7c2291e393d7c9491ac01bd2`, function (res) {
            var temp = Math.round((res.main.temp) * 9 / 5 - 459);
            $('section').html(`<h1>${location}</h1><br><p>Temperature: ${temp}</p>`);
        }, 'json');
        return false;
    });
});