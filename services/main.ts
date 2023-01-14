import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import HttpStatusCodes from './common/HttpStatusCodes'
const baseURL = import.meta.env.VITE_API_URL

type unknownError = {
  response: {
    status: number
  }
}

const validateBaseUrl = (url: unknown): url is string => {
  if (url && typeof url === 'string') return true
  return false
}

const onResponseSuccess = (response: AxiosResponse<unknown>): AxiosResponse => {
  return response
}

const hasErrorResponse = (error: unknown): error is unknownError => {
  return typeof error === 'object' && error !== null && 'response' in error
}

const hasErrorStatus = (error: unknown): boolean => {
  const isErrorObject = hasErrorResponse(error)
  if (!isErrorObject) return false

  const hasErrorStatus = Object.prototype.hasOwnProperty.call(
    error.response,
    'status'
  )

  return hasErrorStatus
}

/**
 * @note - Pe viitor trebuie de rescris
 */
const onResponseError = (error: unknown): Promise<never> => {
  const isErrorStatusValid = hasErrorStatus(error)
  const isErrorResponseValid = hasErrorResponse(error)

  if (!isErrorStatusValid || !isErrorResponseValid) {
    alert('Something went wrong')
    return Promise.reject(error)
  }

  const httpStatus = error.response.status

  if (httpStatus === HttpStatusCodes.UNAUTHORIZED) {
    alert('Unauthorized')
  }
  if (httpStatus === HttpStatusCodes.FORBIDDEN) {
    alert('Forbidden')
  }
  if (httpStatus === HttpStatusCodes.NOT_FOUND) {
    alert('Not found')
  }
  if (httpStatus === HttpStatusCodes.UNPROCESSABLE_ENTITY) {
    alert('Unprocessable entity')
  }

  return Promise.reject(error)
}

class ApiClent {
  protected axios: AxiosInstance

  constructor() {
    if (!validateBaseUrl(baseURL)) {
      throw new Error('No base url provided')
    }

    const axiosInstance = axios.create({
      baseURL,
      withCredentials: true,
      timeout: 5000,
    })

    axiosInstance.defaults.headers.get.Accepts = 'application/json'
    axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

    axiosInstance.interceptors.response.use(onResponseSuccess, onResponseError)

    this.axios = axiosInstance
  }

  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axios.get(url, config)
    return response.data
  }

  protected async post<T>(url: string, data: unknown): Promise<T> {
    const response = await this.axios.post(url, data)
    return response.data
  }
}

export default ApiClent
