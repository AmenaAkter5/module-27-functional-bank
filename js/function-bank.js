// Functions arrangement by normal format


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



// *** . get current balance of total balance field [একে উপরে রাখতে হবে। update balance এর উপরে]

function getCurrentBalance() {
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousBalanceText);
    return previousTotalBalance;
}




// 3. Update total account balance after deposit and withdraw

function updateBalance(newAmount, isAdd) {

    // এই line টা লাগবে কারণ আমরা total balance field এ আমাদের total taka র পরিমাণ দেখাবো

    const totalBalance = document.getElementById('total-balance');

    /* এই দুই লাইন current balance function এর অংশ হয়ে গেছে

    const previousBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousBalanceText); 
    */

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



// deposit button

document.getElementById('deposit-button').addEventListener('click', function () {
    // deposit input field
    /* 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText); */

    // or,

    // deposit input field [function call]
    // const newDepositAmount = getInputValue('deposit-input');



    // total deposit balance
    /* 
    const depositBalance = document.getElementById('deposit-balance');
    const depositBalanceText = depositBalance.innerText;
    const previousDepositBalance = parseFloat(depositBalanceText);

    depositBalance.innerText = previousDepositBalance + newDepositAmount; */

    // or,

    // total deposit balance [function call]
    // updateTotalField('deposit-balance', newDepositAmount);




    // update total account balance after deposit
    /* 
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousBalanceText);

    totalBalance.innerText = previousTotalBalance + newDepositAmount; 
    */

    // or,

    // update total account balance after deposit [function call]
    // updateBalance(newDepositAmount, true);




    // সব একসাথে function call

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


// withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    // withdraw input field
    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText); */

    // or,

    // withdraw input field [function call]
    // const newWithdrawAmount = getInputValue('withdraw-input');





    // total withdraw balance
    /* 
    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawBalanceText = withdrawBalance.innerText;
    const previousWithdrawBalance = parseFloat(withdrawBalanceText);

    withdrawBalance.innerText = previousWithdrawBalance + newWithdrawAmount; */

    // or,

    // total withdraw balance [function call]
    // updateTotalField('withdraw-balance', newWithdrawAmount);




    // update total account balance after deposit
    /* 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);

    totalBalance.innerText = previousTotalBalance - newWithdrawAmount; */

    // or,

    // update total account balance after deposit [function call]
    // updateBalance(newWithdrawAmount, false);



    // সব একসাথে function call

    // withdraw input field
    const newWithdrawAmount = getInputValue('withdraw-input');

    // curent balance এর বেশি যেন কেউ input দিতে না পারে withdraw করতে

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