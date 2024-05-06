const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
   alert('Example for use of Alert to see some info in console');
   console.log('Shows some information in console'); 
});



const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert( 'Alert to warn about some info in console ');
   console.log('Some Warning message'); 
}); 


const Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', function (event) {
userText = prompt('Enter user text to appear in console');
console.log(userText);
//Prompt.textContent = userText;
});

