export const abrirTarjeta = (event) => {
        // verifica si el evento es de un icono para evitar abrirlo
    if (event.target.tagName !== "I") {    
        
        const padre = event.currentTarget.parentNode;

        const lista = padre.childNodes;

        lista.forEach(node => {
            node.classList.remove("card__abrierta");
        });

        event.currentTarget.classList.toggle("card__abrierta");
    }

}