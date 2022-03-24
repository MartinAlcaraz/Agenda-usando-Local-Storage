
import { agregar } from "./agregar-tarjeta.js";
import { displayTarjetas } from "./displayTarjetas.js";

displayTarjetas();

const botonAgregar = document.querySelector("[data-form-btn]");

botonAgregar.addEventListener("click", agregar);




