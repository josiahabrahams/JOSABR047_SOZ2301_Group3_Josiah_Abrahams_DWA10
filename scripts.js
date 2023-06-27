import "./components.js/tally-layout.js";
import {checkIfNull} from "./modules/helper.js";
const addButton = checkIfNull(document.querySelector('[data-add]'));
const subtractButton = checkIfNull(document.querySelector('[data-sub]'));
const resetButton = checkIfNull(document.querySelector('[data-reset]'));
const displayAmount = checkIfNull(document.querySelector('[data-amount]'));
const alertMessage = checkIfNull(document.querySelector('[data-alert]'));
const CloseAlertButton = checkIfNull(document.querySelector('.alert-closable'));
//when clicked it adds 1 to the counter
addButton.addEventListener('click', ()=>{
    let inputValue = parseInt(displayAmount.value) ;
    inputValue = inputValue + 1;
    displayAmount.value = inputValue;
});

//when clicked it takes 1 from the counter
subtractButton.addEventListener('click', ()=>{
    let inputValue = parseInt(displayAmount.value) ;
    inputValue = inputValue - 1;
    displayAmount.value = inputValue;
});
// when clicked resets the counter shows an alert, and diaables buttons
resetButton.addEventListener('click', ()=>{
    alertMessage.show();
    addButton.disabled = true;
    subtractButton.disabled = true;
    resetButton.disabled = true;
    displayAmount.value = '0';
    if (displayAmount.value !== '0'){
        document.body.innerHTML = 'Please reset the browser!' ;
        throw new Error('the reset button has not reset the counter to 0');
    };
});

// when clicked and renables the buttons
CloseAlertButton .addEventListener('sl-after-hide', () => {
    addButton.disabled = false;
    subtractButton.disabled = false;
    resetButton.disabled = false; 
    
});