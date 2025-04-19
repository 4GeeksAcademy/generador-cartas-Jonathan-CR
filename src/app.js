
const iconos = ["♥", "♦", "♣", "♠"];
const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomCard() {
    let icono = getRandomElement(iconos);
    const numero = getRandomElement(numeros);

    if (icono === "♠" || icono === "♣") {
        icono = getRandomElement(["♠", "♣"]);
    } else if (icono === "♥" || icono === "♦") {
        icono = getRandomElement(["♥", "♦"]);
    }
    
   
    const carta = document.getElementById("carta");
    const iconoSuperior = document.getElementById("icono-superior");
    const iconoInferior = document.getElementById("icono-inferior");
    const numeroElemento = document.getElementById("numero");

    iconoSuperior.textContent = icono;
    iconoInferior.textContent = icono;
    numeroElemento.textContent = numero;

    const esRojo = icono === "♥" || icono === "♦";
    carta.style.color = esRojo ? "red" : "black";
   
}


generateRandomCard();