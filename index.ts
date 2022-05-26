// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;



interface Person{
  name: string,
  age: number
}

function getPerson(person: Person){
  //...
}

const person1 = getPerson({ age: 20 });
const person2 = getPerson({ name: "Bob", age: 25 });