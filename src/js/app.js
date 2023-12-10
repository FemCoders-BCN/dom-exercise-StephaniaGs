const colors = {
        red: {
            image: "./public/img/redcar.jpg",
            color: "red",
            price: "$134,450",
    },
        black: {
            image: "./public/img/blackcar.jpg",
            color: "black",
            price: "$136,500",
    },
        gray: {
            image: "./public/img/graycar.jpg",
            color: "gray",
            price: "$135,000",
    },
};

const productImage = document.querySelector(".product-image");
const itemTag = document.querySelector("h3");
const cartButton = document.getElementById("button");
const whiteButton = document.getElementById("white-button");


document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelector(".red").addEventListener("click", function () {
        changeColor("red");
    });

    document.querySelector(".black").addEventListener("click", function () {
        changeColor("black");
    });

    document.querySelector(".gray").addEventListener("click", function () {
        changeColor("gray");
    });
});

function changeColor(color) {
    productImage.style.backgroundImage = `url("${colors[color].image}")`;
    itemTag.style.backgroundColor = colors[color].color; 
    cartButton.style.backgroundColor = colors[color].color;
    
}

document.addEventListener("DOMContentLoaded", function () {
cartButton.addEventListener('click', function () {
  // Llamar a la función showMessage con el mensaje que queremos mostrar
  showMessage('¡Has agregado el coche al carrito!')
});
});

// Definir la función showMessage
function showMessage(message) {
  // Cambiar el texto y el estilo del whiteButton
  whiteButton.textContent = message
  whiteButton.style.display = 'block'
  // Ocultar el whiteButton después de dos segundos
  setTimeout(function () {
    whiteButton.style.display = 'none'
  }, 2000)
}
export {changeColor, showMessage}