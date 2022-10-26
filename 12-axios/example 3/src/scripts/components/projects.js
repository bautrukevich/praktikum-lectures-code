import { getProjects } from "../utils/todoist-api-axios.js";
import { loadProjectTasks } from "./tasks.js";
import { showPreloader, hidePreloader, showError, getErrorText } from '../utils/utils'

const projectsContainer = document.querySelector(".projects");
const projectsTemplate = document.querySelector("#projects-template");
const projectTemplate = document.querySelector("#project-template");

//возвращает элемент проекта
const createProjectElement = (project) => {
  const projectElement = projectTemplate.content.cloneNode(true).children[0];
  const projectButton = projectElement.querySelector(".projects__project");
  projectButton.textContent = project.name;
  projectButton.dataset.id = project.id;
  projectButton.addEventListener("click", () => setActiveProject(project.id));
  return projectElement;
};

//задает активный проект
const setActiveProject = (projectId) => {
  const buttons = projectsContainer.querySelectorAll(".projects__project");
  buttons.forEach((el) =>
    el.classList.toggle("projects__project_active", el.dataset.id == projectId)
  );
  loadProjectTasks(projectId);
};

//создает список проектов
const createProjectsElement = (projects) => {
  const projectsElement = projectsTemplate.content.cloneNode(true);
  const projectsList = projectsElement.querySelector('.projects__list');
  projectsList.append(...projects.map(createProjectElement));
  return projectsElement;
};

//отображает список проектов на странице
const renderProjects = (projects) => {
  projectsContainer.replaceChildren(createProjectsElement(projects));
};

export const loadProjects = () => {
  showPreloader(projectsContainer);
  getProjects()
    .then((projects) => {
      renderProjects(projects.data)
      setActiveProject(projects.data[0].id);
    })
    .catch((err) => {
      showError(projectsContainer, getErrorText(err))
    })
    .finally(() => {
      hidePreloader(projectsContainer);
    })
};
