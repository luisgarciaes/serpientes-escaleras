export default class Player {
    constructor(){
    this._position = 0;

    }

    move(x){
        this._position += x;
    }
}