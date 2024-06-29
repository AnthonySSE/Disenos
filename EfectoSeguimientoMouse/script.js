// Este script se ejecutará cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar el elemento con la clase .cursor
    let cursor = document.querySelector('.cursor');
    // Texto que se mostrará al seguir el cursor
    let textContent = "Efecto de Seguimiento de Puntero";

    // Crear un span para cada carácter del texto
    for (let i = 0; i < textContent.length; i++) {
        let span = document.createElement('span');
        // Agregar la clase .text al span
        span.classList.add('text');
        // Establecer el valor de la variable CSS --i en cada iteración
        span.style.setProperty('--i', i+1);
        // Establecer la posición del span en relación con la posición del cursor
        span.style.left = i*0.6 + 'em';
        // Establecer el contenido del span como el carácter correspondiente del texto
        span.textContent = textContent[i];
        // Aplicar un filtro de cambio de tono al span para crear un efecto animado
        span.style.filter=`hue-rotate(${i*10}deg)`;
        // Agregar el span como hijo del elemento .cursor
        cursor.appendChild(span);
    }

    // Agregar un evento de movimiento del mouse al documento
    document.addEventListener('mousemove', e => {
        // Utilizar GSAP para animar los elementos .text en relación con la posición del cursor
        gsap.to('.text', {
            duration: 0.5,
            x: e.clientX,
            y: e.clientY,
            stagger: 0.05
        })
    })
});