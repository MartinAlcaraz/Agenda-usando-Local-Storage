import { crearTarjeta } from "./crearTarjeta.js";
import { ordenarFechasUnicas } from "./ordenar-fechas.js";

export const displayTarjetas = () => {

    const listaTarjetas = JSON.parse(localStorage.getItem("agenda-web")) || [];
    const card = document.querySelector("[data-list]");

    const arrayFechas = ordenarFechasUnicas(listaTarjetas);
    console.log(arrayFechas);
    listaTarjetas.forEach( datos => {

        card.appendChild( crearTarjeta(datos) );
        

    });


}