
export const actualizarLista = (id, accion) => {

    const listaTarjetas = JSON.parse(localStorage.getItem("agenda-web"));

    let indice;
    let obj;
    for (let i = 0 ; i < listaTarjetas.length; i++) {
        obj = listaTarjetas[i];
        if (obj.id == id) {
            indice = i;
            break;
        }
    }

    if (accion == "checkear") {
        obj = listaTarjetas[indice];
        obj.completo = !obj.completo;
    }

    if (accion == "borrar") {
        listaTarjetas.splice(indice, 1);
    }

    localStorage.setItem("agenda-web", JSON.stringify(listaTarjetas));

}

