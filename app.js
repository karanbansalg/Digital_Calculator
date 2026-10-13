let numbers = document.querySelectorAll('.number');
let display = document.querySelector('#display');
let operators = document.querySelectorAll('.operator');
let del = document.querySelector('.del')
let ac = document.querySelector('.ac')
let ans = document.querySelector('.ans')
let float = document.querySelector('.float')
let divide = document.querySelector('#divide')
let sum = document.querySelector('#sum')
let mul = document.querySelector('#mul')
let percentage = document.querySelector('#percentage')
let difference = document.querySelector('#difference')


numbers.forEach((Btn) => {
   Btn.addEventListener('click', (e) => {
      console.log(e.target);
      display.value += e.target.textContent;     
      console.log(display.value);
   });
});

del.addEventListener('click',()=>{  
   display.value = display.value.slice(0,-1)
      
})

ac.addEventListener('click',()=>{
   display.value = ""
})

float.addEventListener('click',(e)=>{  
   display.value += e.target.textContent
})

operators.forEach((operator)=>{
   operator.addEventListener('click',(e)=>{
      display.value += e.target.textContent
   })
})

ans.addEventListener('click',()=>{
   
})

  
