const hamburg=document.querySelector('.fa-bars')
const hammenu=document.querySelector('.hamopt')
console.log(hammenu);
hamburg.addEventListener('click',()=>{
    hammenu.classList.toggle('hidden');
    hammenu.style.zIndex='2';
    
})
const x=document.querySelector('.fa-x')
x.addEventListener('click',()=>{
    hammenu.classList.toggle('hidden');
    hammenu.style.zIndex='-100';
})

