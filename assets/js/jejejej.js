$("document").ready(function () {
  // Select de Pokemones
  /*
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0",
    type: "GET",
    dataType: "JSON",
    success: function (data) {
      console.log(data.results);

      const arreglo = data.results;
      const nombresPoke = arreglo.map(function (el) {
        let nom = el.name.toUpperCase();
        return nom;
      });
      // nombresPoke es un arreglo de strings
      for (const i of nombresPoke) {
        $("#selectPoke").append(`
        <option value="${i}">${i}</option>
        `);
      }
    }
  });
  */

  /*
  // Input de Datos de un Pokemon
  $.ajax({
    // url: `https://pokeapi.co/api/v2/pokemon/${inputPoke}`,
    type: "GET",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
    }
  });
  */

  $("#btnbuscar").click(function () {
    const input = $("#texto").val();
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${input}`,
      type: "GET",
      dataType: "JSON",
      success: function (data) {
        console.log(data.moves);
      }
    });
  });
});
