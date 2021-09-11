export default class Player {
    constructor(){
    this._position = 0;

    }

    _move(x){
        console.log(this._position)
        this._position += x;
    }
}