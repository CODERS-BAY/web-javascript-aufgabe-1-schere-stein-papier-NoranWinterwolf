var symbolComputer;
var symbolPlayer;
var anzahlRunden = 0;
var pointsComputer = 0;
var pointsPlayer = 0;
var pointsVictory = 3;
var stringPlayer;
var stringComputer;

document.getElementById("round").innerHTML = anzahlRunden;

function game(symbolPlayer) {
symbolComputer = Math.ceil(Math.random() * 3);

switch (symbolPlayer) {
    case 1: stringPlayer = "Stein";
    break;
    case 2: stringPlayer = "Schere";
    break;
    case 3: stringPlayer = "Papier";
    break;
}
switch (symbolComputer) {
    case 1: stringComputer = "Stein";
    break;
    case 2: stringComputer = "Schere";
    break;
    case 3: stringComputer = "Papier";
    break;
}



var win = 0;

if (symbolComputer == symbolPlayer) {
    document.getElementById("choices").innerHTML = "<p>Gegner und Spieler haben beide " + stringPlayer + " gewählt. <br /> Unentschieden!</p>"
}
else {
    if (symbolComputer == 2 && symbolPlayer == 3) {
        document.getElementById("choices").innerHTML = "Gegner: " + stringComputer + ".<br/> Spieler: " + stringPlayer + ".<br/> Gegner gewinnt.";
        win = 1;
    }
    else if (symbolPlayer == 2 && symbolComputer == 3) {
        document.getElementById("choices").innerHTML = "Gegner: " + stringComputer + ".<br/> Spieler: " + stringPlayer + ".<br/> Spieler gewinnt.";
        win = 2;
    }
    else if (symbolComputer == 3 && symbolPlayer == 1) {
        document.getElementById("choices").innerHTML = "Gegner: " + stringComputer + ".<br/> Spieler: " + stringPlayer + ".<br/> Gegner gewinnt.";
        win = 1;
    }
    else if (symbolPlayer == 3 && stringComputer == 1) {
        document.getElementById("choices").innerHTML = "Gegner: " + stringComputer + ".<br/> Spieler: " + stringPlayer + ".<br/> Spieler gewinnt.";
        win = 2;
    }
    else if (symbolComputer == 1 && symbolPlayer == 2) {
        document.getElementById("choices").innerHTML = "Gegner: " + stringComputer + ".<br/> Spieler: " + stringPlayer + ".<br/> Gegner gewinnt.";
        win = 1;
    }
    else if (symbolPlayer == 1 && symbolComputer == 2) {
        document.getElementById("choices").innerHTML = "Gegner: " + stringComputer + ".<br/> Spieler: " + stringPlayer + ".<br/> Spieler gewinnt.";
        win = 2;
    }

if (win == 1) {
    pointsComputer++;
}
else if (win == 2) {
    pointsPlayer++;
}
}
anzahlRunden++;
rundenanzahl = document.getElementById("round")
rundenanzahl.innerHTML = anzahlRunden;
document.getElementById("points").innerHTML = "Spieler Punkte: " + pointsPlayer + "<br />" + "Gegner Punkte: " + pointsComputer; 
var winner;
if (pointsComputer >= pointsVictory) {
    winner = "Gegner";
}
else if (pointsPlayer >= pointsVictory) {
    winner = "Spieler";
}

if (winner != undefined) {
    alert("Der Gewiner ist " + winner + " mit " + pointsVictory + " Punkten!");
    anzahlRunden = 0;
    pointsComputer = 0;
    pointsPlayer = 0;
    document.getElementById("round").innerHTML = anzahlRunden;
    document.getElementById("points").innerHTML = "Zum starten, wähle ein Objekt."; 
    document.getElementById("choices").innerHTML = "";
}
}