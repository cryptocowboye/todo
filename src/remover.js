export default function remover () {
    const mainContent = document.querySelector("main");
    if (mainContent.hasChildNodes()) {
        const child = document.querySelector(".todo-container");
        mainContent.removeChild(child);
    }
}