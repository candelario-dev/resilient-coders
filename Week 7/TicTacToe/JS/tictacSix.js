//Wihout the bot

const ticTacToe = new Game();

ticTacToe.start()

function Game() {
  const gameBoard = new Board();
  const player1 = new Player1(gameBoard);
  const player2 = new Player2(gameBoard);
  let turn = 0;


  this.start = function(){
    const config = { childList: true }
    const observer = new MutationObserver(() => turns())
    gameBoard.coordinates.forEach((el) => observer.observe(el, config));
    turns()
  }//closes this.start

  function turns() {
    if (gameBoard.checkWin() == 'X WON'){
       document.getElementById('message').innerHTML = "PLAYER 1 WINS!"
     return;
   }
   else if (gameBoard.checkWin() == 'O WON'){
     document.getElementById('message').innerHTML = "PLAYER 2 WINS!"
   }
    else if (turn %2 === 0){
      document.getElementById('messageTurn').innerHTML = "It's Player 1's turn"
      player1.turn();
    } else {
        document.getElementById('messageTurn').innerHTML = "It's Player 2's turn"
      player2.turn();
    }
  turn++
  } // closes turn

} //closes TicTacToeGame

function Board(){
  this.coordinates = Array.from(document.querySelectorAll('.square'));

  this.checkWin = function(){
    if (
      //X's
      // Rows
        this.coordinates[0].innerText == 'X' && this.coordinates[0].innerText == this.coordinates[1].innerText && this.coordinates[1].innerText == this.coordinates[2].innerText ||
        this.coordinates[3].innerText == 'X' && this.coordinates[3].innerText == this.coordinates[4].innerText && this.coordinates[4].innerText == this.coordinates[5].innerText ||
        this.coordinates[6].innerText == 'X' && this.coordinates[6].innerText == this.coordinates[7].innerText && this.coordinates[7].innerText == this.coordinates[8].innerText ||
      //Columns
        this.coordinates[0].innerText == 'X' && this.coordinates[0].innerText == this.coordinates[3].innerText && this.coordinates[3].innerText == this.coordinates[6].innerText ||
        this.coordinates[1].innerText == 'X' && this.coordinates[1].innerText == this.coordinates[4].innerText && this.coordinates[4].innerText == this.coordinates[7].innerText ||
        this.coordinates[2].innerText == 'X' && this.coordinates[2].innerText == this.coordinates[5].innerText && this.coordinates[5].innerText == this.coordinates[8].innerText ||
      //Diagonal
        this.coordinates[0].innerText == 'X' && this.coordinates[0].innerText == this.coordinates[4].innerText && this.coordinates[4].innerText == this.coordinates[8].innerText ||
        this.coordinates[4].innerText == 'X' && this.coordinates[2].innerText == this.coordinates[4].innerText && this.coordinates[4].innerText == this.coordinates[6].innerText ){
          return 'X WON'
            // document.getElementById('message').innerHTML = "YOU WON!"
        }
        else if(
        //O's
        // Rows
          this.coordinates[0].innerText == 'O' && this.coordinates[0].innerText == this.coordinates[1].innerText && this.coordinates[1].innerText == this.coordinates[2].innerText ||
          this.coordinates[3].innerText == 'O' && this.coordinates[3].innerText == this.coordinates[4].innerText && this.coordinates[4].innerText == this.coordinates[5].innerText ||
          this.coordinates[6].innerText == 'O' && this.coordinates[6].innerText == this.coordinates[7].innerText && this.coordinates[7].innerText == this.coordinates[8].innerText ||
        //Columns
          this.coordinates[0].innerText == 'O' && this.coordinates[0].innerText == this.coordinates[3].innerText && this.coordinates[3].innerText == this.coordinates[6].innerText ||
          this.coordinates[1].innerText == 'O' && this.coordinates[1].innerText == this.coordinates[4].innerText && this.coordinates[4].innerText == this.coordinates[7].innerText ||
          this.coordinates[2].innerText == 'O' && this.coordinates[2].innerText == this.coordinates[5].innerText && this.coordinates[5].innerText == this.coordinates[8].innerText ||
        //Diagonal
          this.coordinates[0].innerText == 'O' && this.coordinates[0].innerText == this.coordinates[4].innerText && this.coordinates[4].innerText == this.coordinates[8].innerText ||
          this.coordinates[4].innerText == 'O' && this.coordinates[2].innerText == this.coordinates[4].innerText && this.coordinates[4].innerText == this.coordinates[6].innerText
    ){
      return 'O WON';
        // document.getElementById('message').innerHTML = "BOT WON"
    }else{
      return false;
    }


  }//closes checkWin

}//closes Board



function Player1(gameBoard){

  this.turn = function() {
    gameBoard.coordinates.forEach (el => el.addEventListener('click', takeTurn))

  }//closes turn
  function takeTurn(event){
    if (event.target.innerText == 'X' || event.target.innerText == 'O'){
      document.getElementById('message').innerHTML = "That spot is taken. Try again."
      return;
    } else {
    event.target.innerText= 'X';
    gameBoard.coordinates.forEach(el => el.removeEventListener('click', takeTurn))
      document.getElementById('message').innerHTML = ""
  }//closes takeTurn
}
}//closes Player1


function Player2(gameBoard){
  this.turn = function() {
    gameBoard.coordinates.forEach (el => el.addEventListener('click', takeTurn))

  }//closes turn
  function takeTurn(event){
    if (event.target.innerText == 'X' || event.target.innerText == 'O'){
      document.getElementById('message').innerHTML = "That spot is taken. Try again."
      return;
    } else {
    event.target.innerText= 'O';
    gameBoard.coordinates.forEach(el => el.removeEventListener('click', takeTurn))
    document.getElementById('message').innerHTML = ""
}
  }//closes takeTurn
}//closes Player2
