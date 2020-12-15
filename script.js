
window.onload=function(){
const form=document.getElementById("form");
const f1=document.querySelector('#form');
const input=document.getElementById('input');
const todos =document.getElementById('todos');
const todosUL=document.getElementById('todos');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo();
    }
);

function addTodo(){
    const todoText=input.value;
    if(todoText){
        const todoEl=document.createElement('li');
        todoEl.innerText=todoText;
        
        todoEl.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            todoEl.remove();
        })

        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed');
        updateL5();

        })
        todos.appendChild(todoEl);
        input.value='';
        updateL5();
    }
}
function updateL5(){
    const todosEl=document.querySelectorAll('li');
    const todos=[];
    todosEl.forEach(noteEl=>{
        notes.push({text:noteEl.innerText,
                    completed:noteEl.classList.contains('completed')})
    })
}
localStorage.setItem('todos',JSON.stringify(todos));
}