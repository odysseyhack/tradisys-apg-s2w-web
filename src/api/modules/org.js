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
