km = parseFloat(prompt("Introduce os kilómetros recorridos: "));
dol = parseFloat(prompt("Introduce os dólares gastados: "));
gb = parseFloat(prompt("Introduce os Gb gastados: "));
h = parseFloat(prompt("Introduce a hora de hoxe: "));

document.write(
    "<p>Os metros recorridos son: " + (km * 1000) + "m</p>" +
    "<p>Os euros gastados son: " + (dol * 0.93) + "€</p>" +
    "<p>Os bytes gastados son: " + (gb * 1073741824) + "b</p>" +
    "<p>Os segundos que gastache: " + (h * 3600) + "s</p>"
);