export default class Player {
    constructor(name){
    this._name = name;
    this._position = 0;

    }

    _move(x){
        this._position += x;
    }
}