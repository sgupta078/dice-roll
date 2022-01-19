
document.querySelector("button").addEventListener("click", game);

var score1 = 0;
var score2 = 0;


function game() {

    // generating random numbers

    var p1 = Math.floor(Math.random() * 6) + 1;
    var p2 = Math.floor(Math.random() * 6) + 1;

    // dice images 

    document.querySelector(".p1_image").setAttribute("src", "./images/" + p1 + ".png");
    document.querySelector(".p2_image").setAttribute("src", "./images/" + p2 + ".png");

    // showing result

    var result = "";

    if (p1 > p2) {
        result = document.querySelector(".result");
        result.textContent = "Player 1 Wins 🚩";
        score1++;
        document.querySelector(".score1").textContent = "Player 1: " + score1;
    }
    else if (p2 > p1) {
        result = document.querySelector(".result");
        result.textContent = "Player 2 Wins 🚩";
        score2++;
        document.querySelector(".score2").textContent = "Player 2: " + score2;
    }
    else {
        result = document.querySelector(".result");
        result.textContent = "Draw 🤝"
    }

}
