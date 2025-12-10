// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const resultado = document.getElementById('resultado');
    
    boton.addEventListener('click', function() {
        resultado.textContent = '¡Botón clickeado!';
        resultado.classList.add('mostrado');
        
        // Cambiar estilo dinámicamente
        this.style.backgroundColor = '#ff0000';
    });
});
