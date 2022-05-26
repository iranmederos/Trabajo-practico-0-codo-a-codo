window.onload = () => {
    // Carrousel del index
    const IMAGENES = ['img/intro.jpg', 'img/intro2.jpg', 'img/intro3.jpg'];

    //variables
    const TIEMPO_INTERVALO = 2000;
    let posicion = 0;
    let imagen = document.getElementById('img');
    let botonPlay = document.querySelector('#play');
    let botonStop = document.querySelector('#stop');
    let intervalo;

    function pasarFoto() {
        if (posicion >= IMAGENES.length - 1) {
            posicion = 0;
        } else {
            posicion++;
        }
        imagen.style.backgroundImage = `url(${IMAGENES[posicion]})`;
    }

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO);
        // Desactivamos los botones de control
        botonPlay.setAttribute('disabled', true);
        botonStop.removeAttribute('disabled');

    }

    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        botonPlay.removeAttribute('disabled');
        botonStop.setAttribute('disabled', true);
    }

    //eventos
    botonPlay.addEventListener('click', playIntervalo);
    botonStop.addEventListener('click', stopIntervalo);
    imagen.style.backgroundImage = `url(${IMAGENES[posicion]})`;
    playIntervalo();

}