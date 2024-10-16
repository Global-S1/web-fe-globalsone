import axios from "axios";
import { URL_SERVER } from "@/shared/constants/url";
import dataMoc from "@/wp-mock-data/success-data.json";
import { wordpressService } from "@/shared/services/wordpress.service";
import { ThanksPageAdapter } from "../adapter/thanks.adapter";

export const getSuccessPageData = async () => {
  try {
    const res = await wordpressService<ISuccesInput>({
      id: "756",
      page: "pages",
    });
    return  ThanksPageAdapter(res.data.acf);
  } catch (err) {
    return dataMoc;
  }
};
