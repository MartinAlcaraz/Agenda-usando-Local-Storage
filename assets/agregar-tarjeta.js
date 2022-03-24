import { crearTarjeta } from "./crearTarjeta.js";


export const agregar = (event) => {
    
    event.preventDefault();

    //const botonAgregar = document.querySelector("[data-form-input]");
    const textoEntrada = document.querySelector("[data-form-input]").value;
    const fecha = document.querySelector("[data-form-date]").value;
    const fechaMoment= moment(fecha).format("DD/MM/YYYY");
    const card = document.querySelector("[data-list]");
    
    const listaTarjetas = JSON.parse( localStorage.getItem("agenda-web") ) || [];

    const objTarjeta = {
        id : uuid.v4(),             // id unico generado por libreria
        completo: false,
        texto: textoEntrada,
        fecha: fechaMoment
    }

    console.log(fecha);

    const tarjeta = crearTarjeta(objTarjeta);

    listaTarjetas.push(objTarjeta);    
    
    localStorage.setItem("agenda-web", JSON.stringify(listaTarjetas));

    card.appendChild(tarjeta);   
    
    
}
