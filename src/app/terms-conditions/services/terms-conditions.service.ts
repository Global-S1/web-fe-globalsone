import { WPGetDataByContentType } from "@/shared/services/wordpress.service";
interface ITermsResponse {
  content: {
    rendered: string;
  };
}

export const getTermsConditions = async () => {
  try {
    const response = await WPGetDataByContentType<ITermsResponse>({
      id: "406",
      contentType: "pages",
    });
    return response.data;
  } catch (error) {}
};
