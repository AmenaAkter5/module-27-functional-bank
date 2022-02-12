// arranged functions for bank



// 1. input function : deposit and withdraw input

function getInputValue(inputID) {
    // deposit input field
    const inputField = document.getElementById(inputID);
    const inputAmountText = inputField.value;
    const inputAmountValue = parseFloat(inputAmountText);

    // clear deposit input field
    inputField.value = '';
    return inputAmountValue;
}


// 2. update total deposit and withdraw

function updateTotalField(totalFieldId, newAmount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + newAmount;
}



// *** . get current balance of total balance field [একে update balance এর উপরে রাখতে হবে।]

function getCurrentBalance() {
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousBalanceText);
    return previousTotalBalance;
}




// 3. Update total account balance after deposit and withdraw

function updateBalance(newAmount, isAdd) {

    // এই line টা লাগবে কারণ আমরা total balance field এ আমাদের total taka র পরিমাণ দেখাবো। current balance থেকে নিয়ে আসতে হবে।

    const totalBalance = document.getElementById('total-balance');

    // current balance function call
    const previousTotalBalance = getCurrentBalance();

    //condition
    if (isAdd == true) {
        totalBalance.innerText = previousTotalBalance + newAmount;
    }
    else {
        totalBalance.innerText = previousTotalBalance - newAmount;
    }
}



// button - 1 : deposit button

document.getElementById('deposit-button').addEventListener('click', function () {

    // deposit input field
    const newDepositAmount = getInputValue('deposit-input');

    // কেউ যেন negative input দিতে না পারে তার জন্য condition

    if (newDepositAmount > 0) {
        // total deposit balance
        updateTotalField('deposit-balance', newDepositAmount);

        // update total account balance after deposit
        updateBalance(newDepositAmount, true);
    }

});




// button - 2 : withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {

    // withdraw input field
    const newWithdrawAmount = getInputValue('withdraw-input');

    //* */ curent balance এর বেশি যেন কেউ input দিতে না পারে withdraw করতে

    // funciton call of 'current balance'

    const currentBalance = getCurrentBalance();

    // কেউ যেন negative input দিতে না পারে তার জন্য condition

    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        // total withdraw balance
        updateTotalField('withdraw-balance', newWithdrawAmount);

        // update total account balance after deposit
        updateBalance(newWithdrawAmount, false);

    }
    // to show the error if anyone want to withdraw more than currentbalance

    if (newWithdrawAmount > currentBalance) {
        console.log('you can not withdraw money more than what you have in your account');
    }

})



