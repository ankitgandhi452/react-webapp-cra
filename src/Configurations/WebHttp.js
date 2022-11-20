import WebHttp from '@ot06/web-http'
import {
  AS_ENABLE_CRPTOGRAPHY,
  AS_API_KEY,
  AS_API_TIMEOUT,
  AS_API_DOMAIN
} from './env'

const asHttpConfig = {
  ENABLE_CRPTOGRAPHY: AS_ENABLE_CRPTOGRAPHY,
  API_KEY: AS_API_KEY,
  API_ROUTES: { _BASE: AS_API_DOMAIN }
}
const asHttpConstants = { TIMEOUT: AS_API_TIMEOUT }

const asHttp = new WebHttp(asHttpConfig, asHttpConstants)

export { asHttp }
