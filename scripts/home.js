const addMoneyOption = document.getElementById('add-money-option');
const addMoneyLayout = document.getElementById('add-money-layout');

const cashOutOption = document.getElementById('cash-out-option');
const cashOutLayout = document.getElementById('cash-out-layout');

const transferMoneyOption = document.getElementById('transfer-money-option');
const getBonusOption = document.getElementById('get-bonus-option');
const payBillOption = document.getElementById('pay-bill-option');
const transactionOption = document.getElementById('transactions-option');

//click
addMoneyOption.addEventListener('click', function(event){
    event.preventDefault();

    addMoneyLayout.style.display = 'block';
    cashOutLayout.style.display = 'none';

    addMoneyOption.classList.remove('option-border-unfocused');
    addMoneyOption.classList.add('option-border-focused');
    cashOutOption.classList.add('option-border-unfocused');
    cashOutOption.classList.remove('option-border-focused');
});

cashOutOption.addEventListener('click', function(event){
    event.preventDefault();

    cashOutLayout.style.display = 'block';
    addMoneyLayout.style.display = 'none';

    addMoneyOption.classList.add('option-border-unfocused');
    addMoneyOption.classList.remove('option-border-focused');
    cashOutOption.classList.remove('option-border-unfocused');
    cashOutOption.classList.add('option-border-focused');
});