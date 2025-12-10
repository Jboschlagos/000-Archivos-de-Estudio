// 1. VARIABLES Y CONSTANTES
let variable = "puede cambiar"; // ES6+
var antigua = "evitar usar"; // vieja forma
const constante = "no cambia"; // constante

// 2. TIPOS DE DATOS
let string = "texto";
let number = 42;
let boolean = true; // o false
let array = [1, 2, 3, "texto", true];
let objeto = {
    propiedad: "valor",
    numero: 123,
    metodo: function() {
        return this.propiedad;
    }
};
let nulo = null;
let indefinido = undefined;

// 3. FUNCIONES
function suma(a, b) {
    return a + b;
}

// Arrow function (ES6+)
const resta = (a, b) => a - b;

// Función anónima
const multiplicar = function(a, b) {
    return a * b;
};

// 4. ARRAYS - Métodos comunes
let frutas = ["manzana", "banana", "naranja"];
frutas.push("pera"); // añade al final
frutas.pop(); // elimina el último
frutas.shift(); // elimina el primero
frutas.unshift("uva"); // añade al inicio
frutas.map(fruta => fruta.toUpperCase()); // transforma
frutas.filter(fruta => fruta.length > 5); // filtra

// 5. OBJETOS
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
persona.saludar();
console.log(persona.nombre); // notación punto
console.log(persona["edad"]); // notación corchetes

// 6. CONDICIONALES
if (condicion) {
    // código
} else if (otraCondicion) {
    // código
} else {
    // código
}

// Operador ternario
let resultado = condicion ? "verdadero" : "falso";

// Switch
switch (valor) {
    case 1:
        // código
        break;
    case 2:
        // código
        break;
    default:
        // código
}

// 7. BUCLES
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let item of array) {
    console.log(item);
}

for (let clave in objeto) {
    console.log(clave, objeto[clave]);
}

while (condicion) {
    // código
}

// 8. DOM MANIPULATION
// Seleccionar elementos
const elemento = document.getElementById('miId');
const elementos = document.querySelectorAll('.miClase');
const primerElemento = document.querySelector('.miClase');

// Modificar contenido
elemento.textContent = "Nuevo texto";
elemento.innerHTML = "<strong>Texto</strong> con HTML";

// Modificar estilos
elemento.style.color = "red";
elemento.style.backgroundColor = "#000";

// Agregar/remover clases
elemento.classList.add('nueva-clase');
elemento.classList.remove('clase-vieja');
elemento.classList.toggle('clase-activa');

// Eventos
elemento.addEventListener('click', function(event) {
    console.log('Elemento clickeado');
    event.preventDefault(); // previene comportamiento por defecto
});

// Formularios
document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const datos = new FormData(this);
    console.log(Object.fromEntries(datos));
});

// 9. FETCH API (llamadas HTTP)
fetch('https://api.ejemplo.com/datos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Manipular datos recibidos
    })
    .catch(error => console.error('Error:', error));

// Async/Await (forma moderna)
async function obtenerDatos() {
    try {
        const response = await fetch('https://api.ejemplo.com/datos');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// 10. LOCAL STORAGE
localStorage.setItem('clave', 'valor');
const valor = localStorage.getItem('clave');
localStorage.removeItem('clave');
localStorage.clear();

// 11. TEMPLATE STRINGS (ES6+)
const nombre = "Carlos";
const saludo = `Hola, ${nombre}!
Bienvenido a nuestro sitio.`;