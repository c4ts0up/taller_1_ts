import { series } from './data.js';
console.log(series);
var seriesTable = document.getElementById("tablaSeries");
var temporadasPromedio = document.getElementById("temporadasPromedio");
/**
 * Ejecución de funciones
 */
mostrarSeries(series);
getTemporadasPromedio(series);
/**
 * Da el código HTML para imprimir las series
 * @param series lista de Serie
 */
function mostrarSeries(series) {
    var tbodySerie = document.createElement("tbody");
    // encabezados
    var encabezados = document.createElement("tr");
    encabezados.innerHTML = "<th>#</th>\n    <th>Name</th>\n    <th>Channel</th>\n    <th>Seasons</th>";
    tbodySerie.appendChild(encabezados);
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n        <td><a href=\"\">").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.numero_temporadas, "</td>");
        tbodySerie.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySerie);
}
/**
 * Consigue el promedio de temporadas para todas las series
 * @param series
 */
function getTemporadasPromedio(series) {
    var promedio = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        promedio += serie.numero_temporadas;
    }
    promedio /= series.length;
    // parte de HTML
    var pElement = document.createElement("p");
    pElement.innerHTML = "Seasons average: ".concat(promedio.toFixed(0));
    temporadasPromedio.appendChild(pElement);
}
/**
 *
 */
function mostrarSerieEspecifica(serie) {
    // TODO
}
