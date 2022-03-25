
export const agregar = (tarjeta) => {
    
    const card = document.querySelector("[data-list]");
    card.appendChild(tarjeta);  
}