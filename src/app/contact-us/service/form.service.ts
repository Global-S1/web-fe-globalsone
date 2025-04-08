import {
  authService,
  handlerFormsService,
} from "@/shared/services/wordpress.service";
import { IForm } from "../interfaces/contact-form";

export const sendFormRequirementService = async (formData: IForm) => {
  try {
    const { data } = await authService();
    const response = await handlerFormsService({
      data: formData,
      token: data.token,
    });
    return response.status;
  } catch (error) {}
};
