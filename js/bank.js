// Normal Format js for bank


// deposit button

document.getElementById('deposit-button').addEventListener('click', function () {
    // deposit input field
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText);

    // total deposit balance
    const depositBalance = document.getElementById('deposit-balance');
    const depositBalanceText = depositBalance.innerText;
    const previousDepositBalance = parseFloat(depositBalanceText);

    depositBalance.innerText = previousDepositBalance + newDepositAmount;

    // update total account balance after deposit
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousBalanceText);

    totalBalance.innerText = previousTotalBalance + newDepositAmount;

    // clear deposit input field
    depositInput.value = '';
});


// withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    // withdraw input field
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // total withdraw balance
    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawBalanceText = withdrawBalance.innerText;
    const previousWithdrawBalance = parseFloat(withdrawBalanceText);

    withdrawBalance.innerText = previousWithdrawBalance + newWithdrawAmount;

    // update total account balance after deposit
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);

    totalBalance.innerText = previousTotalBalance - newWithdrawAmount;

    // clear withdraw input field
    withdrawInput.value = '';

})