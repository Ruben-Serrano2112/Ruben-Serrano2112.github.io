function gestionarFicheroTXT(txtDoc){ //Al ser un txt tienes que poner gestionarFicheroTXT(txtDoc)
	alert(txtDoc)
	let capaVacia = document.querySelector("#ficheroXML")
	let conversacion = txtDoc.textContent("");  //Ya no puede hacer un querySelector del txtDoc. 
	for(let i=0; i<conversacion.length; i++)
		if (i % 2 == 0)
		{
		capaVacia.innerHTML = capaVacia.innerHTML + "<div class='izquierda'>" + conversacion[i].textContent + "</div>"
		}
		else
		{
		capaVacia.innerHTML = capaVacia.innerHTML + "<div class='derecha'>" + conversacion[i].textContent + "</div>"
		}
}
let capa = document.querySelector("div") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
        loadDocA("Mensajes.txt","txt");
}
