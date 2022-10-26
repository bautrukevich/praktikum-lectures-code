import axios from 'axios'

const todoistApiConfig = {
  baseURL: 'https://api.todoist.com/rest/v1',
  headers: {
    'Authorization': 'Bearer 879a9f700821bb8c08fc8f092f7f1af0f9c0ed05',
    'Content-Type': 'application/json'
  }
}

const todoistApi = axios.create(todoistApiConfig)

todoistApi.interceptors.request.use((config) => {
  console.info(`${config.method.toUpperCase()}: ${config.baseURL}${config.url}`)

  return config
})

export const getProjects = () => {
  return todoistApi.get('/projects')
}

export const getProjectTasks = (projectId) => {
  return todoistApi.get('/tasks', {
    params: {
      project_id: projectId,
    }
  })
}

export const addTask = (taskText, projectId) => {
  return todoistApi.post('/tasks', {
    data: {
      content: taskText,
      project_id: projectId
    }
  })
}

export const deleteTask = (taskId) => {
  return todoistApi.delete(`/tasks/${taskId}`)
}
