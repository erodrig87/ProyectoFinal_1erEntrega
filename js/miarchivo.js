// Mensaje de informacion
/*alert(`Boton 'Crear Gasto', Ingresa gasto en Array de gastos.
Boton 'Mostrar Gastos', muestra gastos ingresados.
Boton 'Mostrar Calculos', muestra gasto maximo, minimo y promedio total.
Boton 'Reset Gastos', elimina gastos ingresados`);*/

//Def variables globales
let gasto_total = 0;
let promedio = 0;
let gasto_max = 0;
let gasto_min = 0;

//Def array para almacenar objetos creados de clase Gasto
let arrayGastos = [];

// Def clase Gastos, para crear objetos de tipo clase de gastos.
class Gasto {
    constructor(fecha, categoria, valor,remito,pago) {
        this.fecha = fecha;
        this.categoria = categoria;
        this.valor = valor;
        this.remito = remito;
        this.pago = pago;
    }
    boolCategoria = (check_categoria) => (this.categoria == check_categoria) ? true : false;
}
// se ingresan automaticamente 9 gastos para poder utilizar funciones de calculo
for(let i=0;i<3;i++)
{
    let valor = Math.floor(Math.random() * 500);
    let fecha = new Date();
    nuevoGasto = new Gasto(fecha.toLocaleDateString(), "A", valor,`RECIBO${i}`,"Efectivo");
    arrayGastos.push(nuevoGasto);
}
for(let i=3;i<6;i++)
{
    let valor = Math.floor(Math.random() * 500);
    let fecha = new Date();
    nuevoGasto = new Gasto(fecha.toLocaleDateString(), "B", valor,`RECIBO${i}`,"Transferencia");
    arrayGastos.push(nuevoGasto);
}
for(let i=6;i<9;i++)
{
    let valor = Math.floor(Math.random() * 500);
    let fecha = new Date();
    nuevoGasto = new Gasto(fecha.toLocaleDateString(), "C", valor,`RECIBO${i}`,"Transferencia");
    arrayGastos.push(nuevoGasto);
}
//Funcion mensaje estado variables globales
function alertStatus() {
    alert(`
    El promedio de los gastos ingresados es: ${promedio.toFixed(2)}
    El gasto maximo fue de: ${gasto_max.toFixed(2)}
    El gasto minimo fue de: ${gasto_min.toFixed(2)}
    El gasto total fue de: ${gasto_total.toFixed(2)}
    Cantidad de gastos ingresados: ${arrayGastos.length}`);
}

//Funcion resetea variables globales y elimina objetos del array de gastos
const resetGastos = (dias) => {
    gasto_total = 0;
    promedio = 0;
    gasto_max =0;
    gasto_min = 0;
    while (arrayGastos.length) {
         arrayGastos.pop();
    }
    alertStatus();   
}

//funcion que devuelve fecha actual - x dias pasados como parametro utilizada en dashboard.js para modificar eje x del grafico
const restarDias = (dias) => {
    fecha = new Date();
    fecha.setDate(fecha.getDate() - dias);
    return fecha;
}
//crea un objeto gasto y 
const crearGasto = () => {
        fecha = new Date();    
        fecha = prompt("ingresar fecha de gasto", fecha.toLocaleDateString());
        categoria = prompt("ingresar categoria de gasto");
        valor = parseFloat(prompt("ingresar valor de gasto"));
        remito = prompt("ingresar remito/comprobante de gasto","");
        pago = prompt("ingresar forma de pago de gasto","efectivo");
        let nuevoGasto = new Gasto(fecha, categoria, valor,remito,pago);
        arrayGastos.push(nuevoGasto);
}

//Muestra gastos realizados recorriendo el array
const mostrarGastos = () => {
    let mensajeGastos = "";
    if (arrayGastos.length > 0) {
        mensajeGastos = "Gastos realizados\n";
        arrayGastos.forEach(gasto => {
            mensajeGastos += `Fecha: ${gasto.fecha} | Categoria: ${gasto.categoria} | Valor: ${gasto.valor.toFixed(2)}\n`;
        })
        alert(mensajeGastos)
    } else {
        mensajeGastos += 'No se ingresaron gastos'
        alert(mensajeGastos);
    }
}

