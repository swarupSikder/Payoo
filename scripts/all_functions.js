function validCredentials(ac_number, pin) {
    if (ac_number.length === 11 && ac_number === "01010101010") {
        if (pin.length === 4 && pin === "1234") {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

//----------------//
//    Add Money   //
//----------------//
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const mbNumber = document.getElementById('am-mb-number').value;
    const amountToAdd = document.getElementById('amount-to-add').value;
    const pin = document.getElementById('am-pin-number').value;

    // console.log(mbNumber);
    // console.log(amountToAdd);
    // console.log(pin);

    if (validCredentials(mbNumber, pin) && parseFloat(amountToAdd) >= 0) {
        let amount = document.getElementById('balance');
        let amountConverted = parseFloat(amount.innerText);
        amount.innerText = amountConverted + parseFloat(amountToAdd);
    }
    else {
        alert('plz enter valid info');
    }
});








//---------------//
//    Cash Out   //
//---------------//
document.getElementById('withdraw-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById('agent-number').value;
    const amountToWithdraw = document.getElementById('amount').value;
    const pin = document.getElementById('co-pin-number').value;

    if (validCredentials(agentNumber, pin) && parseFloat(amountToWithdraw) >= 0) {
        let amount = document.getElementById('balance');
        let amountConverted = parseFloat(amount.innerText);
        amount.innerText = amountConverted - parseFloat(amountToWithdraw);
    }
    else {
        alert('plz enter valid info');
    }
});
