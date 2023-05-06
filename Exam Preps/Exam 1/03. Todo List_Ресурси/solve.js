// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const inputTitle = document.getElementById('title');
    const btnAdd = document.getElementById('add-button');
    const btnLoadAll = document.getElementById('load-button');
    const ulContainer = document.getElementById('todo-list');
    let tasksObj = {};

    btnLoadAll.addEventListener('click', loadAllHandler);
    btnAdd.addEventListener('click', addHandler);

    async function loadAllHandler(event) {
        if (event) {
            event.preventDefault();
        }

        ulContainer.innerHTML = '';
        try {
            let res = await fetch(BASE_URL);
            let data = await res.json();

            let tasksObj = Object.values(data);
            for (const task of tasksObj) {
                tasksObj.name = task.name;
                tasksObj._id = task._id;

                let li = document.createElement('li');
                li.setAttribute('id', task._id);
                let span = document.createElement('span');
                let btnRemove = document.createElement('button');
                let btnEdit = document.createElement('button');

                span.textContent = task.name;
                btnRemove.textContent = 'Remove';
                btnEdit.textContent = 'Edit';

                btnRemove.addEventListener('click', removeHandler);
                btnEdit.addEventListener('click', editHandler);

                ulContainer.appendChild(li);
                li.appendChild(span);
                li.appendChild(btnRemove);
                li.appendChild(btnEdit);
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function addHandler(event) {
        if (event) {
            event.preventDefault();
        }

        try {
            let currInput = inputTitle.value;
            let httpHeaders = {
                method: 'POST',
                body: JSON.stringify({
                    name: currInput
                })
            };

            let res = await fetch(BASE_URL, httpHeaders);
            let data = await res.json();

            loadAllHandler();
            inputTitle.value = '';
        } catch (err) {
            console.error(err);
        }

    }

    async function removeHandler(e) {
         try {
            let id = e.currentTarget.parentNode.id;
            let httpHeaders = {
                method: 'DELETE'
            }

            let res = await fetch(`${BASE_URL}${id}`, httpHeaders);
            let data = await res.json();

            loadAllHandler();
        } catch (err) {
            console.error(err);
        }
    }
    
    async function editHandler(e) {
        try {
            let li = e.currentTarget.parentNode;
            let [span, btnDelete, btnEdit] = Array.from(li.children);
            
            let inputEdited = document.createElement('input');
            let btnSubmit = document.createElement('button');

            inputEdited.value = span.textContent;
            btnSubmit.textContent = 'Submit';
            btnSubmit.addEventListener('click', submitHandler);

            li.prepend(inputEdited);
            li.appendChild(btnSubmit);

            span.remove();
            btnEdit.remove();
        } catch (err) {
            console.log(err)
        }
    }

    async function submitHandler(e) {
        try {
            let li = e.currentTarget.parentNode;
            let id = li.id;
            let [input] = Array.from(li.children);
            let httpHeaders = {
                method: 'PATCH',
                body: JSON.stringify({
                    name: input.value
                })
            }

            let res = await fetch(`${BASE_URL}${id}`, httpHeaders);
            let data = await res.json();
            
            loadAllHandler();
        } catch (err) {
            console.error(err);
        }
    }

}

attachEvents();
