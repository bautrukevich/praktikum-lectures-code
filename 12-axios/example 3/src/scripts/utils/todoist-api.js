const todoistApiConfig = {
  baseUrl: 'https://api.todoist.com/rest/v1',
  headers: {
    'Authorization': 'Bearer 879a9f700821bb8c08fc8f092f7f1af0f9c0ed05',
    'Content-Type': 'application/json'
  }
}

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`ошибка ${res.status}`);
}

export const getProjects = () => {
  return fetch(`${todoistApiConfig.baseUrl}/projects`, {
    headers: todoistApiConfig.headers
  }).then(getResponse)
}

export const getProjectTasks = (projectId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks?project_id=${projectId}`, {
    headers: todoistApiConfig.headers
  }).then(getResponse)
}

export const addTask = (taskText, projectId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks`, {
    method: 'POST',
    headers: todoistApiConfig.headers,
    body: JSON.stringify({
      content: taskText,
      project_id: projectId
    })
  }).then(getResponse)
}

export const deleteTask = (taskId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: todoistApiConfig.headers,
  }).then((res) => {
    if (!res.ok) return Promise.reject(`ошибка ${res.status}`);
  })
}
