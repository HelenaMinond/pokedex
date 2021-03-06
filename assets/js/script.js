//Función para llenar etiqueta select con nombres de pokemones traidos desde la base de datos.
$("document").ready(function(){
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=300", //offset: inicio, limit: final.
    type: "GET",
    dataType: "JSON",
    success: function(data){
      const arregloPokemon = data.results; //Arreglo de objetos
      const nombresPokemon = arregloPokemon.map(function(val){ //Listado de strings
        let nombres = val.name.toUpperCase();
        return nombres;
      });
      //Para recorrer data obteniendo lo nombres de los pokemones.
      for (const i of nombresPokemon){
        $("#selector").append(`<option value='${i}'>${i}</option>`) //append: Método para inyectar código en HTML.
      }
    }
  });
});


//Función para pintar gráfico en pantalla (uso de Chart.js).
var ctx = document.getElementById('graphicPokemon').getContext('2d');
var graphicPokemon = new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: ['Puntos de Vida', 'Experiencia', 'Ataque', 'Defensa', 'Ataque Especial', 'Defensa Especial', 'Velocidad'],
      datasets: [{
        data: [45, 64, 49, 49, 65, 65, 45],
        backgroundColor: [
          'rgb(168, 161, 165, 0.6)',
          'rgb(39, 85, 118, 0.6)',
          'rgb(84, 162, 159, 0.6)',
          'rgb(233, 96, 42, 0.6)',
          'rgb(237, 124, 123, 0.6)',
          'rgb(250, 254, 125, 0.6)',
          'rgb(171, 207, 148, 0.6)'
        ]
      }]
    },
});


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

      //Dato imagen.
      let img = data.sprites.other.dream_world.front_default;
      //Datos en tabla.
      let name = data.name.toUpperCase();
      let type = data.types[0].type.name.toUpperCase();
      let ability = data.abilities[0].ability.name.toUpperCase();
      let move = data.moves[0].move.name.toUpperCase();
      //Datos en gráfico.
      let hp = data.stats[0].base_stat; //Puntos de vida de un pokemón.
      let experience = data.base_experience;
      let attack = data.stats[1].base_stat;
      let defense = data.stats[2].base_stat;
      let specialAttack = data.stats[3].base_stat;
      let specialDefense = data.stats[4].base_stat; //
      let speed = data.stats[5].base_stat; //
      //console.log(speed);

      $('#namePokemon').text(name);
      $('#imgPokemon').attr('src', img);
      $('#typePokemon').text(type);
      $('#abilityPokemon').text(ability);
      $('#movePokemon').text(move);

      //Función para pintar gráfico en pantalla (uso de Chart.js).
      var ctx = document.getElementById('graphicPokemon').getContext('2d');
      var graphicPokemon = new Chart(ctx, {
          type: "polarArea",
          data: {
            labels: ['Puntos de Vida', 'Experiencia', 'Ataque', 'Defensa', 'Ataque Especial', 'Defensa Especial', 'Velocidad'],
            datasets: [{
              data: [hp, experience, attack, defense, specialAttack, specialDefense, speed],
              backgroundColor: [
                'rgb(168, 161, 165, 0.6)',
                'rgb(39, 85, 118, 0.6)',
                'rgb(84, 162, 159, 0.6)',
                'rgb(233, 96, 42, 0.6)',
                'rgb(237, 124, 123, 0.6)',
                'rgb(250, 254, 125, 0.6)',
                'rgb(171, 207, 148, 0.6)'
              ]
            }]
          },
      });
    }
  });
});
