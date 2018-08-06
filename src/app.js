class Drone {
    constructor(id, name) {
        //instance properties
        this.id = id;
        this.name = name;
    }
}
// class properties
Drone.maxHeight = 2000;

let drone = new Drone('A123', 'Flyer');
let drone2 = new Drone('A12', 'Flyinh');
console.log(Drone.maxHeight);