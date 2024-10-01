
import axios from "axios"
import { URL_SERVER } from "@/shared/constants/url"
import data from "@/wp-mock-data/metrics-data.json"

export const getMetricsDataService = async () => {
    try {
        const response = await axios.get(URL_SERVER)
        return response.data
    } catch (error) {
        return data
    }
}