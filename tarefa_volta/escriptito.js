function doble(a) {
    return(a*2)
}

contrasinal = "abc123."
user = prompt("Contrasinal: ")

/* if (user == contrasinal) {
    alert("Benvido <3")
} else {
    alert("Non é a contrasinal correcta :(")
} */

while (user != contrasinal) {
    alert("Non é a contrasinal correcta :(")
    user = prompt("Contrasinal: ")
}

document.write("<br> <p>Benvido :D</p>")

numerito = parseFloat(prompt("De que número fago o dobre?"))
document.write(
    "<p>O dobre de " + numerito + " é " + doble(numerito) + "</p>"
)

document.write("<br>")

for(var i=0; i<3; i++) {
    document.write("<p>Pablito clavo un clavito</p>")
}
document.write("<p>¿Qué clavito clavó Pablito?</p>")