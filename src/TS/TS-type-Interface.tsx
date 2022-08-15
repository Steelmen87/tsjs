export const array: Array<string | number | boolean> = ['string', 42, true]

type manType = {
    name: string
    height: number
}
type carType = {
    model: string
    year: number
}
const man1: manType = {name: 'Dima', height: 1.78}
const man2: manType = {name: 'Sasha', height: 1.8}
const car: carType = {model: 'Reno Stepway', year: 2016}

interface IPlanet {
    title: string
    number: number
}

const planet: IPlanet = {title: 'Mars', number: 4}

interface IArr {
    name: string
    height: number
}

const Arr: Array<IArr> = [{name: 'Dima', height: 1.78}, {name: 'Sasha', height: 1.8}]

function toUpperCase(strings: Array<string>): Array<string> {
    let result = strings.map(s => s.toUpperCase());
    return result;
}

const createMan = (props: manType): manType => {
    const {name, height} = props
    return {
        name,
        height
    };
}

interface ICar {
    model: string
    year: number
    on: boolean
    turnOn: () => void
    rename: (model: any) => void
}

interface IGarage {
    addCar: (car: carType) => void
    logAllCarsNames: () => void
    getAllCars: () => Array<carType>
}

const createGarage = (): IGarage => {
    const _cars: Array<carType> = [];

    return {
        addCar(car: carType) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}
