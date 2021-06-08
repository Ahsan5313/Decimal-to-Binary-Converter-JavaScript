const result = document.querySelector('#result');
const submit = document.querySelector('#submit');

function binary(e){
   e.preventDefault();
  
   const num = document.getElementById('number').value;
   
   if(num == ''){
    
    alert('Please Enter  number')

   }else if(num < 0){

    alert('Please Enter positive number')
   }else{

    result.style.visibility = 'visible';
   }

   binaryNumber = Number(num).toString(2);
   result.innerHTML = binaryNumber;
  
}

submit.addEventListener('click', binary)