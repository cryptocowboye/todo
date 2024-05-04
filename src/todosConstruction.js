export default function todosContruction (obj, thisObj) /* testing thisObj */ {
    const todoContainer = document.createElement("div"); // class todo-container
    const todoCreationContain = document.createElement("div"); // class todo-creation-container
    const createToDosBtn = document.createElement("button"); // class create-todo
    const todoFormDialog = document.createElement("dialog"); // id todo-form
    const formElement = document.createElement("form"); // no attributes
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    const closeModalBtn = document.createElement("button"); // id close-todo-modal
    const todosArea = document.createElement("div"); // class todos-area. Also, don't have to edit children.

    const label1 = document.createElement("label"); // for todo-title
    const label2 = document.createElement("label"); // for todo-description
    const label3 = document.createElement("label"); // for todo-date
    const label4 = document.createElement("label"); // for todo-priority

    const input1 = document.createElement("input"); // id todo-title
    const input2 = document.createElement("input"); // id todo-description
    const input3 = document.createElement("input"); // id todo-date

    const select = document.createElement("select"); // name=priority-colors id=todo-priority
    const option1 = document.createElement("option"); // value none text content ---Please choose an option ---
    const option2 = document.createElement("option"); // value red
    const option3 = document.createElement("option"); // value yellow
    const option4 = document.createElement("option"); // value orange
    const option5 = document.createElement("option"); // value green
    const option6 = document.createElement("option"); // value gray

    const submitBtn = document.createElement("button"); // type submit id todo-submit-button

    todoContainer.classList.add("todo-container");
    todoCreationContain.classList.add("todo-creation-container");
    createToDosBtn.classList.add("create-todo");
    todoFormDialog.id = "todo-form";
    closeModalBtn.id = "close-todo-modal";
    todosArea.classList.add("todos-area");

    label1.htmlFor = "todo-title";
    label2.htmlFor = "todo-description";
    label3.htmlFor = "todo-date";
    label4.htmlFor = "todo-priority";

    label1.textContent = "Title: ";
    label2.textContent = "Description: ";
    label3.textContent = "Due Date: ";
    label4.textContent = "Priority: ";

    closeModalBtn.textContent = "Close";
    submitBtn.textContent = "Submit";
    createToDosBtn.textContent = "Create To-Do";

    submitBtn.setAttribute("type", "submit");
    submitBtn.id = "todo-submit-button";

    input1.id = "todo-title";
    input2.id = "todo-description";
    input3.id = "todo-date";

    input1.setAttribute("type", "text");
    input2.setAttribute("type", "text");
    input3.setAttribute("type", "date");

    select.name = "priority-colors";
    select.id = "todo-priority";

    option1.textContent = "---Please choose an option---";
    option2.value = "red";
    option2.textContent = "Red";
    option3.value = "yellow";
    option3.textContent = "Yellow";
    option4.value = "orange";
    option4.textContent = "Orange";
    option5.value = "green";
    option5.textContent = "Green";
    option6.value = "gray";
    option6.textContent = "Gray";

    createToDosBtn.addEventListener("click", () => todoFormDialog.show());
    closeModalBtn.addEventListener("click", () => todoFormDialog.close());

    formElement.addEventListener("submit", (e) => {
        const todoTitle = document.querySelector("#todo-title");
        const todoDesc = document.querySelector("#todo-description");
        const todoDate = document.querySelector("#todo-date");
        const todoPriority = document.querySelector("#todo-priority");

        const newTodo = obj.createToDo(todoTitle.value, todoDesc.value, todoDate.value, todoPriority.value, obj.todoIndex);
        obj.addToDo(newTodo);

        thisObj.replaceProject(obj);

        const todoElement = obj.createToDoElement(newTodo, thisObj);
        todosArea.append(todoElement);

        localStorage.setItem("appStorage", JSON.stringify(thisObj));
        
        console.log(thisObj);
        e.preventDefault();
    })

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);

    p1.append(label1, input1);
    p2.append(label2, input2);
    p3.append(label3, input3);
    p4.append(label4, select);
    p5.append(submitBtn);
    
    formElement.append(p1, p2, p3, p4, p5);

    todoFormDialog.append(formElement, closeModalBtn);

    todoCreationContain.append(createToDosBtn, todoFormDialog);

    todoContainer.append(todoCreationContain, todosArea);

    if (obj.toDosArray.length > 0 && !(todosArea.hasChildNodes())) {
        obj.toDosArray.forEach((todo) => {
            const todoElement = obj.createToDoElement(todo, thisObj)
            todosArea.append(todoElement)
        })
    }

    return todoContainer;

}