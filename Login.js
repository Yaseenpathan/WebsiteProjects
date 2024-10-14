validateLogin = () =>{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phonenumber = document.getElementById('PhoneNumber').value;

    if (username === 'none' && password === 'None' && phonenumber === '') {
        alert('Username Not Be Blank');
        alert('Password Not Be a Blank');
        alert('Enter PhoneNumber');
        return false;
    }
    return true;
}