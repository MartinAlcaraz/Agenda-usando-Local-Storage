
import { agregarNuevaTarjeta } from "./agregar-tarjeta-nueva.js";
import { displayTarjetas } from "./displayTarjetas.js";

displayTarjetas();

const botonAgregar = document.querySelector("[data-form-btn]");

botonAgregar.addEventListener("click", agregarNuevaTarjeta);




