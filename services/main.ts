import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
const baseURL = import.meta.env.VITE_API_URL

const validateBaseUrl = (url: unknown): url is string => {
  if (url && typeof url === 'string') return true
  return false
}

class ApiClent {
  protected axios: AxiosInstance

  constructor() {
    if (!validateBaseUrl(baseURL)) {
      throw new Error('No base url provided')
    }

    const axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      withCredentials: true,
    })

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
