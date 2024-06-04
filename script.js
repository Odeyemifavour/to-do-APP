const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const completedTask = document.getElementById("completedTask");
const remainingTask = document.getElementById("remainingTask");
const totalTask = document.getElementById("totalTask");
function addTask(){
    if(inputBox.value=== ''){
        alert("Task cannot be empty!")
    }
    else{
        let  li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10006";
        li.appendChild(span);
        taskUpdate();
    }
        inputBox.value="";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        taskUpdate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        taskUpdate();
    }
}

)
let completed;
let remaining;
let totalTaskNum;
function taskUpdate(){
    const tasks = listContainer.getElementsByTagName("li");
    completed = 0;
    remaining = 0;
    totalTaskNum = 0;
    for(let task of tasks){
        if (task.classList.contains("checked")){
            completed++;
        }
        else{
            remaining++;
        }
    }
    totalTaskNum = completed + remaining;
    completedTask.innerText = completed;
    remainingTask.innerText = remaining;
    totalTask.innerText = totalTaskNum;
    taskCounter.style.display = "block";
}