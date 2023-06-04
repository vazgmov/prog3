var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 4, 0, 0, 2, 0, 4, 0, 3, 1, 0, 0, 4, 0, 4, 6, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0],

    [0, 0, 1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 3, 0, 2, 0, 2, 0, 0, 3, 6, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 4],

    [0, 0, 4, 1, 2, 0, 5, 4, 0, 0, 1, 0, 0, 4, 1, 0, 3, 2, 0, 0, 0, 0, 0, 1, 2, 1, 0, 1, 0, 0, 0],

    [0, 0, 1, 2, 0, 1, 0, 1, 1, 0, 0, 2, 0, 1, 0, 0, 0, 0, 3, 1, 2, 0, 0, 1, 1, 1, 1, 3, 1, 0, 3],

    [0, 1, 0, 4, 0, 0, 0, 1, 0, 1, 1, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 1, 2, 0, 0, 0],

    [0, 0, 0, 1, 0, 2, 0, 1, 4, 0, 0, 0, 2, 1, 1, 1, 1, 1, 0, 2, 0, 1, 1, 0, 0, 3, 0, 0, 0, 3, 2],

    [0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 0, 4, 0, 1, 0, 1, 4, 0, 0, 0, 0, 0, 4],

];

var side = 30;
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var mardArr = [];
var deadArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater);
            }
            else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y, 3);
                predatorArr.push(pred);

            }
            else if (matrix[y][x] == 4) {
                var ma = new mard(x, y, 4);
                mardArr.push(ma);

            }
            else if (matrix[y][x] == 5) {
                var de = new dead(x, y, 5);
                deadArr.push(de);

            }
            else if (matrix[y][x] == 8) {


            }
        }
    }


}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            else if (matrix[y][x] == 2) {
                fill(255, 255, 0);

            }
            else if (matrix[y][x] == 3) {
                fill(255, 0, 0);

            }

            else if (matrix[y][x] == 4) {
                fill(233, 203, 135);

            }

            else if (matrix[y][x] == 5) {
                fill("black");

            }
            rect(x * side, y * side, side, side);

        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
        grassEaterArr[i].move()
        grassEaterArr[i].mult()
        grassEaterArr[i].die()
    }

    for (var i in predatorArr) {
        predatorArr[i].eat()
        predatorArr[i].move()
        predatorArr[i].mult()
        predatorArr[i].die()
    }


        for (var i in mardArr) {
            mardArr[i].eat()
            mardArr[i].move()
            mardArr[i].mult()
            mardArr[i].die()


        }
        for (var i in deadArr) {
            deadArr[i].eat()
            deadArr[i].move()


        }
    }




