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
const productTitle = document.querySelector(".product-title");
const itemTag = document.querySelector("h3");
const newPrice = document.querySelector(".new-price");
const oldPrice = document.querySelector(".old-price");
const cartButton = document.getElementById("button");
const feedbackButton = document.querySelector(".feedback");
const whiteButton = document.getElementById("white-button");


document.querySelector(".red").addEventListener("click", function () {
    changeColor("red");
});

document.querySelector(".black").addEventListener("click", function () {
    changeColor("black");
});

document.querySelector(".gray").addEventListener("click", function () {
    changeColor("gray");
});

function changeColor(color) {
    productImage.style.backgroundImage = `url("${colors[color].image}")`;
    itemTag.style.backgroundColor = colors[color].color; 
    cartButton.style.backgroundColor = colors[color].color;
    feedbackButton.style.backgroundColor = colors[color].color;
    newPrice.textContent = colors[color].price;
    oldPrice.textContent = `$${Math.round(
      parseInt(colors[color].price.replace("$", "").replace(",", "")) * 1.05
    ).toLocaleString()}`;
}


cartButton.addEventListener("click", function () {
    showMessage("¡Has agregado el coche al carrito!");
});

feedbackButton.addEventListener("click", function () {
    showMessage("¡Gracias por tu opinión!");
});

function showMessage(message) {
    whiteButton.textContent = message;
    whiteButton.style.display = "block";
    setTimeout(function () {
        whiteButton.style.display = "none";
    }, 2000);
}