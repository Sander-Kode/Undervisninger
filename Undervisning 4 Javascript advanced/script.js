const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const listContainer = document.querySelector("#list-container");
const showCompletedEl = document.querySelector("#show-completed")


let tasks = [];
let filters = {showCompleted: false};

const saveTasksToStorage = () => localStorage.setItem('tasks', JSON.stringify(tasks))

showCompletedEl.addEventListener('change', (e) => {

    filters.showCompleted = e.target.checked;
    renderPage();

});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    const userInput = formData.get('task-input');

    if (!userInput) {
        return alert("User input cannot be empty")
    }

    tasks.push({
        timestamp: new Date(),
        task: userInput,
        complete: false
    })

    saveTasksToStorage();

    renderPage();
})

const completeTaskInput = (task) => {
    const inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.checked = task.complete

    inputElement.addEventListener('change', (e) => {
        task.complete = e.target.checked;
        saveTasksToStorage();
        renderPage();
    })
    
    return inputElement
}

const deleteTaskButton = (task) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', () => {
        const taskIndex = tasks.indexOf(task);
        if (taskIndex >= 0) {
            tasks.splice(taskIndex, 1)
        }
        saveTasksToStorage();
        renderPage();
    })

    return deleteBtn;
}

const editTaskButton = (task, taskName) => {
    const editTaskBtn = document.createElement('button');
    editTaskBtn.classList.add('edit-button');
    editTaskBtn.textContent = 'edit'

    editTaskBtn.addEventListener('click', () => {
        taskName.readOnly = !taskName.readOnly;
        editTaskBtn.textContent = taskName.readOnly ? "Edit" : "Save"; 
        task.task = taskName.value;

        saveTasksToStorage();



    });



    return editTaskBtn
}


const buildPage = (tasksArr) => {
    listContainer.replaceChildren();
    tasksArr.forEach(task => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        task.complete ? taskContainer.classList.add('completed') : taskContainer.classList.remove('completed');

        const taskName = document.createElement('input');
        taskName.classList.add('task-name');
        taskName.readOnly = true;
        taskName.value = task.task

        const completeInput = completeTaskInput((task))
        const deleteTaskBtn = deleteTaskButton(task)
        const editTaskBtn = editTaskButton(task, taskName)

        taskContainer.append(taskName, completeInput, editTaskBtn, deleteTaskBtn);


        listContainer.append(taskContainer);
    })
};


const filterArr = (tasksArr) => {
    return tasksArr.filter(task => filters.showCompleted | !task.complete)
}

const renderPage = () => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
        tasks = JSON.parse(storedTasks)
    }
    buildPage(filterArr(tasks))
};

renderPage();


// tasks.filter()

