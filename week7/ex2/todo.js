let toDoList = [];
let toDoListOrigin;

function addTask() {
    let activity = document.getElementById("task").value
    toDoList.push(activity)
    showList()
    document.getElementById("task").value = ""
}

function findTask() {
    let taskLocate = document.getElementById("task")
    let locate = taskLocate.value

    toDoListOrigin = [...toDoList]

    toDoList = toDoList.filter((t) => {
        return t.toLowerCase().includes(locate.toLowerCase())
    })

    showList()

    document.getElementById("task").value = ""

    toDoList = [...toDoListOrigin]
}

function clearSearch() {
    toDoList = [...toDoListOrigin]

    showList()

    document.getElementById("task").value = ""
}

function showList() {
    const listSection = document.getElementById("list")
    listSection.innerHTML = ""

    for (let index = 0; index < toDoList.length; index++) {
        listSection.innerHTML += `
        <div class="tasks">
            <p>${toDoList[index]}</p>
        </div>
        `
    }
}