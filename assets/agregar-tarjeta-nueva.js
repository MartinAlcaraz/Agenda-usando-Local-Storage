
import { displayTarjetas } from "./displayTarjetas.js";


export const agregarNuevaTarjeta = (event) => {
    
    event.preventDefault();

    const textoEntrada = document.querySelector("[data-form-input]");
    const fecha = document.querySelector("[data-form-date]");
    const fechaMoment= moment(fecha.value).format("DD/MM/YYYY");
    const alert =document.querySelector("[data-alert]");

    if ( (textoEntrada.value == "") || (fechaMoment == "Invalid date") ) {
        
        alert.classList.add("alert-show");
        textoEntrada.value = "";        
        return;
    }

    const listaTarjetas = JSON.parse( localStorage.getItem("agenda-web") ) || [];

    const objTarjeta = {
        id : uuid.v4(),             // id unico generado por libreria
        completo: false,
        texto: textoEntrada.value,
        fecha: fechaMoment
    }
    
    listaTarjetas.push(objTarjeta);    
       
    localStorage.setItem("agenda-web", JSON.stringify(listaTarjetas));
        
        // reiniciar inputs
    
    
    textoEntrada.value = "";

    displayTarjetas();
    
}
