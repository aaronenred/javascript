// Debe salir una alerta final con el precio de cada producto y la suma de estos.

let primeiro = parseFloat(prompt("Canto custa o primeiro producto? "));
let segundo = parseFloat(prompt("Canto custa o segundo producto? "));
let terceiro = parseFloat(prompt("Canto custa o terceiro producto? "));

let pagar = (primeiro+segundo+terceiro);
let pagariva = pagar*0.21
let pagarstring = pagariva.toString();
let pagarcoma = pagarstring.replace(".", ",");

alert(
    "O precio do primeiro producto é de: " + primeiro + "€" + "\n" +
    "O precio do segundo producto é de: " + segundo  + "€" + "\n" +
    "O precio do terceiro producto é de: " + terceiro + "€" + "\n" + "\n" +
    "O seu ticket é de: " + pagar + "€" + "\n" +
    "O IVE que o vostede pagou foi (do 21%): " + pagarcoma + "€"
    );