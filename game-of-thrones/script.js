$(document).ready(function () {
    $('img').on('click', function () {
        $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function(value) {
        
        }, "json");
    });
});
