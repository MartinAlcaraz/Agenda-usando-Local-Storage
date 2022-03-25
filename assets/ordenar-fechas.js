
export const obtenerFechasOrdenadas = (listaTarjetas) => {

    const array = [];
        // crea arreglo con fechas sin repetir
    listaTarjetas.forEach(obj => {
        if (!array.includes(obj.fecha)) {
            array.push(obj.fecha);
        }
    });
        // ordena las fechas 
    const fechas = ordenarFechas(array);

    return fechas;
}

const ordenarFechas = (arrayFechas) => {
    return arrayFechas.sort((a, b) => {            // a y b son dos valores del array
        const firstDate = moment(a, 'DD/MM/YYYY');   
        const secondDate = moment(b, 'DD/MM/YYYY');
        return firstDate - secondDate;              // compara a y b y sort los ordena
    });
};