let inputBox = document.getElementById("input-box");
let addBtn = document.getElementById("add-btn");

let tasks = new Array();

addBtn.addEventListener("click", () => {
    let error = document.getElementById("err");
    if (inputBox.value.length === 0) {
        error.style.color = "red";
        error.innerText = "*cannot insert empty task";
        inputBox.style.borderBottomColor = "red";
        addBtn.style.borderBottomColor = "red";
        addBtn.style.color = "red";
    } else {
        error.innerText = "";
        inputBox.style.borderBottomColor = "rgb(0, 255, 85)";
        addBtn.style.borderBottomColor = "rgb(0, 255, 85)";
        addBtn.style.color = "rgb(64, 85, 47)";
        addTask(inputBox.value);
        inputBox.value = "";
        taskView(tasks);
        taskCounter(tasks);
    }
});

const addTask = (task) => {
    tasks.push(task);
};
let todoTasks = document.querySelector(".todo-tasks");
const taskView = (tasks) => {
    todoTasks.innerHTML = "";
    let inpStr = "";
    tasks.forEach((task, index) => {
        inpStr += `<p class="task">${task}<span id="${index}" onclick="deleteTask(this)"><i class="fas fa-trash"></i></span></p>`;
    });
    todoTasks.innerHTML = inpStr;
};

const taskCounter = (tasks) => {
    let todoSummary = document.querySelector(".todo-summary");

    let summary = `<p>You have ${tasks.length || "no"} task${
        tasks.length === 1 ? "" : "s"
    } to do`;
    todoSummary.innerHTML = summary;
};

function deleteTask(thisObj) {
    let itemId = thisObj.id;
    tasks.splice(itemId, 1);
    taskView(tasks);
    taskCounter(tasks);
}
