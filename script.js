/////// Code it yourself :)
let addButton = $("#btnAdd").eq(0)
let taskTextBox = $("input").first()[0];
let tasksBox = $(".tasksBox").eq(0);



addButton.click(function(){
        let taskDive = $("<div></div>");
        let container = $("<div></div>");
        taskDive.addClass("task");
        taskDive[0].innerText=taskTextBox.value;
        container.append(taskDive);
        tasksBox.append(container);
        console.log(taskTextBox.value);

        let taskDone = $("<button>DONE</button>");
        taskDone.addClass("done");
        taskDone.click(function(){
            $(this).parent().addClass("TaskDone");
            
        });
        container.append(taskDone);
        tasksBox.append(container);

        let deleting = $("<button>DELETE</button>");
        deleting.addClass("delete");
        deleting.click(function(){
            $(this).parent().remove();
            
        });
        container.append(deleting);
        tasksBox.append(container);        


});


