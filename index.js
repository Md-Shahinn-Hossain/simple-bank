document.getElementById('btn').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    if(email == 'shahinhossain675@gmail.com' && pass == 'shahinpro')window.location.href = 'practice.html';
    else console.log('thik kore de beta');
});
