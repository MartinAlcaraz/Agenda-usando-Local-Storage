
import { displayTarjetas } from "./displayTarjetas.js";


export const agregarNuevaTarjeta = (event) => {
    
    event.preventDefault();

    const textoEntrada = document.querySelector("[data-form-input]").value;
    const fecha = document.querySelector("[data-form-date]").value;
    const fechaMoment= moment(fecha).format("DD/MM/YYYY");

    if ( (textoEntrada == "") || (fechaMoment == "Invalid date") ) {
        return;
    }

    const listaTarjetas = JSON.parse( localStorage.getItem("agenda-web") ) || [];

    const objTarjeta = {
        id : uuid.v4(),             // id unico generado por libreria
        completo: false,
        texto: textoEntrada,
        fecha: fechaMoment
    }
    
    listaTarjetas.push(objTarjeta);    
    
    localStorage.setItem("agenda-web", JSON.stringify(listaTarjetas));

    displayTarjetas();
 
    
}
