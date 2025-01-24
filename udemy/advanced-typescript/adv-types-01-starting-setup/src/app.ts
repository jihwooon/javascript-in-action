type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // number 타입

type StringAndNumber = string & number; // never 타입

type Animal = {
    species: string;
    age: number;
}

type Human  = Animal & {
    name: string;
}

const nabi: Animal = {
    species: 'cat',
    age: 3
}

const max: Human = {
    name: 'Max',
    species: 'homosapiens',
    age: 30
}
