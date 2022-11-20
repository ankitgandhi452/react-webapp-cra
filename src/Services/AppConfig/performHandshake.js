import { asHttp } from 'src/Configurations/WebHttp'
import { AS_HANDSHAKE_URL } from './SERVICE_URLS'

const performHandshake = async () => {
  const options = {
    url: AS_HANDSHAKE_URL,
    method: 'GET'
  }

  try {
    const response = await asHttp.request(options)
    const { data: body } = response
    const { data } = body
    const { publicKey } = data
    asHttp.set('PUBLIC_KEY', publicKey)
    return publicKey
  } catch (err) {
    throw err
  }
}

export default performHandshake
