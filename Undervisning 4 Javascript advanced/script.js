const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const listContainer = document.querySelector("#list-container");


let tasks = [];

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

    renderPage();
})

const completeTaskInput = (task) => {
    const inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.checked = task.complete

    inputElement.addEventListener('change', (e) => {
        task.complete = e.target.checked;
        renderPage();
    })
    
    return inputElement
}


const buildPage = (tasksArr) => {
    listContainer.replaceChildren();
    tasksArr.forEach(task => {
        const taskContainer = document.createElement('div');

        const taskName = document.createElement('p');
        taskName.textContent = task.task

        const completeInput = completeTaskInput((task))

        taskContainer.append(taskName, completeInput);


        listContainer.append(taskContainer);
    })
};


const renderPage = () => {
    buildPage(tasks)
};

renderPage();


// tasks.filter()

