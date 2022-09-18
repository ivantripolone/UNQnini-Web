import { AxiosRequestConfig, default as Axios } from 'axios'

const apiURL = 'http://localhost:8080'

const genericService = (serviceBaseRoute: string) => {
  return {
    get: <T>(endpoint: string, config: AxiosRequestConfig = {}) =>
      Axios.get<T>(apiURL + serviceBaseRoute + endpoint, config).then(
        (response) => response.data
      ),
  }
}

export default genericService