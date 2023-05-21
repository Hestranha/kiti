function mostrarKiti() {
  document.body.innerHTML = '<div id="gift-kiti"><img src="https://64.media.tumblr.com/5d7df7d34b9f5e76ab12b22579ec55df/tumblr_na697gAEzS1stwx7xo1_400.gif"></div>';
}

function moverKiti() {
  var container = document.getElementById("gift-kiti");
  var left = 0;
  var direction = 1;
  var interval = setInterval(function() {
    container.style.left = left + "px";
    left += direction;
    if (left > window.innerWidth - container.offsetWidth || left < 0) {
      direction *= -1;
    }
  }, 10);
}

function mostrarCorazones() {
  // Crea un nuevo elemento img y establece su atributo src en el gif de corazones
  var img = document.createElement("img");
  img.src = "https://c.tenor.com/Yf0qNygeLhMAAAAj/hearts-spin.gif";
  img.style.width = "60px";
  img.style.height = "60px";
  // Establece una posición aleatoria para el elemento img en la pantalla
  var x = Math.floor(Math.random() * (window.innerWidth - 200));
  var y = Math.floor(Math.random() * (window.innerHeight - 200));
  img.style.position = "absolute";
  img.style.left = x + "px";
  img.style.top = y + "px";
  // Agrega la clase con la animación
  img.classList.add("heart-animation");

  // Agrega el elemento img al body del documento
  document.body.appendChild(img);

  // Establece un temporizador para que el corazón desaparezca después de 2 segundos
  setTimeout(function() {
    img.style.opacity = "0";
    setTimeout(function() {
      document.body.removeChild(img);
    }, 1000);
  }, 2000);

  // Establece un temporizador para que se muestre otro corazón después de 1 segundo
  setTimeout(function() {
    mostrarCorazones();
  }, 350);
}

function reproducirCancion() {
  // Crea un elemento de audio
  var audio = new Audio('cupid.mp3');
  // Reproduce el archivo de audio
  audio.volume = 0.5;
  audio.currentTime = 1;
  audio.play();
}

