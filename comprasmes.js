// Problema: "Quiero saber cuánto gasté este mes" 
// Descomposición: 
// 1. Obtener todas las compras del mes
// 2. Sumar sus montos
// 3. Mostrar resultado


// Traducción a código
const compras = [100, 50, 200, 75]; // Paso 1
let total = 0;                     // Preparar acumulador

for (let i = 0; i < compras.length; i++) { // Paso 2
    total = total + compras[i];
}

console.log(`Gastaste $${total} este mes`); // Paso 3

