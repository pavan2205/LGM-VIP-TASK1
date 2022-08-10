const todoInput=document.querySelector('.todo-input')
const todoButton=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-list')
const completed=document.querySelector('#completed');
const pending=document.querySelector('#pending');
const all=document.querySelector('#all');
const section=document.querySelector('.section');
const clearAll=document.querySelector('.clearAll');
const date=document.getElementById('date')
const month=document.getElementById('month')
const year=document.getElementById('year')



todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
completed.addEventListener('click',getsection);
pending.addEventListener('click',getsection);
all.addEventListener('click',getsection);
clearAll.addEventListener('click',clearItems)



function addTodo(event){
  event.preventDefault();
  if(todoInput.value!=''){
    section.style.display='flex';
    clearAll.style.visibility='visible';
  const todoDiv=document.createElement('div');
  todoDiv.classList.add('todo');

  const newTodo=document.createElement('li');
  newTodo.innerText=todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //correct button
  const correctbtn=document.createElement('button');
  correctbtn.innerHTML='<i class="fas fa-check"></i>';
  correctbtn.classList.add('complete-btn')
  todoDiv.appendChild(correctbtn)

  //delete button
  const deletebtn=document.createElement('button');
  deletebtn.innerHTML='<i class="fas fa-trash"></i>'
  deletebtn.classList.add('trash-btn')
  todoDiv.appendChild(deletebtn)

  todoList.appendChild(todoDiv)

  todoInput.value=''
  }
}

function deleteCheck(e){
  const item=e.target;
  if(item.classList[0]==='trash-btn'){
    const todo=item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend',function(){
      todo.remove();
    })
  }

  if(item.classList[0]==='complete-btn'){
    const todo=item.parentElement;
    todo.classList.toggle('completed')
  }
}

function getsection(e){
  const todos=todoList.childNodes;
  todos.forEach(function(todo){
    document.querySelector('span.active').classList.remove('active');
    let sec=e.target;
    switch(sec.id){
      case 'all':
        all.classList.add('active');
        todo.style.display="flex";
        break;
        
        case 'completed':
          completed.classList.add('active');
          if(todo.classList.contains('completed')){
            todo.style.display='flex';
          }
          else{
            todo.style.display="none";
          }
          break;
          
          case 'pending':
            pending.classList.add('active');
            if(!todo.classList.contains('completed')){
              todo.style.display='flex';
          }
          else{
            todo.style.display='none';
          }
          break;
    }
  })
  if(todos.length===0){
    document.querySelector('span.active').classList.remove('active');
    all.classList.add('active');
  }
}
//function to clear all elements
function clearItems(){
  todoList.innerHTML=''
  clearAll.style.visibility='hidden'
}

function getDate(){
  let dates=new Date();
  let d=dates.getDate();
  let m=dates.toLocaleString('default', { month: 'long' });
  let y=dates.getFullYear();
  date.innerText=d;
  month.innerText=m.slice(0,3);
  year.innerText=y;
}
getDate();