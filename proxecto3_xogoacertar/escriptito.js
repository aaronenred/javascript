function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1 )) + min);
};

user = prompt("Dame un número: ");
teo = random(0, 100)

while (user != teo){
    user = prompt("Dame un número: ");
};

document.write("Acertaches ^^");