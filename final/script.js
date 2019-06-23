
//  let matrix = [];
let side = 15;
var socket = io();

function setup() {

    createCanvas(34 * side, 34 * side);
    background('black');



}

// let grassCountElement = document.getElementById('grassCount');
// let grassEaterCountElement = document.getElementById('grassEaterCount');

// function stanalStatistikan(data){
//     grassCountElement.innertext(data.grassCount);
// }


function drawMatrix(obj) {

    ExanakiGreluTex = document.getElementById('vayvay');
    matrix = obj.matrix;
    season = obj.s;

    if (season == "winter") {
        ExanakiGreluTex.innerText = "Ձմեռ";
    }
    else if (season == "spring") {
        ExanakiGreluTex.innerText = "Գարուն";
    }
    else if (season == "summer") {
        ExanakiGreluTex.innerText = "Ամառ";
    }
    else if (season == "autumn") {
        ExanakiGreluTex.innerText = "Աշուն";
    }




    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                if (season == "winter") {
                    fill("#aaffff");
                }
                else if (season == "spring") {
                    fill("#00ff1f");
                }
                else if (season == "summer") {
                    fill("#FFFF00");
                }
                else if (season == "autumn") {
                    fill("#00ffff");
                }
                rect(j * side, i * side, side, side);
            }


            else if (matrix[i][j] == 2) {
                if (season == "winter") {
                    fill("#ff89e1");
                }
                else if (season == "spring") {
                    fill("#00a313");
                }
                else if (season == "summer") {
                    fill("#ff8800");
                }
                else if (season == "autumn") {
                    fill("#ff00bf");
                }
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 0) {
                fill("black");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                if (season == "winter") {
                    fill("#c58aff");
                }
                else if (season == "spring") {
                    fill("#00a264");
                }
                else if (season == "summer") {
                    fill("#ffcc00");
                }
                else if (season == "autumn") {
                    fill("#8000ff");
                }
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                if (season == "winter") {
                    fill("#8d90ff");
                }
                else if (season == "spring") {
                    fill("#00a18c");
                }
                else if (season == "summer") {
                    fill("#ff5900");
                }
                else if (season == "autumn") {
                    fill("#0008ff");
                }
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                if (season == "winter") {
                    fill("#f9a4ff");
                }
                else if (season == "spring") {
                    fill("#63ff4f");
                }
                else if (season == "summer") {
                    fill("#ff0000");
                }
                else if (season == "autumn") {
                    fill("#f008ff");
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}
// function changeWeather(season){

// document.getElementById("weather").innerHTML = season;

// }
socket.on("ugharkum em matrixy", drawMatrix);
// socket.on("ugharkum em statistikan", stanalStatistikan);
// socket.on("changeW", changeWeather)




function pushEatgrass() {
    socket.emit("push Eatgrass")
}
function killAll() {
    socket.emit("push All")
}
function Bomb() {
    socket.emit("bomb")
}

function XotAvelacnel() {
    socket.emit("xot avelacnel")
}
function XotakerAvelacnel() {
    socket.emit("xotaker avelacnel")
}
function GishatichAvelacnel() {
    socket.emit("gishatich avelacnel")
}
function GazanAvelacnel() {
    socket.emit("gazan avelacnel")
}
function MardAvelacnel() {
    socket.emit("mard avelacnel")
}