class Vehicle{
    start(){
        console.log('starting Vehicle');
    }

    static getCompanyName(){
        console.log('My Company')
    }
}


class Car extends Vehicle{
    start(){
        super.start();
        console.log('starting Car');
    }

    static getCompanyName(){
        super.getCompanyName();
        console.log('My Other Company');
    }
}


let c = new Car();
Car.getCompanyName();