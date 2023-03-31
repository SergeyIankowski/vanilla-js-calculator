import { App } from './App';
import Calculator from './calculator/Calculator';
import buttonsLayout from './models/buttonsLayout';
import renderCalculator from './utils/renderCalculator';
import './sass/main.scss';

const calculator = new Calculator();
const app = new App(calculator, () => renderCalculator(buttonsLayout.flat()));
app.createUI(document.body);
