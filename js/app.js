//recupera la plantilla en formato String y guarda en la variable
let plantilla = $(".row").html();

//elimina el contenido con la clase .row
$(".row").html("");


$.get("https://3a8i3.github.io/libros/", function( datos ){
	mostrarDatos( datos );
});


function mostrarDatos( d ){
	console.log( d );

	for (let i = 0; i < d.length; i++) {
		
		let plantillaJQ = $ (plantilla);

		plantillaJQ.find(".titulo").text(d[i].titulo);
		plantillaJQ.find(".anho").text(d[i].anho);
		plantillaJQ.find(".editorial").text(d[i].editorial);
		plantillaJQ.find(".resumen").text(d[i].resumen);
		plantillaJQ.find(".temas").text(d[i].temas);
		plantillaJQ.find(".portada").attr("src",d[i].portada);
		plantillaJQ.find(".foto").attr("src",d[i].autor.foto);
		plantillaJQ.find(".nombre-autor").text(d[i].autor.nombre);
		plantillaJQ.find(".fecha-autor").text(d[i].autor.nacimiento.fecha);
		plantillaJQ.find(".ciudad-autor").text(d[i].autor.nacimiento.ciudad);
		plantillaJQ.find(".pais-autor").text(d[i].autor.nacimiento.pais);
		plantillaJQ.find(".bio-autor").text(d[i].autor.biografia);

		$(".row").append(plantillaJQ);

	}

}