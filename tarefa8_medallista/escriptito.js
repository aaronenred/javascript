function medallista(a) {
    if (a == 1) {
        document.write("<h4> Medalla de ouro :D </h4>");
    } else if (a == 2) {
        document.write("<h4> Medalla de plata :) </h4>");
    } else if (a == 3) {
        document.write("<h4> Medalla de bronce uwu </h4>");
    } else {
        document.write("<h4> Non tes medalla :( </h4>");
    }
}

let posicion = prompt("Cal é a túa posición?");
medallista(posicion);