let a ='';
let b ='';
let znak ='';
let d;
let c = false;

const mass = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operation = ['/', 'X', '-', '+', '%', '+/-'];

const out = document.querySelector('.display p');

function clear () {
	a ='';
	b ='';
	znak ='';
	c = false;
	out.textContent = 0;
}
const but = document.querySelector('.ac')
if(but){
	but.addEventListener('click', () =>clear())
}
document.querySelector('.buttons').addEventListener('click', (event) =>{
	out.textContent = '';
	const num = event.target.textContent;
	if(mass.includes(num)){
		if(b ==='' && znak===''){
			a+=num;
			out.textContent = a;
		}
		else if(a!== '' && b!=='' && c){
			b = num
			c = false
			out.textContent = b
		}
		else{
			b+=num;
			out.textContent = b 
		}
		console.log(a, b, znak)
		
	}
	if(operation.includes(num)){
		znak = num;
		out.textContent = znak;
		console.log(znak)
	}

	if(num ==='='){
		if(b ==='') b = a
		switch(znak){
			case"+":
			  a = (+a) + (+b)
			  break;
			  case"-":
			  a = a - b
			  break;
			  case"X":
			  a = a * b
			  break;
			  case"/":
			  if(b === '0'){
			  	a = '';
			  	b = ''
			  	znak = ''
			  }
			  a = a / b
			  break;
			  case"%":
			  a = a * (1-b/100)
			  break;
			  case"+/-":
			  a = -a
			  break;
		}
		c = true
		out.textContent = a;
	}
	console.log(event)
})