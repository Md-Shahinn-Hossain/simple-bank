function value(id){
    
    var idValue = document.getElementById(id).value;
    if(idValue == '')idValue=0; 
    var floatValue = parseFloat(idValue);
    // if(floatValue < 0){floatValue = 0;alert('Please input positive number.')}
    document.getElementById(id).value = '';
    return floatValue;
}

function value_total(id, depositAmount){
    var idValue = document.getElementById(id).innerText;
    const floatValue = parseFloat(idValue);
    return floatValue + depositAmount;
}
document.getElementById('btnd').addEventListener('click', function(){
    const depositAmount = value('deposit')
    if(depositAmount > 0){
        document.getElementById('deposit_text').innerText = value_total('deposit_text', depositAmount);

    // add to balance

    document.getElementById('balance').innerText = parseFloat(document.getElementById('balance').innerText) + depositAmount;
    }
    
})

// withdraw

document.getElementById('btnw').addEventListener('click', function(){
    const withdrawAmount = value('withdraw')
    const previousAmount = parseFloat(document.getElementById('withdraw_text').innerText);
    if(withdrawAmount > 0 && (document.getElementById('balance').innerText = parseFloat(document.getElementById('balance').innerText)) >= withdrawAmount){
        document.getElementById('withdraw_text').innerText = withdrawAmount + previousAmount;

    // add to balance

    document.getElementById('balance').innerText = parseFloat(document.getElementById('balance').innerText) - withdrawAmount;
    }
    
})