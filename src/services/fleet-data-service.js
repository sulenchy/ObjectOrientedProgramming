import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';

export class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
    }

    loadDate(fleet) {
        for(let data of fleet){
            switch(data.type){
                case 'car':
                    this.cars.push(data);
                    break;
                case 'drone':
                    this.drones.push(data);
                    break;
            }
        }
    }
}