import axios from "axios"
import { URL_SERVER } from "@/shared/constants/url"
import dataMoc from "@/wp-mock-data/success-data.json"

export const getSuccessPageData = async () => {
    try {
        const res = await axios.get(URL_SERVER)
        const data = res.data
        return data
    } catch (err) {
        return dataMoc
    }
}