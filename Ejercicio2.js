'use strict';

function gestionarFicheroXML(xmlDoc)
{
  let capaVacia = document.querySelector("#ficheroXML")
  let libros = xmlDoc.querySelectorAll("nombre")
  for (let i = 0; i < libros.length; i++)
    capaVacia.innerHTML = capaVacia.innerHTML + "<div>" + libros[i].textContent + "</div>"
}


