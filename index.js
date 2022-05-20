document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("add-btn").addEventListener("click", function(){
        var newTask = document.getElementById("task-name").value;
        var newTaskString = newTask + "  " + document.getElementById("task-date").value;
        var todoList = document.getElementById("uncompleted");
        var newListItem = document.createElement("li");
        newListItem.innerHTML = newTaskString;
        todoList.appendChild(newListItem);
        newListItem.id = "todo-item";
        var newButton = document.createElement("button");
        newButton.innerHTML = "";
        newListItem.appendChild(newButton);
        newButton.classList.add("btn", "btn-success");
        newButton.id = "done-btn";
        var newSpan = document.createElement("span");
        newSpan.innerHTML = " Done";
        newButton.appendChild(newSpan);
        newSpan.classList.add("glyphicon", "glyphicon-ok");
        document.getElementById("task-name").value = "";
        document.getElementById("task-date").value = "";
    });
    done_btn=document.getElementById("done-btn");
    document.getElementById("done-btn").addEventListener("click", function(){
        var doneList = document.getElementById("completed");
        console.log(doneList);
        var $completedTask = done_btn.parentNode.innerText.slice(0,-4);
        console.log($completedTask);
        li=document.createElement("li")
        li.innerHTML = $completedTask;
        li.id = "completed-li";
        btn=document.createElement("button");
        li.appendChild(btn);
        btn.classList.add("btn-danger");
        btn.id="remove-btn";
        span=document.createElement("span");
        span.innerHTML = " Remove";
        btn.appendChild(span);
        span.classList.add("glyphicon","glyphicon-remove");
        console.log(li);
        doneList.appendChild(li);
        done_btn.parentNode.remove();
    });
});