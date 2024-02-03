import { AxiosRequestConfig } from 'axios'

const API_BASE_URL: string = process.env.NEXT_PUBLIC_SERVICE_ARTICLES as string

const configBasic: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  timeout: 9000000, // 15 minutes
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

const configFormData: AxiosRequestConfig = {
  ...configBasic,
  headers: {
    ...configBasic.headers,
    'Content-Type': 'multipart/form-data'
  }
}

const configBlob: AxiosRequestConfig = {
  ...configBasic,
  responseType: 'blob'
}

const configURLEncoded: AxiosRequestConfig = {
  ...configBasic,
  headers: {
    ...configBasic.headers,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export { configBasic, configFormData, configBlob, configURLEncoded }
