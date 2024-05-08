export default function modals () {
    const createNewProjBtn = document.querySelector("#create-new-project");
    const createNewCloseBtn = document.querySelector("#close-project-modal");
    const projectDialog = document.querySelector(".project-form");

    createNewProjBtn.addEventListener("click", () => projectDialog.show());
    createNewCloseBtn.addEventListener("click", () => projectDialog.close());
    
}