//Devuelve la posicion del gasto maximo
const maxGasto = () => {
    const valores = arrayGastos.map((object) => object.valor);
    max = Math.max.apply(null,valores);
    return valores.indexOf(max);
}

//Devuelve la posicion del gasto minimo
const minGasto = () => {
    const valores = arrayGastos.map((object) => object.valor);
    min = Math.min.apply(null,valores);
    return valores.indexOf(min);
}

//Devuelve el promedio de gastos ingresados
const promedioGastos = () => {
    let suma_valores = 0;
    arrayGastos.forEach(function(gasto) { suma_valores += gasto.valor });
    return suma_valores/arrayGastos.length;
}

//Muestra calculos realizados
const mostrarCalculos = () => {
    let mensajeCalculos = "";
    if (arrayGastos.length > 0) {
        let indexGastoMax = maxGasto();
        let indexGastoMin = minGasto();
        mensajeCalculos += `Gasto Maximo = Fecha: ${arrayGastos[indexGastoMax].fecha} | Categoria: ${arrayGastos[indexGastoMax].categoria} | Valor: ${arrayGastos[indexGastoMax].valor.toFixed(2)}\n`;
        mensajeCalculos += `Gasto Minimo = Fecha: ${arrayGastos[indexGastoMin].fecha} | Categoria: ${arrayGastos[indexGastoMin].categoria} | Valor: ${arrayGastos[indexGastoMin].valor.toFixed(2)}\n`;
        mensajeCalculos += `Promedio de gastos: ${promedioGastos().toFixed(2)}`;
        alert(mensajeCalculos)
    } else {
        mensajeCalculos += 'No es posible realizar calculos debido a que no se ingresaron gastos'
        alert(mensajeCalculos);
    }
}

// funcion que devuelve el Array de Gastos filtrado segun categoria

function filtrarCategoria(categoriaFiltrada){
    let arrayFiltrado = arrayGastos.filter(function (gasto) {
        return gasto.categoria == categoriaFiltrada;
      });
      return arrayFiltrado;
}

// visualiza objetos filtrados, invoca funcion que devuelve array filtrado 
const filtrar = () => { 
    let mensajeCategoria = "";
    if (arrayGastos.length > 0) {
        let categoriaFiltrada = prompt("ingresar categoria a filtrar");
        let arrayFiltrado = filtrarCategoria(categoriaFiltrada);
        arrayFiltrado.forEach(gasto => {
                mensajeCategoria += `Fecha: ${gasto.fecha} | Categoria: ${gasto.categoria} | Valor: ${gasto.valor.toFixed(2)}\n`;
        })
        alert(mensajeCategoria);
    }else {
        mensajeCategoria += 'No se ingresaron gastos'
        alert(mensajeCategoria);

    } 

    /*
    let afirmativos = 0;
    let mensajeCategoria = "";
    if (arrayGastos.length > 0) {
        let filterCategoria = prompt("ingresar categoria a filtrar");
        mensajeCategoria = `Gastos realizados en la categoria: ${filterCategoria}\n`;
        arrayGastos.forEach(gasto => {
            if(gasto.boolCategoria(filterCategoria)){
                mensajeCategoria += `Fecha: ${gasto.fecha} | Categoria: ${gasto.categoria} | Valor: ${gasto.valor.toFixed(2)}\n`;
                afirmativos++;
            }
        })
        if(afirmativos==0){mensajeCategoria = `No se encuentras Gastos realizados en la categoria: ${filterCategoria}\n`}
        alert(mensajeCategoria);
    } else {
        mensajeCategoria += 'No se ingresaron gastos'
        alert(mensajeCategoria);
    }*/
}


