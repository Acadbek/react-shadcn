import axios from "axios"

let baseURL = import.meta.env.VITE_BASE_URL

export const getUsers = async () => {
  const res = await axios(`${baseURL}/users`)
  return res;
}