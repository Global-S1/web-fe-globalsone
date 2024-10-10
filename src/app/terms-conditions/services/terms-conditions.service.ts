import { TermsConditionsService } from "@/shared/services/wordpress.service";
interface ITermsResponse {
  content: {
    rendered: string;
  }
}

export const getTermsConditions = async () => {
  try {
    const response = await TermsConditionsService<ITermsResponse>({
      id: "406",
      page: "pages",
    });
    return response.data;
  } catch (error) {
  }
};
