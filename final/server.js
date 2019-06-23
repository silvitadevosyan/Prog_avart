
xotArr = []; //խոտերի զանգված
eatArr = []; //խոտակերների զանգված
gishatichArr = [];
gazanArr = [];
mardArr = [];
Grass = require("./Grass")
Eatgrass = require("./EatGrass.js")
Gishatich = require("./Gishatich")
Gazan = require("./Gazan")
Mard = require("./Mard")
var fs = require('fs')
season = "winter"
timeforseason = 0;

// matrix=[
// [0,1,0,0,0,0],
// [0,0,0,0,0,1],
// [1,0,0,1,0,0],
// [0,0,0,0,0,0],
// [0,1,0,0,0,0],
// [0,0,0,0,0,0],


// ];

matrix = [
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 2, 0, 0, 1, 2, 0, 1, 2, 1, 1, 1, 1],
    [0, 3, 1, 0, 0, 2, 0, 0, 2, 0, 0, 1, 1, 5, 1, 1, 1, 0, 0, 0, 0, 0, 1, 3, 0, 1, 0, 0, 1, 1, 1, 2, 1, 1],
    [2, 1, 0, 2, 0, 1, 0, 2, 1, 0, 1, 1, 0, 3, 2, 0, 3, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 1, 2, 0, 3, 0, 1, 1],
    [0, 3, 0, 0, 2, 5, 2, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 3, 0, 1, 0, 1, 0, 1, 2],
    [0, 1, 2, 3, 0, 1, 0, 0, 1, 0, 2, 3, 1, 0, 1, 1, 1, 0, 2, 1, 3, 1, 2, 5, 0, 2, 1, 3, 1, 0, 1, 2, 3, 1],
    [0, 3, 0, 2, 0, 1, 0, 0, 1, 0, 1, 1, 0, 2, 0, 3, 0, 0, 0, 0, 1, 0, 1, 5, 0, 1, 0, 5, 5, 1, 1, 1, 1, 2],
    [2, 0, 3, 0, 0, 3, 4, 0, 2, 0, 0, 1, 1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 2],
    [0, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 1, 4, 4, 1, 1, 5, 2, 0, 2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 3, 5, 2, 0, 1, 0, 3, 3, 0, 0, 1, 1, 1, 0, 2, 5, 0, 0, 2, 0, 1, 1, 0, 0, 1, 0, 3, 1, 1, 3, 1, 3, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
    [2, 0, 4, 0, 2, 1, 0, 0, 2, 1, 1, 1, 1, 0, 1, 0, 2, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 4, 2, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 1, 4, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 2, 0, 1, 1],
    [1, 3, 1, 5, 0, 1, 0, 1, 5, 2, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 2, 1, 1, 2, 1],
    [1, 1, 4, 4, 0, 1, 4, 1, 2, 3, 2, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 3, 1, 1, 2, 1],
    [1, 3, 1, 1, 0, 1, 0, 1, 2, 1, 2, 1, 1, 0, 1, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 1, 1, 0, 1, 2, 2, 1],
    [1, 1, 3, 1, 0, 1, 0, 1, 3, 2, 2, 1, 5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 2, 1],
    [1, 3, 1, 3, 0, 1, 0, 3, 1, 2, 3, 1, 1, 3, 1, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 2, 1],
    [0, 1, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 2, 0, 0, 1, 2, 0, 1, 2, 1, 1, 1, 1],
    [0, 3, 1, 0, 0, 2, 0, 0, 2, 0, 0, 1, 5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 3, 0, 1, 0, 0, 1, 1, 2, 2, 1, 1],
    [2, 1, 0, 2, 0, 1, 0, 2, 1, 0, 1, 1, 0, 3, 2, 0, 3, 0, 0, 5, 5, 0, 2, 0, 0, 2, 0, 1, 5, 0, 3, 0, 1, 1],
    [0, 3, 0, 2, 0, 1, 0, 0, 2, 0, 1, 1, 0, 2, 0, 3, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 2],
    [0, 3, 0, 0, 2, 1, 2, 5, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 3, 0, 1, 0, 1, 0, 1, 2],
    [0, 1, 2, 3, 0, 1, 0, 0, 1, 0, 2, 3, 1, 0, 1, 2, 2, 0, 2, 1, 3, 1, 2, 0, 0, 2, 1, 3, 1, 0, 1, 2, 3, 1],
    [2, 0, 3, 0, 0, 3, 5, 5, 2, 0, 0, 1, 1, 2, 0, 2, 2, 0, 0, 0, 4, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 2],
    [0, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 2, 0, 2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 3, 0, 2, 0, 1, 0, 3, 3, 0, 0, 1, 1, 1, 0, 2, 1, 0, 0, 2, 0, 1, 1, 0, 0, 1, 0, 3, 1, 1, 3, 1, 3, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
    [2, 0, 0, 0, 2, 1, 0, 4, 4, 1, 4, 1, 1, 0, 1, 0, 2, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 0, 2, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 2, 1, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 2, 0, 1, 1],
    [1, 3, 1, 3, 0, 1, 0, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0, 1, 1, 2, 1, 1, 2, 1],
    [1, 1, 1, 1, 0, 1, 0, 2, 2, 3, 2, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 3, 1, 1, 2, 1],
    [1, 3, 1, 1, 0, 1, 0, 1, 2, 1, 2, 1, 4, 0, 1, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 1, 1, 0, 1, 2, 2, 1],
    [1, 1, 3, 1, 0, 1, 0, 1, 3, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 2, 1],
    [1, 3, 1, 3, 0, 1, 0, 3, 1, 2, 3, 2, 1, 3, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 2, 1],


]

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


function createObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 4) {
                var gazan = new Gazan(x, y);
                gazanArr.push(gazan);
            }
            else if (matrix[y][x] == 5) {
                var mard = new Mard(x, y);
                mardArr.push(mard);
            }
        }
    }
}



