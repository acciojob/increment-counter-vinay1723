//your JS code here. If required.

const button = document.getElementById('incrementBtn');
const para = document.getElementById('counter');
let count = 0;
button.addEventListener('click',(e) => {
	alert(count);
	count += 1;
	para.innerHTML = `${count}`; 
})