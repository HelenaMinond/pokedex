//Función para llenar etiqueta select con nombres de pokemones traidos desde la base de datos.
$("document").ready(function(){
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0',
    type: "GET",
    dataType: 'JSON',
    success: function(data){
      const arregloPokemon = data.results;
      const nombresPokemon = arregloPokemon.map(function(val){
        let nombres = val.name;
        return nombres;
      })
      //Para recorrer data obteniendo lo nombres de los pokemones.
      for (const i of nombresPokemon){
        $("#selector").append(`<option value='${i}'>${i}</option>`)
      }
    }
  })
})


//Función para pintar nombre de pokemon en tarjeta.
$("#boton").click(function () {
  const seleccionPokemon = $("#selector").val();
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${seleccionPokemon}`,
    type: "GET",
    dataType: "JSON",
    success: function (data) {
      //console.log(data);
      let name = data.forms[0].name;
      let img = data.sprites.other.dream_world.front_default;
      let ability = data.abilities[0].ability.name;
      let hiddenAbility = data.abilities[1].ability.name;
      let move = data.moves[0].move.name;

      $('#namePokemon').text(name);
      $('#imgPokemon').attr('src', img);
      $('#abilityPokemon').text(ability);
      $('#hiddenAbilityPokemon').text(hiddenAbility);
      $('#movePokemon').text(move);
      //console.log(move);

    }
  });
});
