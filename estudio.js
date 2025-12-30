// ===============================
// 1. VARIABLES Y CONSTANTES
// ===============================

// let: valor mutable (uso normal)
let variable = "puede cambiar";

// const: referencia constante (usar por defecto)
const constante = "no cambia";

// var: ámbito de función, hoisting confuso (evitar)
var antigua = "forma obsoleta";


// ===============================
// 2. TIPOS DE DATOS
// ===============================

// Primitivos
let texto = "cadena";
let numero = 42;
let booleano = true;
let nulo = null;          // ausencia intencional de valor
let indefinido;           // valor no asignado

// Compuestos
let array = [1, "texto", true];

let objeto = {
    propiedad: "valor",
    numero: 123,
    metodo() {
        return this.propiedad;
    }
};


// ===============================
// 3. FUNCIONES
// ===============================

// Declaración clásica
function suma(a, b) {
    return a + b;
}

// Función flecha (no tiene su propio this)
const resta = (a, b) => a - b;

// Expresión de función
const multiplicar = function(a, b) {
    return a * b;
};


// ===============================
// 4. ARRAYS (mutar vs transformar)
// ===============================

let frutas = ["manzana", "banana", "naranja"];

// Mutan el array
frutas.push("pera");
frutas.pop();
frutas.shift();
frutas.unshift("uva");

// No mutan (devuelven uno nuevo)
const mayusculas = frutas.map(f => f.toUpperCase());
const largas = frutas.filter(f => f.length > 5);


// ===============================
// 5. OBJETOS
// ===============================

let persona = {
    nombre: "Juan",
    edad: 30,
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

persona.saludar();
persona.nombre;        // notación punto
persona["edad"];       // notación corchetes


// ===============================
// 6. CONDICIONALES
// ===============================

if (condicion) {
    // código
} else if (otraCondicion) {
    // código
} else {
    // código
}

// Ternario: decisiones simples
const resultado = condicion ? "sí" : "no";

// Switch: múltiples casos claros
switch (valor) {
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}


// ===============================
// 7. BUCLES
// ===============================

// For clásico
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Iterar valores
for (let item of array) {
    console.log(item);
}

// Iterar claves
for (let clave in objeto) {
    console.log(clave, objeto[clave]);
}

// While
while (condicion) {
    // código
}


// ===============================
// 8. DOM (navegador)
// ===============================

// Selección
const elemento = document.getElementById("miId");
const primer = document.querySelector(".clase");
const todos = document.querySelectorAll(".clase");

// Contenido
elemento.textContent = "Texto plano";
elemento.innerHTML = "<strong>HTML</strong>";

// Estilos
elemento.style.color = "red";

// Clases
elemento.classList.add("activa");
elemento.classList.remove("oculta");
elemento.classList.toggle("visible");

// Eventos
elemento.addEventListener("click", e => {
    e.preventDefault();
    console.log("Click");
});


// ===============================
// 9. FETCH / ASINCRONÍA
// ===============================

// Promesas
fetch("https://api.ejemplo.com/datos")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

// Async / Await
async function obtenerDatos() {
    try {
        const res = await fetch("https://api.ejemplo.com/datos");
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}


// ===============================
// 10. LOCAL STORAGE
// ===============================

localStorage.setItem("clave", "valor");
const dato = localStorage.getItem("clave");
localStorage.removeItem("clave");


// ===============================
// 11. TEMPLATE STRINGS
// ===============================

const nombre = "Carlos";
const saludo = `Hola ${nombre},
bienvenido.`;

// ===============================
// 12. ERRORES COMUNES EN JAVASCRIPT
// ===============================


// 1️⃣ Usar var en lugar de let / const
// Problema: scope confuso y bugs difíciles de detectar
var x = 10;

// Correcto
let y = 10;
const z = 20;


// 2️⃣ Olvidar que const no permite reasignar
const persona = { nombre: "Ana" };
// persona = {} ❌ ERROR
persona.nombre = "Laura"; // ✔ permitido


// 3️⃣ Confundir == con ===
// == compara valor (con conversión)
// === compara valor y tipo (usar siempre)
5 == "5";   // true ❌
5 === "5";  // false ✔


// 4️⃣ Modificar arrays u objetos sin querer
const numeros = [1, 2, 3];
numeros.push(4); // muta el array

// Mejor (cuando querés evitar efectos colaterales)
const nuevoArray = [...numeros, 4];


// 5️⃣ Pensar que map o filter modifican el array original
frutas.map(f => f.toUpperCase());
// frutas sigue igual ❌

// Correcto
const nuevasFrutas = frutas.map(f => f.toUpperCase());


// 6️⃣ Usar arrow functions sin entender this
const obj = {
    nombre: "Juan",
    saludar: () => {
        console.log(this.nombre); // undefined ❌
    }
};

// Correcto
const obj2 = {
    nombre: "Juan",
    saludar() {
        console.log(this.nombre); // Juan ✔
    }
};


// 7️⃣ Olvidar return en funciones
function suma(a, b) {
    a + b; // ❌ no devuelve nada
}

// Correcto
function sumaBien(a, b) {
    return a + b;
}


// 8️⃣ No manejar errores en fetch
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
// ❌ si falla, no sabés qué pasó

// Correcto
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));


// 9️⃣ Olvidar await en funciones async
async function cargar() {
    const data = fetch(url); // ❌ Promise, no datos
}

// Correcto
async function cargarBien() {
    const res = await fetch(url);
    const data = await res.json();
}


// 🔟 Acceder al DOM antes de que cargue
const btn = document.getElementById("btn"); // null ❌

// Correcto
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
});


// 1️⃣1️⃣ Confiar en innerHTML sin cuidado
elemento.innerHTML = inputUsuario; // ❌ riesgo de seguridad

// Mejor
elemento.textContent = inputUsuario;


// 1️⃣2️⃣ Pensar que JavaScript es sincrónico
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");
// Resultado: A, C, B ❗


// 1️⃣3️⃣ No diferenciar null de undefined
null;        // ausencia intencional
undefined;   // no asignado
