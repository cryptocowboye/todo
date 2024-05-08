import css from './styles/style.css'
import List from './List'
import storageChecker from './storageChecker'
import indexChecker from './indexChecker'
import modals from './modals'
import remover from './remover'




const storageArr = storageChecker(JSON.parse(localStorage.getItem("appStorage")));
const indexNum = indexChecker(JSON.parse(localStorage.getItem("index")));
const listOfProjects = new List(storageArr.projects, indexNum);


function page () {
    const projectForm = document.querySelector(".project-form > form");
    const projectTitle = document.querySelector("#project-title");



    projectForm.addEventListener("submit", (e) => {
        const project = listOfProjects.createProject(projectTitle.value)
        listOfProjects.pushProject(project)
        listOfProjects.addProjectElement(project)
        localStorage.setItem("appStorage", JSON.stringify(listOfProjects))
        e.preventDefault()
    })

    modals()

    if (listOfProjects.projects.length > 0) {
        listOfProjects.setIndex();
        
        listOfProjects.projects.forEach((project) => {
            const reconstructedProj = listOfProjects.reconstructProject(project);
            listOfProjects.addProjectElement(reconstructedProj);
            remover()
        })
    }

    remover(true)
}

page()