import dataMoc from "@/wp-mock-data/success-data.json";
import { WPGetDataByContentType } from "@/shared/services/wordpress.service";
import { ThanksPageAdapter } from "../adapter/thanks.adapter";

export const getSuccessPageData = async () => {
  try {
    const res = await WPGetDataByContentType<ISuccesInput>({
      id: "756",
      contentType: "pages",
    });
    return ThanksPageAdapter(res.data.acf);
  } catch (err) {
    return dataMoc;
  }
};
