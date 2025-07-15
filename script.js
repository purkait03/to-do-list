const taskInput = $("#taskInput")
const addBtn = $("#addBtn")
const taskList = $("#taskList")


addBtn.click(function (){
    var taskText = taskInput.val()
    var deleteBtn = $("<button>❌</button>")
    deleteBtn.on("click", function(){
    $(this).parent().remove()
        })
    const checkBox = $("<input>").attr("type","checkbox")

    if (taskText !== '') {
        var li = $("<li></li>").text(`${taskText}`)
        taskList.append(li)
        li.append(deleteBtn)
        li.prepend(checkBox)
    }
    taskInput.val("")
})
