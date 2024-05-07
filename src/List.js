import Project from "./Project"
import todosContruction from "./todosConstruction"
import remover from "./remover"

export default class List {
    constructor(projects=[], index) {
        this.projects = projects
        this.index = index
    }

    pushProject(projectObj) {
        this.projects.push(projectObj)
        this.index++
    }

    findProject(id) {
        return this.projects.find(item => item.id === id)
    }

    findProjectByIndex(id) {
        return this.projects.findIndex(item => item.id === id)
    }

    replaceProject(obj) {
        const projectObjIndex = this.findProjectByIndex(obj.id)
        this.projects[projectObjIndex] = obj
    }

    removeProject(obj) {
        const projectObj= this.findProject(obj.id)
        this.projects.splice(this.projects.indexOf(projectObj), 1)
    }

    createProject(name) {
        return new Project(name, this.index)
    }

    reconstructProject(obj) {
        const project = new Project(obj.name, this.index);
        project.setProject(obj);
        return project
    }
    
    addProjectElement(obj) {
        const parent = document.querySelector(".projects-container");
        const projectContainer = document.createElement("div");
        const projectTitle = document.createElement("div");
        const removeBtn = document.createElement("button");

        projectTitle.textContent = obj.name
        removeBtn.textContent = "Remove"

        projectContainer.classList.add("project-container");
        projectTitle.classList.add("project-title");

        projectContainer.dataset.name = obj.name
        projectContainer.dataset.index = obj.id

        projectTitle.addEventListener("click", () => {
            remover()
            console.log(`You clicked ${obj.name} and it has the index of ${obj.id}!`);
            const elements = todosContruction(obj, this); // test
            const mainElement = document.querySelector("main");
            mainElement.append(elements);
        })

        removeBtn.addEventListener("click", () => {
            this.removeProject(obj)
            localStorage.setItem("appStorage", JSON.stringify(this))
            projectContainer.remove()
            remover()
        })

        projectContainer.appendChild(projectTitle);
        projectContainer.appendChild(removeBtn);
        parent.appendChild(projectContainer);
    }

    setIndex() {
        this.index = (this.projects[this.projects.length - 1].id + 1);
    }

}