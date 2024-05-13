document.getElementById('deposit-btn').addEventListener('click',function(){

    const depositField=document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount=parseFloat(depositAmountString);

    
    const totalDeposit= document.getElementById('total-deposit');
    const totalDepositAmountString= totalDeposit.innerText;
    const totalDepositAmount=parseFloat(totalDepositAmountString);

    const totalNewDeposit= totalDepositAmount + depositAmount;
    totalDeposit.innerText=totalNewDeposit;



    const totalBalance= document.getElementById('total-balance');
    
    const totalBalanceAmountString= totalBalance.innerText;
    
    const totalBalanceAmount=parseFloat(totalBalanceAmountString);
    console.log(totalBalanceAmount,typeof totalBalanceAmount);
    const totalNewBalance= totalBalanceAmount + depositAmount;

    totalBalance.innerText=totalNewBalance;

    depositField.value='';


})