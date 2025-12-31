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

# JavaScript – Funciones y Asincronia

Documento de estudio en codigo. La idea es entender **que es cada cosa**, **cuando usarla** y **errores comunes**.

---

## 1. FUNCIONES

Las funciones encapsulan logica. Reciben datos, procesan y devuelven un resultado.

```js
// Declaracion clasica
function suma(a, b) {
    return a + b;
}

// Expresion de funcion
const resta = function(a, b) {
    return a - b;
};

// Arrow function
const multiplicar = (a, b) => a * b;
```

### Errores comunes

```js
function sinReturn(a, b) {
    a + b; // undefined
}
```

---

## 2. ARRAYS

Los arrays almacenan listas de datos. Se recorren y transforman.

```js
const numeros = [1, 2, 3, 4];
```

### Metodos importantes

```js
numeros.push(5);      // muta
numeros.pop();        // muta

const dobles = numeros.map(n => n * 2);   // nuevo array
const pares = numeros.filter(n => n % 2 === 0);
const sumaTotal = numeros.reduce((acc, n) => acc + n, 0);
```

### Error comun

```js
numeros.map(n => n * 2);
// numeros no cambia
```

---

## 3. OBJETOS

Los objetos representan entidades con propiedades y comportamiento.

```js
const usuario = {
    nombre: "Ana",
    edad: 30,
    saludar() {
        return `Hola ${this.nombre}`;
    }
};
```

### Acceso

```js
usuario.nombre;
usuario["edad"];
```

### Error comun: this

```js
const obj = {
    nombre: "Juan",
    saludar: () => this.nombre // undefined
};
```

---

## 4. CALLBACKS

Un callback es una funcion que se pasa como argumento y se ejecuta despues.

```js
function procesar(dato, callback) {
    callback(dato);
}

procesar("texto", resultado => {
    console.log(resultado);
});
```

### Error comun

```js
procesar("texto", console.log("hola")); // se ejecuta antes
```

---

## 5. PROMESAS

Una promesa representa un valor que estara disponible en el futuro.

```js
const promesa = new Promise((resolve, reject) => {
    const exito = true;

    if (exito) {
        resolve("OK");
    } else {
        reject("ERROR");
    }
});
```

### Consumo

```js
promesa
    .then(res => console.log(res))
    .catch(err => console.error(err));
```

### Error comun

```js
return promesa; // pero no usar then
```

---

## 6. ASYNC / AWAIT

Sintaxis moderna sobre promesas. Hace el codigo legible.

```js
async function cargarDatos() {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
```

### Error comun

```js
const data = fetch(url); // Promise, no datos
```

---

## 7. ASINCRONIA

JavaScript no espera operaciones lentas.

```js
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");
// A C B
```

---

## 8. RELACION ENTRE TODO

```js
async function flujo() {
    const datos = await obtenerDatos();
    const filtrados = datos.filter(d => d.activo);
    return filtrados.map(d => d.nombre);
}
```

Funciones → callbacks → promesas → async/await

---

## IDEAS CLAVE PARA MEMORIZAR

* map / filter no mutan
* push / pop si mutan
* this no funciona en arrow dentro de objetos
* async siempre devuelve una promesa
* await solo funciona dentro de async

