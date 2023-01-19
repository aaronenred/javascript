// Debe salir una alerta final con el precio de cada producto y la suma de estos.

let primeiro = parseFloat(prompt("Canto custa o primeiro producto? "));
let segundo = parseFloat(prompt("Canto custa o segundo producto? "));
let terceiro = parseFloat(prompt("Canto custa o terceiro producto? "));

let pagar = (primeiro + segundo + terceiro);
let pagariva = pagar * 0.21
let pagarstring = pagariva.toString();
let pagarcoma = pagarstring.replace(".", ",");

/* alert(
    "O precio do primeiro producto é de: " + primeiro + "€" + "\n" +
    "O precio do segundo producto é de: " + segundo  + "€" + "\n" +
    "O precio do terceiro producto é de: " + terceiro + "€" + "\n" + "\n" +
    "O seu ticket é de: " + pagar + "€" + "\n" +
    "O IVE que o vostede pagou foi (do 21%): " + pagarcoma + "€"
    ); */

document.write(
    "<h4> O precio do primeiro producto é de: </h4>" + "<h3>" + primeiro + "€" + "</h3>" +
    "<h4> O precio do segundo producto é de: </h4>" + "<h3>" + segundo + "€" + "</h3>" +
    "<h4> O precio do terceiro producto é de: </h4>" + "<h3>" + terceiro + "€" + "</h3>" +
    "<p class='invisible'> hola :) esto es un texto invisible </p>" +
    "<h4> O seu ticket é de: </h4>" + "<h3>" + pagar + "€" + "</h3>" +
    "<h4> O IVE que o pagou: <br> (do 21%) </h4>" + "<h3>" + pagarcoma + "€" + "</h3>"
);