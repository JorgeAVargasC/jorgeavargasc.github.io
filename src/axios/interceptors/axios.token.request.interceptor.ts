import { InternalAxiosRequestConfig } from 'axios'
import { cookies } from 'next/headers'

export const axiosTokenRequestInterceptor = async (requestConfig: InternalAxiosRequestConfig) => {
  const cookie = cookies()
  const token = cookie.get('token')
  if (token) {
    requestConfig.headers.Authorization = `Bearer ${token}`
  }
  return requestConfig
}
