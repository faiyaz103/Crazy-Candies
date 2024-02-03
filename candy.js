var candies = ["Blue", "Orange", "Yellow", "Green", "Red", "Purple"]; //Corresponds to Candy Image names

var board = []; //2D Array, hold all img tags

var rows=9;
var columns=9;
var score=0;

var currCandy;
var otherCandy;

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

            // Drag Functionality
            tile.addEventListener("dragstart", dragStart); //Click candy, start process
            tile.addEventListener("dragover", dragOver); //Clicking candy and moving with mouse
            tile.addEventListener("dragenter", dragEnter); //Dragging over another candy
            tile.addEventListener("dragleave", dragLeave); //Leave over another candy
            tile.addEventListener("drop", dragDrop); //Dropping over another candy
            tile.addEventListener("dragend", dragEnd); //After drag completed and swapping done

            document.getElementById("board").append(tile); //Add tile to board

            row.push(tile);
        }

        board.push(row);
    }

    console.log(board);
}

function dragStart(){
    currCandy=this;
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){
    
}

function dragDrop(){
    otherCandy=this;
}

function dragEnd(){

    let currCoords=currCandy.id.split("-"); //0-1 -> ["0", "1"]
    let r=parseInt(currCoords[0]);
    let c=parseInt(currCoords[1]);

    let otherCoords=otherCandy.id.split("-");
    let ro=parseInt(otherCoords[0]);
    let co=parseInt(otherCoords[1]);

    let mvLeft = (co==c-1 && r==ro);
    let mvRight = (co==c+1 && r==ro);
    let mvUp = (ro==r-1 && c==co);
    let mvDown = (ro==r+1 && c==co);

    let isPoss = (mvLeft || mvRight || mvUp || mvDown);

    if(isPoss){
        let currImg=currCandy.src;
        let otherImg=otherCandy.src;

        currCandy.src=otherImg;
        otherCandy.src=currImg;
    }

    
}