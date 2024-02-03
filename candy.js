var candies = ["Blue", "Orange", "Yellow", "Green", "Red", "Purple"]; //Corresponds to Candy Image names

var board = []; //2D Array, hold all img tags

var rows=9;
var columns=9;
var score=0;

//When webpage loads
window.onload = function(){
    startGame();
}

//Generates random candies
function randomCandy(){
    return candies[Math.floor(Math.random() * candies.length)];
    /*Math.floor() -> Returns floor values
    Math.random() -> Return random number 0 - 1; 1 not included */
}

//Places random candies on board
function startGame(){

    for(let r=0; r<rows; r++){

        let row=[];

        for(let c=0; c<columns; c++){

            let tile = document.createElement("img"); //Create <img>
            tile.id = r.toString()+"-"+c.toString(); //Generates id 0-1, 1-2 like these
            tile.src = "./images/"+randomCandy()+".png"; //Generates <img> src

            document.getElementById("board").append(tile); //Add tile to board

            row.push(tile);
        }

        board.push(row);
    }

    console.log(board);
}