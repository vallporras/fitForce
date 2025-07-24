//carrusel

let indice = 0;

  function moverCarrusel(direccion) {
    const total = 3;
    indice = (indice + direccion + total) % total;
    document.getElementById('imagenes').style.transform = `translateX(-${indice * 300}px)`;
  }
