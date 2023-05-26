const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
form.addEventListener('submit',(e) => {
  
   if (password.value === '' || password.value == null){
      alert("Password Is Required");
      e.preventDefault()
   }
   else if (password.value.length <= 8){
      alert("Password must be longer than 8 characters");
      e.preventDefault()
   }
   else if (password.value == "password"){
      alert("password cannot be password");
      e.preventDefault()
   }
   else{
      alert("You are signed In.");
   }
  
})
const pass = document.getElementById('password');
const background = document.getElementById('background');

pass.addEventListener('input', (e) => {
	const input = e.target.value;
	const length = input.length;
	const blurValue = 20 - length * 2;
	background.style.filter = `blur(${blurValue}px)`;
});







