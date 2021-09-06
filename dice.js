export default class Dice{
    constructor(){

    }
    roll() {
        let result = 0;
        result = Math.floor((Math.random() * 6) + 1);
        return result;
    };
}