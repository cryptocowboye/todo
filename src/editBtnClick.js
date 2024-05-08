import Todo from "./Todo";

export default function editBtnClick (projObj, thisObj, title, description, date, priority, todoObj) {
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    const editCloseModalBtn = document.createElement("button");
    const submitBtn = document.createElement("button");

    const label1 = document.createElement("label");
    const label2 = document.createElement("label");
    const label3 = document.createElement("label");
    const label4 = document.createElement("label");

    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const input3 = document.createElement("input");

    const select = document.createElement("select"); 
    const option1 = document.createElement("option"); 
    const option2 = document.createElement("option"); 
    const option3 = document.createElement("option"); 
    const option4 = document.createElement("option"); 
    const option5 = document.createElement("option"); 
    const option6 = document.createElement("option"); 

    dialog.id = "todo-form-edit";
    editCloseModalBtn.id = "close-todo-modal-edit";

    submitBtn.setAttribute("type", "submit");
    submitBtn.id = "todo-submit-button-edit";

    input1.setAttribute("type", "text");
    input2.setAttribute("type", "text");
    input3.setAttribute("type", "date");

    label1.htmlFor = "todo-title-edit";
    label2.htmlFor = "todo-description-edit";
    label3.htmlFor = "todo-date-edit";
    label4.htmlFor = "todo-priority-edit";

    label1.textContent = "Title: "
    label2.textContent = "Description: ";
    label3.textContent = "Due Date: ";
    label4.textContent = "Priority: ";

    input1.id = "todo-title-edit";
    input2.id = "todo-description-edit";
    input3.id = "todo-date-edit";

    select.name = "priority-colors-edit";
    select.id = "todo-priority-edit";

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

    editCloseModalBtn.textContent = "Close";
    submitBtn.textContent = "Submit";

    editCloseModalBtn.addEventListener("click", () => dialog.close());

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

    form.append(p1, p2, p3, p4, p5);

    dialog.append(form, editCloseModalBtn);


    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const editedToDo = projObj.createToDo(input1.value, input2.value, input3.value, select.value, todoObj.index);
        projObj.replaceToDo(editedToDo);

        thisObj.replaceProject(projObj);

        title.textContent = input1.value
        description.textContent = input2.value
        date.textContent = input3.value
        priority.textContent = select.value

        localStorage.setItem("appStorage", JSON.stringify(thisObj));

        dialog.close();
    })

    return dialog
}