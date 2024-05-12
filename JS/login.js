document.getElementById('submit-btn').addEventListener('click',function(){

    const emailInput=document.getElementById('email-input');
    const email= emailInput.value;

    const passInput=document.getElementById('password-input');
    const pass= passInput.value;

    if(email=='mayerdua@gmail.com' && pass=='onkdua'){

            window.location.href='bank.html';
    }
    else{
            alert('Invalid email or password')
    }

    emailInput.value='';
    passInput.value='';
})