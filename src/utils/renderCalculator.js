import buttonsNames from '../models/buttonsNames';
import numberKeys from '../models/numberKeys';
import { wideKeys, extraWideKeys } from '../models/wideKeys';

export default function renderCalculator(arr) {
    const calculator = document.createElement('section');
    const calculatorTheme = localStorage.getItem('theme') || 'theme-1';
    calculator.classList.add('calculator', 'calculator-layout', `calculator_${calculatorTheme}`);

    const themes = document.createElement('div');
    themes.classList.add('themes-container', 'themes-layout');

    ['theme-1', 'theme-2', 'theme-3', 'theme-4'].forEach((item) => {
        const themeButton = document.createElement('button');
        themeButton.classList.add('themes-container__item', 'theme-button', `theme-button_${item}`);
        themeButton.onclick = () => {
            calculator.className = `calculator calculator-layout calculator_${item}`;
            localStorage.setItem('theme', item);
        };
        themeButton.innerText = `${item.slice(0, 5)} ${item.at(-1)}`;
        themes.append(themeButton);
    });

    const calculatorBoard = document.createElement('div');
    // calculatorBoard.type = 'text';
    calculatorBoard.classList.add('calculator__board', 'show-board');

    const calculatorButtons = document.createElement('div');
    calculatorButtons.classList.add('calculator__buttons', 'buttons-container__layout');

    arr.forEach((button) => {
        const buttonNode = document.createElement('div');
        const buttonValue = button;

        const buttonsNamesEntries = Object.entries(buttonsNames);
        const buttonName = buttonsNamesEntries.find((item) => item[1] === button)[0];
        buttonNode.classList.add('calculator__button', `calculator__button_${buttonName}`);

        if (wideKeys.includes(button)) {
            buttonNode.classList.add('calculator__button_wide');
        }
        if (extraWideKeys.includes(button)) {
            buttonNode.classList.add('calculator__button_extra-wide');
        }
        if (!numberKeys.includes(button)) {
            buttonNode.classList.add('calculator__button_colored');
        }

        buttonNode.append(buttonValue);
        calculatorButtons.append(buttonNode);
    });

    calculator.append(themes, calculatorBoard, calculatorButtons);
    return calculator;
}
