import Dice from './dice.js';
import Board from './board.js';
import Player from './player.js';
class App{
    constructor(){
        this._button = document.getElementById("anuime")
        document.addEventListener("DOMContentLoaded", this.startGame);
        this._board = new Board();
        this._player1 = new Player("Luis");
        this._player2 = new Player("Gerardo");
        this._dice = new Dice;
        
    }   
    checkSnakes = (x) =>{
        let result = -1;
        for (let i = 0; i < this._board._startSnakes.length; i++) {
            if (x === this._board._startSnakes[i]) {  
            result = this._board._startSnakes[i]
            }else{
                
            }
        }
        return result;
    }
    checkLadders = (x) =>{
        let result = -1;
        for (let i = 0; i < this._board._startLadders.length; i++) {
            if (x === this._board._startLadders[i]) {  
            result = this._board._startLadders[i]
            }else{
                
            }
        }
        return result;
    }
    checkWinner = (x,x2) =>{
        if(x._position>x2._position){
            return x._name + " es el ganador!"
        }else{
            return x2._name + " es el ganador!"
        }
    }
    startGame = () =>{
        while (this._player1._position < 100 && this._player2._position < 100) {
            

            this._player1._move(this._dice.roll());
            if(this.checkLadders(this._player1._position)!=-1){
                let pos = this._board._endLadders[this._board._startLadders.indexOf(this.checkLadders(this._player1._position))];
                console.log(this._player1._name + " encontró una escalera en " + this._player1._position + " y subió a " + pos)
                this._player1._position = pos;
            }else{
                
            }
            if(this.checkSnakes(this._player1._position)!=-1){
                let pos = this._board._endSnakes[this._board._startSnakes.indexOf(this.checkSnakes(this._player1._position))];
                console.log(this._player1._name + " encontró una serpiente en " + this._player1._position + " y bajó a " + pos)
                this._player1._position = pos;
            }else{
                
            }
            console.log(this._player1._name +" se encuentra en " + this._player1._position);

            
            this._player2._move(this._dice.roll());
            if(this.checkLadders(this._player2._position)!=-1){
                let pos = this._board._endLadders[this._board._startLadders.indexOf(this.checkLadders(this._player2._position))];
                console.log(this._player2._name + " encontró una escalera en " + this._player2._position + " y subió a " + pos)
                this._player2._position = pos;
            }else{
                
            }
            if(this.checkSnakes(this._player2._position)!=-1){
                let pos = this._board._endSnakes[this._board._startSnakes.indexOf(this.checkSnakes(this._player2._position))];
                console.log(this._player2._name + " encontró una serpiente en " + this._player2._position + " y bajó a " + pos)
                this._player2._position = pos;
            }else{
                
            }
            console.log(this._player2._name +" se encuentra en " +this._player2._position);
        }
        console.log(this.checkWinner(this._player1,this._player2))
    }
}
new App;
