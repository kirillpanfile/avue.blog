import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  isAxiosError,
} from 'axios'
import { notify } from '@kyvg/vue3-notification'
import HttpStatusCodes from './common/HttpStatusCodes'

const baseURL = import.meta.env.VITE_API_URL

const validateBaseUrl = (url: unknown): url is string => {
  if (url && typeof url === 'string') return true
  return false
}

const onResponseSuccess = (response: AxiosResponse<unknown>): AxiosResponse => {
  return response
}

const onResponseError = (error: AxiosError<unknown>): Promise<never> => {
  const genNotify = (status: number, error: AxiosError): void => {
    notify({
      title: `#${status} Error Occurred`,
      text: error?.response?.statusText,
      type: 'error',
    })
  }

  if (!isAxiosError(error)) {
    genNotify(0, error)
    return Promise.reject(error)
  }

  const httpStatus = error?.response?.status

  if (httpStatus === HttpStatusCodes.UNAUTHORIZED) {
    genNotify(HttpStatusCodes.UNAUTHORIZED, error)
  }

  if (httpStatus === HttpStatusCodes.FORBIDDEN) {
    genNotify(HttpStatusCodes.FORBIDDEN, error)
  }

  if (httpStatus === HttpStatusCodes.NOT_FOUND) {
    genNotify(HttpStatusCodes.NOT_FOUND, error)
  }

  if (httpStatus === HttpStatusCodes.UNPROCESSABLE_ENTITY) {
    genNotify(HttpStatusCodes.UNPROCESSABLE_ENTITY, error)
  }

  return Promise.reject(error.response)
}

class ApiClient {
  axios: AxiosInstance

  constructor() {
    if (!validateBaseUrl(baseURL)) {
      throw new Error('No base url provided')
    }

    const axiosInstance = axios.create({
      baseURL,
      // withCredentials: true,
      // timeout: 5000,
    })
    // axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

    // axiosInstance.defaults.headers.get.Accepts = 'application/json'
    axiosInstance.interceptors.response.use(onResponseSuccess, onResponseError)

    this.axios = axiosInstance
  }

  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axios.get(url, config)
    return response.data
  }

  protected async post<T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axios.post(url, data, config)
    return response.data
  }

  protected async put<T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axios.put(url, data, config)
    return response.data
  }

  protected async patch<T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axios.patch(url, data, config)
    return response.data
  }

  protected async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axios.delete(url, config)
    return response.data
  }
}

export default ApiClient
