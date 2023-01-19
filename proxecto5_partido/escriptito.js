// O código é totalmente lexítimo.
var voto = " "
var votosA = 0;
var votosB = 0;
var votosC = 0;
var votosT = 0

while (voto != "fin") {
    voto = prompt("Que partido queres votar?").toUpperCase();
    votosT ++;

    if (voto == "A") {
        votosA++;
    } else if (voto == "B") {
        votosB++;
    } else if (voto == "C") {
        votosC++;
    } else if (voto == "FIN") {
        var contrasinal = prompt("Cal é a contrasinal para cerrar a sesión? ");

        if (contrasinal == "abc123.") {
            break;
        } else {
            alert("O contrasinal non é correcta! Seguen os votos.");
            continue;
        }
    };
};

document.write(
    "<p>Votos de A: " + votosA + "</p>" +
    "<p>Votos de B: " + votosB + "</p>" +
    "<p>Votos de C: " + votosC + "</p>" +
    "<p>Votos totais: " + (votosT - 1) + "</p>"
);