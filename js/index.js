
var loginButton = document.getElementById('login');
loginButton.onclick = function () {

   
   var emailE1 = document.getElementById('emailInputId');
   var passE1 = document.getElementById('passInputId');
   var checkE1 = document.getElementById('inputCheckBoxId');
   var buttonE1 = document.getElementById('login');

   //console.log(emailE1.value)
   //console.log(passE1.value)
   //console.log(checkE1.checked)
   //console.log(buttonE1.value)
   window.alert('Email: ' + emailE1.value + '; ' + 'Password: ' + passE1.value + '; ' + 'remember me: ' + checkE1.checked)
};