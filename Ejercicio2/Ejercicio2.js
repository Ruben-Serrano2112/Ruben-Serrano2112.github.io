function gestionarFicheroTXT(txtDoc) {
	let capaVacia = document.querySelector("#ficheroXML")
	alert("Voy a trocear")
	let conversacion = txtDoc.split("\n");
	for (let i = 0; i < conversacion.length; i++)
		if (i % 2 == 0) {
			capaVacia.innerHTML = capaVacia.innerHTML + "<div class='izquierda'>" + conversacion[i] + "</div>"
		}
		else {
			capaVacia.innerHTML = capaVacia.innerHTML + "<div class='derecha'>" + conversacion[i] + "</div>"
		}
}
let capa = document.querySelector("div")
capa.addEventListener("click", CargarFichero);
function CargarFichero() {
	loadDocA("Mensajes.txt", "txt");
}
