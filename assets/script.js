
import { agregarNuevaTarjeta } from "./agregar-tarjeta-nueva.js";
import { displayTarjetas } from "./displayTarjetas.js";

displayTarjetas();

const botonAgregar = document.querySelector("[data-form-btn]");

const input = document.querySelector("[data-form-input]");

input.addEventListener("keydown", ocultarAlert => {
    const alert= document.querySelector("[data-alert]");
    alert.classList.remove("alert-show");
});

botonAgregar.addEventListener("click", agregarNuevaTarjeta);




