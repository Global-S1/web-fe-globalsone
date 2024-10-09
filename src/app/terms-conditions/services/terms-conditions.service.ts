import { wordpressService } from "@/shared/services/wordpress.service";

export const getTermsConditions = async () => {
  try {
    const response = await wordpressService({
      id: "406",
      page: "terms-conditions",
    });
    return response;
  } catch (error) {}
};
