export default class Todo {
    constructor(title, desc, date, priority, index) {
        this.title = title
        this.desc = desc
        this.date = date
        this.priority = priority
        this.index = index
    }

    createToDoElement() {
            const todoCard = document.createElement("div")
            const todoTitle = document.createElement("div")
            const todoDesc = document.createElement("div")
            const todoDate = document.createElement("div")
            const todoPriority = document.createElement("div")
            const removeBtn = document.createElement("button")

            todoCard.classList.add("todo-card")

            todoCard.dataset.title = this.title
            todoCard.dataset.desc = this.desc
            todoCard.dataset.date = this.date
            todoCard.dataset.priority = this.priority
            todoCard.dataset.index = this.index

            todoTitle.textContent = this.title
            todoDesc.textContent = this.desc
            todoDate.textContent = this.date
            todoPriority.textContent = this.priority
            removeBtn.textContent = "Remove"

            todoCard.appendChild(todoTitle)
            todoCard.appendChild(todoDesc)
            todoCard.appendChild(todoDate)
            todoCard.appendChild(todoPriority)
            todoCard.appendChild(removeBtn)

            return todoCard


    }

    retrieveToDo(eTarget) {
        const el = {
            title: eTarget.dataset.title,
            desc: eTarget.dataset.desc,
            date: eTarget.dataset.date,
            priority: eTarget.dataset.priority
        }

        return el
    }
}