const lis = document.querySelectorAll('#notearea li');
const spans = document.querySelectorAll('#notearea span');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');
const noteArea = document.getElementById('notearea');

// Used event delegation so that dynamic content would still work
ul.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-item')) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains('li-item')) {
        e.target.classList.toggle('complete');
    }
})

// Pressing enter while in input will allow you to add list item to the todo
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        let toDo = input.value;
        let li = document.createElement('li');
        li.classList.add('li-item');
        let textNode = document.createTextNode(toDo);
        li.innerHTML = '<span class="remove-item"><i class="fas fa-trash"></i></span>';
        li.appendChild(textNode);
        ul.appendChild(li);
        input.value = '';
    }
})