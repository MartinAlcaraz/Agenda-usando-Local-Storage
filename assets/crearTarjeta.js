import { actualizarTarjetas } from "./actualizar-tarjetas.js";


export const crearTarjeta = ({id, completo, texto, fecha}) => {

    const tarjeta = document.createElement("li");
    const textoTarjeta = document.createElement("span");
    const date = document.createElement("span");
    const iconoCheck = document.createElement("i");
    const iconoEliminar = document.createElement("i");

    tarjeta.classList.add("card");
    tarjeta.setAttribute("id", id);
    textoTarjeta.innerHTML = texto;
    date.innerHTML = fecha;

    iconoCheck.classList.add("far", "fa-check-circle", "icon");
    iconoCheck.addEventListener("click", () => {
        iconoCheck.classList.toggle("completeIcon");
        actualizarTarjetas(id, "checkear");
    });

    iconoEliminar.classList.add("far", "fa-trash-alt", "icon", "trashIcon");
    iconoEliminar.addEventListener("click", () => {
        iconoCheck.parentElement.remove();
        actualizarTarjetas(id, "borrar");
    });

    if (completo){
        iconoCheck.classList.toggle("completeIcon");
    }

    tarjeta.appendChild(iconoCheck);
    tarjeta.appendChild(textoTarjeta);
    tarjeta.appendChild(date);
    tarjeta.appendChild(iconoEliminar);
    
    return tarjeta;

}