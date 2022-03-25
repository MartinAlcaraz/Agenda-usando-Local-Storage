import { agregar } from "./agregar.js";
import { crearTarjeta } from "./crearTarjeta.js";
import { obtenerFechasOrdenadas } from "./ordenar-fechas.js";
import { crearItemFecha } from "./crear-item-fecha.js";

export const displayTarjetas = () => {

    const listaTarjetas = JSON.parse(localStorage.getItem("agenda-web")) || [];
    const card = document.querySelector("[data-list]");
    
    while (card.firstChild) {       //  elimina todas la tarjetas mostradas
        card.removeChild(card.firstChild);
    }

    const arrayFechasOrdenadas = obtenerFechasOrdenadas(listaTarjetas);

    arrayFechasOrdenadas.forEach(fecha => {
                
        const tarjetaFecha = crearItemFecha(fecha);
        agregar(tarjetaFecha);        

        let datos;                          //  contiene los datos de cada tarjeta
        for (let i=0 ; i < listaTarjetas.length; i++){
            datos = listaTarjetas[i];
            if( fecha == datos.fecha ){
                 let tarjeta = crearTarjeta(datos);
                 agregar(tarjeta);
            }
        }
        
    });
    

}