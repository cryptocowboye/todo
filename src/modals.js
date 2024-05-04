export default function modals () {
    const createNewProjBtn = document.querySelector("#create-new-project");
    const createNewCloseBtn = document.querySelector("#close-project-modal");
    const projectDialog = document.querySelector(".project-form");

    const createTodoBtn = document.querySelector(".create-todo");
    const closeTodoBtn = document.querySelector("#close-todo-modal");
    const todoDialog = document.querySelector("#todo-form");

    createNewProjBtn.addEventListener("click", () => projectDialog.show());
    createNewCloseBtn.addEventListener("click", () => projectDialog.close());
    
    createTodoBtn.addEventListener("click", () => todoDialog.show());
    closeTodoBtn.addEventListener("click", () => todoDialog.close());
}