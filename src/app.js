class Drone {
    constructor(id, name) {
        //instance properties
        this._id = id;
        this._name = name;
    }

    get id(){
        console.log('in id getter');
        return this._id + ' TEMPORARY';
    }

    get name(){
        console.log('in id getter');
        return this._name + ' TEMPORARY';
    }

    set id (value){
        this._id = value;
    }

    set name (value){
        this._name = value;
    }

    //static method or class method
    static getCompany(){
        console.log('in getCompany');
    }

    //instance method
    fly(){
        console.log(`Drone ${this.id} is flying`);
    }
}
// class properties
Drone.maxHeight = 2000;

let drone = new Drone('123', 'lambo');

drone.id = '456';
drone.name = 'toyota';


console.log(`${drone.id} ${drone.name}`);