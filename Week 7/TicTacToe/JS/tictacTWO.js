let count=0;
let square = document.querySelectorAll(".square");
square = Array.from(square);

const gameBoard ={
  checkWin: function(){
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
      return true;
    }else{
      return false;
    }
},
  displayMessage: function(){
    if(gameBoard.checkWin() == true){
      document.getElementById("message").innerHTML="You win!";
  }
}
}
const markerO = {
  letter:"O"
}
const markerX = {
  letter:"X"
}
const player = {

  clickAndMark: function(){
    square.forEach((square) =>{
      square.addEventListener("click", (e)=>{
        if(e.target.innerHTML==markerX.letter || e.target.innerHTML==markerO.letter){
          document.getElementById("message").innerHTML="This place is taken! You must choose another box.";
        }else{
          if(count%2==0){
            e.target.innerHTML=markerO.letter;
            count++
          }else{
            e.target.innerHTML=markerX.letter;
            count++
          }
        }
        gameBoard.checkWin();
        gameBoard.displayMessage();
    })
    })
  }
}

player.clickAndMark();


// function getCoords(){
//     let squares = document.querySelectorAll(".square");
//
//     for(let i = 0; i < squares.length; i++){
//       squares[i].addEventListener("click", () => {
//           let column = squares[i].classList[1];
//           let row = squares[i].classList[2];
//           console.log(`${squares[i].classList[1]} ${squares[i].classList[2]}`); //Just for troubleshooting purposes
//           console.log(`${column} ${row}`);
//           return [column, row]; //Will return the column and row of the cell that is clicked as an array
//       });
//     }
// };
