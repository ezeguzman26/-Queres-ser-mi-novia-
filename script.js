function mostrarPantalla2() {
  document.getElementById("pantalla-1").style.display = "none";
  document.getElementById("pantalla-2").style.display = "block";
  escribirMensaje();
  

}
const mensajeCompleto = `Bueno, quiero decirte esto de una forma mas especial. 
Tenemos que disfrutar la vida juntos, aprovecharla porque en este tiempo no se me olvidan todas las cosas que pasamos. 
Cuando estoy con vos son los momentos más felices de mi vida. 
Cada vez que estoy a tu lado siento que estoy donde quiero estar toda mi vida.

En este tiempo tuvimos muchas peleas, yo me he equivocado muchas veces y lo admito, pero en algún momento nos tiene que hacer el click a los dos y darnos cuenta que estando juntos somos felices y que hay que disfrutar cada momento.

Las peleas seguro van a seguir, pero no dejemos que eso acabe todo lo lindo que pasamos. 
Te prometo que las mejoras van a llegar, van a haber mejores salidas y momentos mucho mejores. 

Quiero un futuro estable con vos. No me imagino otro futuro con otra persona que no seas vos, porque vos sos mi todo, sos la persona más linda que conocí en mi vida.

Ojalá que podamos mejorar como pareja y que nada ni nadie nos separe. 
Yo nunca te voy a dejar sola, y por eso quiero hacerte una pregunta muy especial... ❤️`;

let mensajeElemento = document.getElementById("mensaje-texto");
let cursor = document.querySelector(".cursor");

let i = 0;
function escribirMensaje() {
  if (i < mensajeCompleto.length) {
    mensajeElemento.innerHTML += mensajeCompleto.charAt(i);
    i++;
    setTimeout(escribirMensaje, 35);
  } else {
    document.getElementById("pregunta-final").style.display = "block";

    cursor.style.display = 'inline-block';
  }
}

// Evitar el menú del clic derecho y terminar la máquina de escribir
document.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // Evita el menú
  if (i < mensajeCompleto.length) {
    mensajeElemento.innerHTML = mensajeCompleto; // Mostrar todo el texto
    document.getElementById("pregunta-final").style.display = "block"; // Mostrar pregunta
    cursor.style.display = 'inline-block';
    i = mensajeCompleto.length; // Asegura que no se siga escribiendo
  }
});

// Doble tap en celulares para terminar el mensaje
let lastTap = 0;

document.addEventListener("touchend", function (e) {
  let currentTime = new Date().getTime();
  let tapLength = currentTime - lastTap;

  if (tapLength < 400 && i < mensajeCompleto.length) {
    mensajeElemento.innerHTML = mensajeCompleto;
    document.getElementById("pregunta-final").style.display = "block";
    cursor.style.display = 'inline-block';
    i = mensajeCompleto.length;
  }

  lastTap = currentTime;
});

function mostrarPantallaNo() {
  document.getElementById("pantalla-1").style.display = "none";
  document.getElementById("pantalla-no").style.display = "block";
}

const titulo = "💖BRISA💖";
const poema = [
  "Éramos vos y yo.",
  "Éramos risas, charlas, canciones y momentos únicos.",
  "Y aunque el tiempo pasó…",
  "Sigo sintiendo que algo nuestro quedó.💖"
];

let h1 = document.getElementById("maquina-escribir");
let paso = "titulo";
let letra = 0;
let linea = 0;
let textoMostrado = "";

function escribirTexto() {
  if (paso === "titulo") {
    if (letra < titulo.length) {
      textoMostrado += titulo.charAt(letra);
      letra++;
    } else {
      textoMostrado += "\n\n";
      letra = 0;
      paso = "poema";
    }
  } else if (paso === "poema") {
    if (linea < poema.length) {
      if (letra < poema[linea].length) {
        textoMostrado += poema[linea].charAt(letra);
        letra++;
      } else {
        textoMostrado += "\n";
        letra = 0;
        linea++;
      }
    } else {
      clearInterval(intervalo);
      
      document.getElementById("pregunta").style.display = "block";
    }
  }

  h1.innerHTML = textoMostrado.replace(/\n/g, "<br>") + '<span id="cursor">|</span>';
}

let intervalo = setInterval(escribirTexto, 50);

function mostrarPantallaFinal() {
  document.getElementById("pantalla-2").style.display = "none";
  document.getElementById("pantalla-final").style.display = "flex";
  
}



function mostrarPantallaNo() {
  document.getElementById("pantalla-2").style.display = "none";
  document.getElementById("pantalla-noo").style.display = "flex";
}
