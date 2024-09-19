import axios from 'axios'

const URL = "http://test.local/wp-json/api/v1/get-text"

export const getCentralTitle = async () => axios.get(URL)