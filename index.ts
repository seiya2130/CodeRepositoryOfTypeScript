// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface Enquete {
  name?: string;
  sex: string;
  age: number;
}

function getEnquete(enquete: Enquete) {
  //...
}

const enquete1 = getEnquete({ sex: 'female', age: 20 }); // nameプロパティの指定が不要になる
const enquete2 = getEnquete({ name: 'Bob', sex: 'male', age: 25 });

type Car = {
  //
};

type Train = {
  //
};

type Airplane = {
  //
};

type Vehicle = Car | Train | Airplane;

let vehicle: Vehicle[] = [
  // Car/Train/Airplaneしか配列に追加できない
];
