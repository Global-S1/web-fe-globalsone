import axios from "axios"
import { URL_SERVER } from "@/shared/constants/url"
import dataMoc from "@/data-mock/about-us-data.json"

export const getContentDataAboutUsPage = async () => {
    try {
        const res = await axios.get(URL_SERVER)
        const data = res.data
        return data
    } catch (err) {
        return dataMoc
    }
}