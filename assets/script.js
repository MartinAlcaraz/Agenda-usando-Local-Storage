
import { agregarNuevaTarjeta } from "./agregar-tarjeta-nueva.js";
import { displayTarjetas } from "./displayTarjetas.js";

if ( localStorage.getItem("agenda-web") != null){
    displayTarjetas();    
}

const botonAgregar = document.querySelector("[data-form-btn]");

const input = document.querySelector("[data-form-input]");

input.addEventListener("keydown", () => {
    const alert= document.querySelector("[data-alert]");
    alert.classList.remove("alert-show");
});



botonAgregar.addEventListener("click", agregarNuevaTarjeta);




