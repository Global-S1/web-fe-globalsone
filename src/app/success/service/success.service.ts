import axios from "axios";
import { URL_SERVER } from "@/shared/constants/url";
import dataMoc from "@/wp-mock-data/success-data.json";
import { wordpressService } from "@/shared/services/wordpress.service";

export const getSuccessPageData = async () => {
  try {
    const res = await wordpressService<ISuccessContent>({
      id: "",
      page: "success_page",
    });
    return res.data.acf;
  } catch (err) {
    return dataMoc;
  }
};
