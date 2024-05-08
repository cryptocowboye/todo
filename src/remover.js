export default function remover (isEmpty) {
    const mainContent = document.querySelector("main");
    if (mainContent.hasChildNodes()) {
        const child = document.querySelector(".todo-container");
        mainContent.removeChild(child);
    }

    if (isEmpty) {
        const child = document.createElement("div");
        child.classList.add("todo-container");
        child.textContent = "Click or create a project!"

        child.style.fontSize = "100px";
        child.style.justifyContent = "center";
        child.style.alignItems = "center";

        mainContent.append(child)
    }
}