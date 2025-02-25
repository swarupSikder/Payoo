document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    
    const mobileNumber = document.getElementById('mb-number');
    const pinNumber = document.getElementById('pin-number');

    if (mobileNumber.value === "01010101010") {
        if (pinNumber.value === "1234") {
            window.location.href = './home.html';
        }
        else {
            console.log('this pin is not correct!!!');
        }
    }
    else {
        console.log('this number seems like unregistered!!!');
    }
});