createObjects();
// let obj ={
//     'matrix':matrix,
//     "s":season
// }




function game() {
    timeforseason++;
    if (timeforseason <= 6) {
        season = "winter";
    }
    else if (timeforseason <= 12) {
        season = "spring";
    }
    else if (timeforseason <= 18) {
        season = "summer";
    }
    else if (timeforseason <= 24) {
        season = "autumn";
    }
    else if (timeforseason <= 30){
        timeforseason = 0;
    }


    if (season == "winter") {
        for (var i in xotArr) {
            xotArr[i].mul(6);
        }
    }
    else {
        for (var i in xotArr) {
            xotArr[i].mul(2);
        }
    }

   

    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (var i in gazanArr) {
        gazanArr[i].eat();
    }
    for (var i in mardArr) {
        mardArr[i].eat();
    }


    let obj = {
        'matrix': matrix,
        "s": season
    }
    io.sockets.emit("ugharkum em matrixy", obj);
}

function SpanelXotakerin() {
    //    xotArr =[];
    eatArr = [];
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            matrix[y][x] = 0;
        }
    }

}

function SpanelBolorin() {
    xotArr = [];
    eatArr = [];
    gishatichArr = [];
    gazanArr = [];
    mardArr = [];

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            matrix[y][x] = 0;
        }
    }

}
function Bomb() {

    //    xotArr =[];
    mardArr = [];
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            matrix[y][x] = 0;
        }


    }

}

function XotAvelacnel() {
    let x = Math.floor(Math.random() * matrix[0].length)
    let y = Math.floor(Math.random() * matrix.length)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 1;
        xotArr.push(new Grass(x, y))
    }
}
function XotakerAvelacnel() {
    let x = Math.floor(Math.random() * matrix[0].length)
    let y = Math.floor(Math.random() * matrix.length)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
     eatArr.push(new Eatgrass(x, y))
    }
}
function GishatichAvelacnel() {
    let x = Math.floor(Math.random() * matrix[0].length)
    let y = Math.floor(Math.random() * matrix.length)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 3;
     gishatichArr.push(new Gishatich(x, y))
    }
}

function GazanAvelacnel() {
    let x = Math.floor(Math.random() * matrix[0].length)
    let y = Math.floor(Math.random() * matrix.length)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 4;
     gazanArr.push(new Gazan(x, y))
    }
}
function MardAvelacnel() {
    let x = Math.floor(Math.random() * matrix[0].length)
    let y = Math.floor(Math.random() * matrix.length)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 5;
     mardArr.push(new Mard(x, y))
    }
}
    io.on('connection', function (socket) {
        socket.on("push Eatgrass", SpanelXotakerin)
    });
    io.on('connection', function (socket) {
        socket.on("xot avelacnel", XotAvelacnel)
    });

    io.on('connection', function (socket) {
        socket.on("push All", SpanelBolorin)
    });

    io.on('connection', function (socket) {
        socket.on("bomb", Bomb)
    });
    io.on('connection', function (socket) {
        socket.on("xotaker avelacnel", XotakerAvelacnel)
    });
    io.on('connection', function (socket) {
        socket.on("gishatich avelacnel", GishatichAvelacnel)
    });
    io.on('connection', function (socket) {
        socket.on("gazan avelacnel", GazanAvelacnel)
    });
    io.on('connection', function (socket) {
        socket.on("mard avelacnel", MardAvelacnel)
    });

    setInterval(game, 2000)

    var statistics = {};
    setInterval(function(){
    statistics.xot = xotArr.length;
    statistics.eat = eatArr.length;
    statistics.gi = gishatichArr.length;
    statistics.ga = gazanArr.length;
    statistics.ma = mardArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics),function(){
        console.log("send");

    })
    },10)
    // io.sockets.emit("ugharkum em statistikan", statistics);
    





