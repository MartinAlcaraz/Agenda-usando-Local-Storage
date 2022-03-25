import { actualizarLista } from "./actualizar-lista.js";
import { abrirTarjeta } from "./abrir-tarjeta.js";

export const crearTarjeta = ({id, completo, texto, fecha}) => {

    const tarjeta = document.createElement("li");
    const textoTarjeta = document.createElement("span");
    
    const iconoCheck = document.createElement("i");
    const iconoEliminar = document.createElement("i");

    tarjeta.classList.add("card");
    tarjeta.setAttribute("id", id);
    textoTarjeta.classList.add("card__texto");
    textoTarjeta.innerHTML = texto;

    // agrega el eventHandler a la trajeta para abrirla

    tarjeta.addEventListener("click", (event) => {
        try {
            abrirTarjeta(event);
        }catch{

        }      
    });

    iconoCheck.classList.add("far", "fa-check-circle", "icon");
    // agrega el eventHandler al icono
    iconoCheck.addEventListener("click", () => {        
        iconoCheck.classList.toggle("completeIcon");
        actualizarLista(id, "checkear");
    });

    iconoEliminar.classList.add("far", "fa-trash-alt", "icon", "trashIcon");
    // agrega el eventHandler al icono
    iconoEliminar.addEventListener("click", () => {
        iconoCheck.parentElement.remove();
        actualizarLista(id, "borrar");       
    });

    if (completo){
        iconoCheck.classList.add("completeIcon");
    }

    tarjeta.appendChild(iconoCheck);
    tarjeta.appendChild(textoTarjeta);
    
    tarjeta.appendChild(iconoEliminar);
    
    return tarjeta;

}