import urlJoin from 'url-join'
import config from '@/config'
import { jsonHeaders } from '@/api/utils'

export const register = async (
  data
) => {
  const response = await fetch(urlJoin(
    config.api.endpoints.org.register
  ), {
    method: 'POST',
    headers: jsonHeaders,
    data: JSON.stringify(data)
  })

  return response.json()
}

export const getTasks = async () => {
  const response = await fetch(urlJoin(
    config.api.backend,
    config.api.endpoints.org.tasks
  ), {
    method: 'GET',
    headers: jsonHeaders
  })

  return response.json()
}
