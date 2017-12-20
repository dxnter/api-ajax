$(document).ready(function () {
    for (var i = 1; i <= 151; i++) {
        $('section').append(`<img id="${i}"src="http://pokeapi.co/media/sprites/pokemon/${i}.png"</img>`);
    }
    $('img').on('click', function () {
        $('aside').empty();
        var id = $(this).attr('id');
        $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function(value) {
            $('aside').append(`<h1>${value.name}</h1>`);
            $('aside').append(`<img id="${id}"src="http://pokeapi.co/media/sprites/pokemon/${id}.png"</img>`);
            $('aside').append(`<p>Types</p>`);
            for(var x = 0; x < value.types.length; x++) {
                $('aside').append(`<ul><li>${value.types[x].type.name}</li></ul>`);
            }
            $('aside').append(`<p>Height</p><ul><li>${value.height}</li></ul>`);
            $('aside').append(`<p>Weight</p><ul><li>${value.weight}</li></ul>`);
        }, "json");
    });
});
