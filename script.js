// Empty array to store tasks
let tasks = [];


// Add Task Function
function addTask() {

    // Get input box value
    let input = document.getElementById("taskInput");

    let taskText = input.value;

    // If empty
    if(taskText == ""){
        alert("Please enter a task");
        return;
    }

    // Create task object
    let task = {
        name: taskText,
        completed: false
    };

    // Add task into array
    tasks.push(task);

    // Clear input
    input.value = "";

    // Show tasks again
    showTasks();
}


// Show Tasks Function
function showTasks(){

    let list = document.getElementById("taskList");

    // Clear old list
    list.innerHTML = "";

    // Loop through all tasks
    for(let i=0; i<tasks.length; i++){

        let li = document.createElement("li");

        // Task text
        let text = document.createElement("span");
        text.innerText = tasks[i].name;

        // If completed
        if(tasks[i].completed == true){
            text.classList.add("completed");
        }

        // Button area
        let buttons = document.createElement("div");
        buttons.className = "buttons";


        // Complete Button
        let doneBtn = document.createElement("button");
        doneBtn.innerText = "✓";
        doneBtn.className = "doneBtn";

        doneBtn.onclick = function(){
            tasks[i].completed = true;
            showTasks();
        };


        // Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.className = "deleteBtn";

        deleteBtn.onclick = function(){
            tasks.splice(i,1);
            showTasks();
        };


        // Add buttons
        buttons.appendChild(doneBtn);
        buttons.appendChild(deleteBtn);

        // Add text + buttons
        li.appendChild(text);
        li.appendChild(buttons);

        // Add li in ul
        list.appendChild(li);
    }

    updateStats();
}


// Update Stats
function updateStats(){

    let total = tasks.length;

    let done = 0;

    for(let i=0; i<tasks.length; i++){

        if(tasks[i].completed == true){
            done++;
        }
    }

    let pending = total - done;

    document.getElementById("total").innerText = total;
    document.getElementById("done").innerText = done;
    document.getElementById("pending").innerText = pending;
}