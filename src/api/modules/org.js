import urlJoin from 'url-join'
import config from '@/config'
import { jsonHeaders } from '@/api/utils'

export const register = async (
  data
) => {
  const response = await fetch(urlJoin(
    config.api.backend,
    config.api.endpoints.org.register
  ), {
    method: 'POST',
    headers: jsonHeaders,
    data: JSON.stringify(data)
  })

  return response.json()
}

export const getAllTasks = async () => {
  const response = await fetch(urlJoin(
    config.api.backend,
    config.api.endpoints.org.tasks
  ), {
    method: 'GET',
    headers: jsonHeaders
  })

  return response.json()
}

export const getTasksByOrgId = async (id) => {
  const response = await fetch(urlJoin(
    config.api.backend,
    config.api.endpoints.org.tasks,
    id
  ), {
    method: 'GET',
    headers: jsonHeaders
  })

  return response.json()
}

export const createTaskById = async (task) => {
  const response = await fetch(urlJoin(
    config.api.backend,
    config.api.endpoints.org.tasks
  ), {
    method: 'POST',
    headers: jsonHeaders,
    data: JSON.stringify(task)
  })

  return response.json()
}

export const closeTaskById = async (id) => {
  const response = await fetch(urlJoin(
    config.api.backend,
    config.api.endpoints.org.tasks,
    id
  ), {
    method: 'PUT',
    headers: jsonHeaders
  })

  return response.json()
}

export const removeTaskById = async (id) => {
  const response = await fetch(urlJoin(
    config.api.backend,
    config.api.endpoints.org.tasks,
    id
  ), {
    method: 'DELETE',
    headers: jsonHeaders
  })

  return response.json()
}
