import {series} from './data.js';
import {Serie} from './serie';

console.log(series);

let seriesTable: HTMLElement = document.getElementById("tablaSeries")!;
let temporadasPromedio: HTMLElement = document.getElementById("temporadasPromedio")!;



/**
 * Ejecución de funciones
 */
mostrarSeries(series);
getTemporadasPromedio(series);


/**
 * Da el código HTML para imprimir las series
 * @param series lista de Serie
 */
function mostrarSeries(series: Serie[]): void {
    let tbodySerie = document.createElement("tbody");
    
    for (let serie of series) {
        let trElement: HTMLElement = document.createElement("tr");

        trElement.innerHTML = `<td><b>${serie.id}</b></td>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.numero_temporadas}</td>`

        tbodySerie.appendChild(trElement);
    }

    seriesTable.appendChild(tbodySerie);
}


/**
 * Consigue el promedio de temporadas para todas las series
 * @param series 
 */
function getTemporadasPromedio(series: Serie[]): void {
    let promedio: number = 0;
    for (let serie of series) {
        promedio += serie.numero_temporadas;
    }
    promedio /= series.length;

    // parte de HTML
    let pElement = document.createElement("p")
    pElement.innerHTML = `Seasons average: ${promedio.toFixed(0)}`;

    temporadasPromedio.appendChild(pElement);
}


/**
 * 
 */
function mostrarSerieEspecifica(serie: Serie): void {
    // TODO
}