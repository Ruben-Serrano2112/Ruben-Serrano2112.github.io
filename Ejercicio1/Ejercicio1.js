'use strict';

function gestionarFicheroXML(xmlDoc)
{
  let capaVacia = document.querySelector("#ficheroXML")
  let libros = xmlDoc.querySelectorAll("libro")
  for (let i = 0; i < libros.length; i++)
    capaVacia.innerHTML += 
    "<div class='columna'>"+libros[i].querySelector("ISBN").textContent +"<div>" +
    "<div class='columna'>"+libros[i].querySelector("titulo").textContent +"<div>" +
    "<div class='columna'>"+libros[i].querySelector("nivelProfundidad").textContent +"<div>" +
    "<div class='columna'>"+libros[i].querySelector("autores").textContent +"<div>" +
    "<div class='columna'>"+libros[i].querySelector("titulo").textContent +"<div>" +
    "<div class='columna'>"+libros[i].querySelector("editorial").textContent +"<div>" +
    "<div class='columna'>"+libros[i].querySelector("fechaPublicacion").textContent +"<div>" +
    "<div class='columna'>"+libros[i].querySelector("paginaWeb").textContent +"<div>" +
    "<div class='columna'>"+libros[i].querySelector("precio").textContent +"<div>"
    
}

let capa = document.querySelector("div") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("libros.xml","xml");
}
