import Todo from "./Todo";
import editBtnClick from "./editBtnClick";

export default class Project {
    constructor(name, id) {
        this.name = name
        this.id = id
        this.toDosArray = []
        this.todoIndex = 0

    }

    addToDo(toDoObj) {
        this.toDosArray.push(toDoObj);
        this.todoIndex++
    }
    
    findToDo(id) {
        return this.toDosArray.find(item => item.index === id)
    }

    findToDoByIndex(id) {
        return this.toDosArray.findIndex(item => item.index === id);
    }

    removeToDo(obj) {
        const projectIndex = this.findToDoByIndex(obj.index)
        this.toDosArray.splice(projectIndex, 1)
    }

    createToDo(title, desc, date, priority, index) {
        return new Todo(title, desc, date, priority, index)
    }

    replaceToDo(obj) {
        const todoObjIndex = this.findToDoByIndex(obj.index)
        this.toDosArray[todoObjIndex] = obj
    }

    createToDoElement(toDoObj, thisObj) {
        const todoCard = document.createElement("div")
        const todoTitle = document.createElement("div")
        const todoDesc = document.createElement("div")
        const todoDate = document.createElement("div")
        const todoPriority = document.createElement("div")
        const btnContainer = document.createElement("div");
        const removeBtn = document.createElement("button")
        const editBtn = document.createElement("button");
        const dialog = editBtnClick(this, thisObj, todoTitle, todoDesc, todoDate, todoPriority, toDoObj)

        todoCard.classList.add("todo-card")

        editBtn.classList.add("edit-button");
        removeBtn.classList.add("card-remove-button");

        btnContainer.classList.add("button-container");

        todoCard.dataset.title = toDoObj.title
        todoCard.dataset.desc = toDoObj.desc
        todoCard.dataset.date = toDoObj.date
        todoCard.dataset.priority = toDoObj.priority
        todoCard.dataset.index = toDoObj.index

        todoTitle.textContent = toDoObj.title
        todoDesc.textContent = toDoObj.desc
        todoDate.textContent = toDoObj.date
        todoPriority.textContent = toDoObj.priority
        editBtn.textContent = "Edit"
        removeBtn.textContent = "Remove"

        removeBtn.addEventListener("click", () => {
            this.removeToDo(toDoObj);
            localStorage.setItem("appStorage", JSON.stringify(thisObj));

            todoCard.remove();
        })

        editBtn.addEventListener("click", () => {
            dialog.show()
        })

        btnContainer.append(editBtn, dialog, removeBtn);

        todoCard.appendChild(todoTitle)
        todoCard.appendChild(todoDesc)
        todoCard.appendChild(todoDate)
        todoCard.appendChild(todoPriority)
        todoCard.append(btnContainer);

        return todoCard


    }

    setProject(obj) {
        this.name = obj.name
        this.id = obj.id
        this.toDosArray = obj.toDosArray
        this.todoIndex = obj.todoIndex
    }

    setTodos(arr) {
        this.toDosArray = arr
    }
}