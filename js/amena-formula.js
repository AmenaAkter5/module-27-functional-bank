// using Manik Formula Mainly


//function 1 : 'input field' [deposit-input & withdraw-input] theke ja pacchi take amra text theke number e convert kore nicchi

function inputNumber(inputField) {
    const inputText = document.getElementById(inputField);
    const inputNumber = parseFloat(inputText.value);
    return inputNumber;
}

//function 2 : total field [total-deposit, total-withdraw & total-balace] er je inner text ache ei function e ese segula number hoye jabe & eder updated balance dekhabe!

function totalFieldNumber(previouseAmount, newInputAmount) {
    const totalField = document.getElementById(previouseAmount);
    const previousTotalAmount = parseFloat(totalField.innerText);
    const currentTotalAmount = previousTotalAmount + newInputAmount;
    totalField.innerText = currentTotalAmount;
}



// button - 1 : Deposit button

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = inputNumber('deposit-input');
    const newDepositBalance = totalFieldNumber('deposit-balance', depositInput);
    const newTotalBalance = totalFieldNumber('total-balance', depositInput);
});



// button - 2 : withdraw button
// withdraw button or withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = inputNumber('withdraw-input');
    const newWithdrawBalance = totalFieldNumber('withdraw-balance', withdrawInput);
    const newTotalBalance = totalFieldNumber('total-balance', -withdrawInput);
});



