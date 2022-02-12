// Manik Formula


// deposite button or deposite event handler
document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositFieldNumber = inputNumber('deposite-field');
    const depositAmountNumber = textNumber('deposit-amount', depositFieldNumber);
    const blanceAmountNumber = textNumber('blance-amount', depositFieldNumber);
});


// withdraw button or withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawFieldNumber = inputNumber('withdraw-field');
    const withdrawAmountNumber = textNumber('withdraw-amount', withdrawFieldNumber);
    const blanceAmountNumber = textNumber('blance-amount', -withdrawFieldNumber);
});

//function 1: field theke ja pacchi take amra text theke number e convert kore nicchi
function inputNumber(inputField) {
    const inputText = document.getElementById(inputField);
    const inputNumber = parseFloat(inputText.value);
    return inputNumber;
}

//function 2: jotogula inner text ache ei function e ese segula number hoye jabe!
function textNumber(previouseAmount, inputAmount) {
    const allText = document.getElementById(previouseAmount);
    const allTextNumber = parseFloat(allText.innerText);
    const cureentAmount = allTextNumber + inputAmount;
    allText.innerText = cureentAmount;
}