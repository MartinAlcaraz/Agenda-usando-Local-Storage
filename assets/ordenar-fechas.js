
export const  ordenarFechasUnicas = ( listaTarjetas) => {

    const array = [];
    
    listaTarjetas.forEach( obj => {
        if (!array.includes(obj.fecha)){
            array.push(obj.fecha);
        }
    });

    

    return array;
}