export const crearItemFecha = (fecha) => {    

    const itemFecha = document.createElement("li");
    itemFecha.classList.add("card__fecha");
    itemFecha.innerHTML = fecha;
    return itemFecha;
}