function gestionarFicheroTXT(txtDoc) {
	let capaVacia = document.querySelector("#ficheroXML")
	capaVacia.innerHTML =""
	let conversacion = txtDoc.split("\n");
	for (let i = 0; i < conversacion.length; i++)
		if (i % 2 == 0) {
			capaVacia.innerHTML = capaVacia.innerHTML + "<div class='izquierda'>" + conversacion[i] + "</div>"
		}
		else {
			capaVacia.innerHTML = capaVacia.innerHTML + "<div class='derecha'>" + conversacion[i] + "</div>"
		}
}
setInterval( CargarFichero,5000);
function CargarFichero() {
	loadDocA("Mensajes.txt", "txt");
}
