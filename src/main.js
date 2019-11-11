import "./styles.css";

const INPUT_FIELD = document.getElementById('input_numb');
const BACKSPASE_BUTTON = document.getElementById('backspace_button');
const CLEAN_BUTTON = document.getElementById('clean_button');
const TABLE_OF_BUTTONS = document.getElementById('table_numb');
const NUMBERS_BUTTONS_CLASS_NAME = '.button';

let NUMERIC_BUTTONS = document.querySelectorAll(NUMBERS_BUTTONS_CLASS_NAME);
let arrayOfButtonValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

BACKSPASE_BUTTON.addEventListener('click', () => { INPUT_FIELD.value = INPUT_FIELD.value.substring(0, INPUT_FIELD.value.length - 1) });
CLEAN_BUTTON.addEventListener('click', () => { INPUT_FIELD.value = "" });
TABLE_OF_BUTTONS.addEventListener('click', function(event) {
    if (event.target.className == 'button') {
        INPUT_FIELD.value = INPUT_FIELD.value + event.target.value;
        setRundomPosition(+event.target.value);
    }
});

// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function genNewArr(arr) {
//     if (arr.length === 1) return [arr[0]];
//     const num = randomIntFromInterval(0, arr.length - 1);
//     return [arr[num], ...genNewArr(arr.filter(el => el !== arr[num]))];
// }

function mixedArray(array) {

    let rund = Math.floor(Math.random() * (array.length - 1 - 1 + 1)) + 1;
    let mixedArr = array.splice(rund, array.length - rund);
    mixedArr = mixedArr.concat(array);
    arrayOfButtonValues = mixedArr;
    return mixedArr;
}

function setElementOnTheSamePosition(origArr, newArr, value) {

    const indexInOrigArr = origArr.findIndex(item => +item.value === value);
    const indexInNewArr = newArr.findIndex(item => item === value);
    const valueInNewArr = newArr[indexInOrigArr];
    newArr[indexInOrigArr] = +value;
    newArr[indexInNewArr] = valueInNewArr;


}

function setRundomPosition(numb) {

    //let mixedArr = genNewArr(arrayOfButtonValues);
    let mixedArr = mixedArray(arrayOfButtonValues);
    NUMERIC_BUTTONS = Array.from(NUMERIC_BUTTONS);
    setElementOnTheSamePosition(NUMERIC_BUTTONS, mixedArr, numb);
    NUMERIC_BUTTONS.map((item, index) => {
        item.value = mixedArr[index];
    });

    arrayOfButtonValues = mixedArr;
}