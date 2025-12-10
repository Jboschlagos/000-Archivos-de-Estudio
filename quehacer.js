// SITUACIÓN: Quiero una lista de compras
// COMO USUARIO: Escribo, tacho, borro
// COMO PROGRAMADOR:

// 1. ¿Qué datos necesito?
let listaCompras = ["leche", "pan", "huevos"];

// 2. ¿Qué operaciones necesito?
function agregarItem(item) { /* ... */ }
function eliminarItem(item) { /* ... */ }
function marcarComprado(item) { /* ... */ }

// 3. ¿Cómo interactúa el usuario?
document.getElementById('botonAgregar').addEventListener('click', agregarItem);