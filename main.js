import Dice from './dice.js';
import Board from './board.js';
import Player from './player.js';

console.log("what")
class App{
    constructor(){
        this._button = document.getElementById("anuime")
        this._button.addEventListener("click", this.startGame);
        this._board = new Board();
        this._player1 = new Player("Luis");
        this._player2 = new Player("Gerardo");
        this._dice = new Dice;
        this._ladderLength = Board._startLadders
        this._snakeLength = Board._startLadders
        
    }   
    checkSnakes = (x) =>{
        let length = this._snakeLength
        for (let i = 0; i < length; i++) {  
            if (x === this._board._startSnakes[i]) {  
                return  this._board._startSnakes[i]
            }else{
                return -1;
            }
        }
    }
    checkLadders = (x) =>{
        console.log(this._board)
        let length = this._ladderLength;
        for (let i = 0; i < length; i++) {
            if (x === this._board._startLadders[i]) {  
                return  this._board._startLadders[i]
            }else{
                return -1;
            }
        }
    }
    startGame = () =>{
        while (this._player1._position < 100 && this._player2._position < 100) {
            this._player1._move(this._dice.roll());
            if(this.checkLadders(this._player1._position)!=-1){
                console.log(this._player1._name + " encontró una escalera y subió a " + this.checkLadders(this._player1._position))
                this._player1._position = this.checkLadders(this._player1._position)
            }else{
                return;
            }
            if(this.checkSnakes(this._player1._position)!=-1){
                console.log(this._player1._name + " encontró una serpiente y bajó a " + this.checkLadders(this._player1._position))
                this._player1._position = this.checkSnakes(this._player1._position)
            }else{
                return;
            }
            console.log(this._player1._name +" se encuentra en " + this._player1._position);
            this._player2._move(this._dice.roll());
            if(this.checkLadders(this._player2._position)!=-1){
                console.log(this._player2._name + " encontró una escalera y subió a " + this.checkLadders(this._player2._position))
                this._player2._position = this.checkLadders(this._player2._position)
            }else{
                return;
            }
            if(this.checkSnakes(this._player2._position)!=-1){
                console.log(this._player2._name + " encontró una serpiente y bajó a " + this.checkLadders(this._player2._position))
                this._player2._position = this.checkSnakes(this._player2._position)
            }else{
                return;
            }
            console.log(this._player2._name +" se encuentra en " +this._player2._position);
        }

    }
}
new App;
