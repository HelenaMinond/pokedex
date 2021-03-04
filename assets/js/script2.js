//Función para llenar etiqueta select con nombres de pokemones traidos desde la base de datos.
$("document").ready(function(){
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0', //offset: inicio, limit: final.
    type: "GET",
    dataType: 'JSON',
    success: function(data){
      const arregloPokemon = data.results; //Arreglo de objetos
      const nombresPokemon = arregloPokemon.map(function(val){ //Listado de strings
        let nombres = val.name.toUpperCase();
        return nombres;
      })
      //Para recorrer data obteniendo lo nombres de los pokemones.
      for (const i of nombresPokemon){
        $("#selector").append(`<option value='${i}'>${i}</option>`) //append: Método para inyectar código en HTML.
      }
    }
  })
})


//Función para pintar información de pokemón en pantalla.
$("#boton").click(function(){
  const seleccionPokemon = $("#selector").val().toLowerCase();
  //console.log(seleccionPokemon);
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${seleccionPokemon}`,
    type: "GET",
    dataType: "JSON",
    success: function (data) {
      //console.log(data);
      let name = data.forms[0].name.toUpperCase();
      let img = data.sprites.other.dream_world.front_default;
      let ability = data.abilities[0].ability.name.toUpperCase();
      let hiddenAbility = data.abilities[1].ability.name.toUpperCase();
      let move = data.moves[0].move.name.toUpperCase();

      $('#namePokemon').text(name);
      $('#imgPokemon').attr('src', img);
      $('#abilityPokemon').text(ability);
      $('#hiddenAbilityPokemon').text(hiddenAbility);
      $('#movePokemon').text(move);
      //console.log(move);
    }
  });
});
