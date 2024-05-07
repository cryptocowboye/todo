import Project from "./Project"

export default function storageChecker (arr) {
    if (arr === null) {
        const defaultProj = new Project("Default Project", -1);
        const createdTodo1 = defaultProj.createToDo("todo1", "Write a description here", "2020-1-1", "red", defaultProj.todoIndex);
        defaultProj.addToDo(createdTodo1);
        const createdTodo2 = defaultProj.createToDo("todo2", "Write a description here", "2020-1-2", "green", defaultProj.todoIndex);
        defaultProj.addToDo(createdTodo2);

        arr = {projects: [defaultProj]}
    }

    return arr
}