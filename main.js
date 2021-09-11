import Dice from './dice.js';
import Board from './board.js';
import Player from './player.js';

console.log("what")
class App{
    constructor(){
        this._button = document.getElementById("anuime")
        this._button.addEventListener("click", this.startGame);
        this._board = new Board();
        this._player1 = new Player;
        this._player2 = new Player();
        this._dice = new Dice;
        
    }   
    startGame = () =>{
        while (this._player1._position < 100 && this._player2._position < 100) {
            this._player1._move(this._dice.roll());
            console.log("El jugador 1 se encuentra en " + this._player1._position);
            this._player2._move(this._dice.roll());
            console.log("El jugador 2 se encuentra en " +this._player2._position);
        }
    }
}
new App;
