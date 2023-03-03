import App from './App';
import Calculator from './calculator/Calculator';
import AddCommand from './commands/AddCommand';
import DivideCommand from './commands/DivideCommand';
// import MultiplyCommand from './commands/MultiplyCommand';

console.log('Hello World!');

const calculator = new Calculator();
const app = new App(calculator, null);

app.addValue(1);
app.addValue(2);
app.command = AddCommand;
app.addValue(1);
app.addValue(3);

console.log('INITIAL VALUES');
console.log('firstValue', app.firstValue);
console.log('command', app.command);
console.log('secondValue', app.secondValue);

app.calculate();

console.log('AFTER ADDING');
console.log('firstValue', app.firstValue);
console.log('command', app.command);
console.log('secondValue', app.secondValue);

app.command = DivideCommand;
app.addValue(4);

app.calculate();

console.log('AFTER DIVIDING');
console.log('firstValue', app.firstValue);
console.log('command', app.command);
console.log('secondValue', app.secondValue);
console.log('HISTORY', calculator.history);
