import axios from 'axios'

export const spaceApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=s6sMaKuVbiX01Q7mMIKjNRl7P92kcCYMgaeuTZ9j',
  timeout: 3000
})
