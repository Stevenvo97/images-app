
import axios, { AxiosRequestConfig, Method } from 'axios'
import formatString from 'string-format'

export const getApiPath = (
  path: string,
  params?: { [key: string]: string | number },
) => {
  const apiUrl = 'https://api.unsplash.com'
  const client_id = '&client_id=z9GWtTuwwaRWn5MoX1ADLj6d9yeCxANo8CbXnMhSnJ0'
  return (
    apiUrl + formatString(path, {params}) + client_id
  )
}

export const logRequestError = (error: any) => {
    const sendingMessage = {
      error,
      locale: process.env.NEXT_PUBLIC_DEPLOY_LOCALE,
    }
    typeof window === 'undefined' && console.log(JSON.stringify(sendingMessage))
  }

export const callApi = async (
  url: string,
  method: Method,
  options?: AxiosRequestConfig,
) => {
  try {
    const res = await axios({ url, method, timeout: 10000, ...options })
    if (res) return res.data
  } catch (err) {
    logRequestError(err)
    return null
  }
  return null
}



