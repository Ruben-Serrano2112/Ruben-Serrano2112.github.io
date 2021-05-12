'use strict';

function gestionarFicheroXML(xmlDoc)
{
  let capaVacia = document.querySelector("#ficheroXML")
  let libros = xmlDoc.querySelectorAll("libro")
  for (let i = 0; i < libros.length; i++)
    capaVacia.innerHTML += "<div class='fila'>" + libros[i].textContent + "</div>"
    
}

let capa = document.querySelector("div") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("libros.xml","xml");
}
