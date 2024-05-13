document.getElementById('withdraw-btn').addEventListener('click',function(){

    const withdrawField=document.getElementById('withdraw-field');
    const withdrawAmountString=withdrawField.value;
    const withdrawAmount=parseFloat(withdrawAmountString);

    withdrawField.value='';

    if(isNaN(withdrawAmount))
        {
            alert('Please give a number');
            return;
        }

    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawString= totalWithdraw.innerText;
    const totalWithdrawAmount= parseFloat(totalWithdrawString);
    const totalBalance= document.getElementById('total-balance');
    const totalBalanceAmountString= totalBalance.innerText;
    const totalBalanceAmount=parseFloat(totalBalanceAmountString);

    if(totalBalanceAmount>=withdrawAmount)
        {
            const newTotalWithdraw= totalWithdrawAmount + withdrawAmount;
            totalWithdraw.innerText=newTotalWithdraw;
            const totalNewBalance= totalBalanceAmount - withdrawAmount;
            totalBalance.innerText=totalNewBalance;
        }
    else
        {
            alert('No sufficiant balance to withdraw');
        }



    



})