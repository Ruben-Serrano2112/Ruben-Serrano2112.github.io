'use strict';

function gestionarFicheroXML(xmlDoc)
{
  let capaVacia = document.querySelector("#ficheroXML")
  let libros = xmlDoc.querySelectorAll("libreria")
  for (let i = 0; i < libros.length; i++)
    capaVacia.innerHTML = capaVacia.innerHTML + "<div>" + libros[i].textContent + "</div>"
}

let capa = document.querySelector("div") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("leerFicheroXML.xml","xml");
}
