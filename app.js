

const NoOfCheckbox = document.getElementById("NoOfCheckbox");
const ct = document.getElementById("ct");
const submit = document.getElementById("submit");


const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');


let nCheckbox , ctinp ,idx =0 ;




page2.style.display ='none';

submit.addEventListener('click',(e)=>{
     e.preventDefault(); 
    nCheckbox  = NoOfCheckbox.value;
    ctinp = ct.value;


    if(!nCheckbox ){
     alert('PLEASE ENTER NUMBER OR CHECKLIST YOU WANT');
    }
    else if(nCheckbox>10){
     alert('you can make checklists upto 10 only')
    }
    else if( !ctinp){
     alert('PLEASE ENTER COMMON TEXT');
    }
    
    else{
    page1.style.display ='none';
    page2.style.display ='block';


  
    
   function hard(){
    const list_el =document.createElement('div');
    list_el.classList.add('list');

    const input =document.createElement('input');
         input.classList.add('check_b');
    input.type = "Checkbox";
  
      const input1 =document.createElement('input');
         input1.classList.add('input1');
         input1.type ='text';
         input1.value = `${idx}. ${ctinp}`
         input1.setAttribute('readonly','readonly')
         
           const edit =document.createElement('button');
         edit.classList.add('edit');
        
         edit.innerHTML ='<i class="fa-solid fa-pen-to-square"></i> '

         const deletes =document.createElement('button');
         deletes.classList.add('deletes');
        deletes.innerHTML ='<i class="fa-solid fa-trash"></i> '
    

   page2.appendChild(list_el);
   list_el.appendChild(input);
   list_el.appendChild(input1);  
   list_el.appendChild(edit);
   list_el.appendChild(deletes);


    edit.addEventListener('click',()=>{
     if( edit.innerHTML =='<i class="fa-solid fa-pen-to-square"></i> '
     ){
     input1.removeAttribute('readonly');
    input1.focus();
    edit.innerHTML ='<i class="fa-solid fa-check"></i>'
     }
     else{
          input1.setAttribute('readonly','readonly')
          edit.innerHTML ='<i class="fa-solid fa-pen-to-square"></i> '
     }
  })    
     deletes.addEventListener('click',()=>{
     page2.removeChild(list_el);
})
}
  for(let i=1; i<=nCheckbox; i++){
  idx++
   hard()
    }}}) 
     
     
    





