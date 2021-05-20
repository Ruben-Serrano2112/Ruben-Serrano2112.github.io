
function gestionarFicheroXML(xmlDoc){ //Al ser un txt tienes que poner gestionarFicheroTXT(txtDoc)
	alert(xmlDoc) 
	let capaVacia = document.querySelector("#ficheroXML")
	let conversacion = xmlDoc.querySelectorAll("Mensajes") //Ya no puede hacer un querySelector del txtDoc. 
	for(let i=0; i<conversacion.length; i++)
		if (i == 2)
		{
		capaVacia.innerHTML = capaVacia.innerHTML + "<div class='izquierda'>" + conversacion[i].textContent + "</div>"
		}
		else
		{
		capaVacia.innerHTML = capaVacia.innerHTML + "<div class='derecha'>" + conversacion[i].textContent + "</div>"

		}
        alert("recargo")
        loadDocA("conver.xml","xml");

}
let capa = document.querySelector("div") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
        loadDocA("Mensajes.xml","xml");
}
