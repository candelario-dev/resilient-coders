let count = 0;
let square= document.querySelectorAll(".square");
square = Array.from(square);


square.forEach((box) =>{
    box.addEventListener("click", (e)=>{
        if(e.target.innerHTML=="X" || e.target.innerHTML=="O"){
          document.getElementById("message").innerHTML="This place is taken! You must choose another box.";
        }else{
          if(count%2 == 0){
            e.target.innerHTML="X";
            document.getElementById("message").innerHTML="You have placed X";
            count++
          }else{
            e.target.innerHTML="O";
            document.getElementById("message").innerHTML="You have placed O";
            count++
          }
        }
        checkWin();
    })
})

function checkWin(){
    if (
      // Rows
        square[0].innerHTML == square[1].innerHTML && square[1].innerHTML == square[2].innerHTML ||
        square[3].innerHTML == square[4].innerHTML && square[4].innerHTML == square[5].innerHTML ||
        square[6].innerHTML == square[7].innerHTML && square[7].innerHTML == square[8].innerHTML ||
      //Columns
        square[0].innerHTML == square[3].innerHTML && square[3].innerHTML == square[6].innerHTML ||
        square[1].innerHTML == square[4].innerHTML && square[4].innerHTML == square[7].innerHTML ||
        square[2].innerHTML == square[5].innerHTML && square[5].innerHTML == square[8].innerHTML ||
      //Diagonal
        square[0].innerHTML == square[4].innerHTML && square[4].innerHTML == square[8].innerHTML ||
        square[2].innerHTML == square[4].innerHTML && square[4].innerHTML == square[6].innerHTML
    ){
      document.getElementById("message").innerHTML="You win!";
    }
}

// Player prototype
let Player = function(name, marker) {
this.name   = name;
this.marker = marker;
}

// Player for X
const playerX = new Player('throwsX', 'X');

// Player for O
const playerO = new Player('throwsO', 'O');

// We got the players down. Now what?

// let square = document.querySelectorAll('square').
// Array.from(square)
// // There we have an array from square
//
// let Square = function {
//   marked : false'
//   value : false
// }

// square.addEventListener('click', =>
//
//
//
//
//
// )
