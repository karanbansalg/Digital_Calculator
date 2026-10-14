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
let buttons  = document.querySelectorAll('button')

numbers.forEach((Btn) => {
   Btn.addEventListener('click', (e) => {
      console.log(e.target);
      display.value += e.target.textContent;     
      console.log(display.value);
   });
});
console.log(display.value)
function onDel(){
  display.value = display.value.slice(0,-1)
}

del.addEventListener('click',onDel)

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
   display.value = result()
})

   document.addEventListener('keydown',(e)=>{
      console.log(e.key);
      let key = e.key
      if((key>=0 && key<=9) || key === "+" || key === "-" || key === "*" || key === "/"){      
        display.value += key
      }else if(key === "Backspace"){
        onDel()  
      }else if(key === "Shift"){
         display.value = ""
      }else if(key === "Enter"){
         e.preventDefault()
         display.value = result()               
      }     
   })   

function result(){  
   
     try{
       display.value = eval()  
     }catch{
      display.value = "Invalid"
     }
}


  
