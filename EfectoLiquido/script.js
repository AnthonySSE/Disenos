// Esta función crea un elemento div con la clase 'drops' y lo agrega como hijo al elemento con la clase 'box'.
// Luego, establece el ancho del elemento div aleatoriamente entre 15 y 115 píxeles, y la posición aleatoria en el eje x dentro del elemento 'box'.
// Finalmente, después de 5 segundos, elimina el elemento div de la interfaz.
// La función se llama cada 200 milisegundos utilizando setInterval.

function liquid() {
    let box = document.querySelector('.box');
    let e = document.createElement('div');
    e.setAttribute('class', 'drops');
    box.appendChild(e);
    
    let size = Math.random() * 100;
    e.style.width = 15 + size + 'px';
    let BoxWidth = box.clientWidth;
    e.style.left = Math.random ()* BoxWidth + 'px';
    
    setTimeout(function(){
        box.removeChild(e);
    },5000)
    }
    setInterval(function(){
        liquid();
    }, 200)