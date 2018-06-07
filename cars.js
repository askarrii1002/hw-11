class car {
    constructor(make,model) {
    this._make = make;
    this._model = model;

    }
    chooseMake(pick) {
        this._make = pick;
        console.log(`You have choosen ${this._make}!`);
    }

    get model() {
        return this._model;
    }
}

var myCar = new car("Chevy", "Malibu")
console.log(myCar.make);
console.log(myCar.model);
myCar.chooseMake("Honda");