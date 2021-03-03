let boton = document.querySelector('#boton');
let nombrePokemon = document.querySelector('#nombrePokemon');

boton.addEventListener('click', function(){
  obtenerDatos();
})

function obtenerDatos(){
  let url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.value}`;

  //Realización de consulta con AJAX
  const api = new XMLHttpRequest(); //Instanciando objeto
  api.open('GET', url, true); //*GET: método, true: es asíncrono
  api.send();
  api.onreadystatechange = function(){

    if(this.status == 200 && this .readyState == 4){

      let datos = JSON.parse(this.responseText); //Transformación a formato json
      //console.log(datos.sprites.other.dream_world.front_default);
      //Nombre pokemon
      let nombre = document.querySelector('#parrafo1');
      nombre.innerHTML = `${datos.forms[0].name}`;

      //Imagen pokemon
      const canvas = document.querySelector("#canvas");
      const ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = `${datos.sprites.other.dream_world.front_default}`;
      ctx.drawImage(img, 0, 0);
    }
  }
}
