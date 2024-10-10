import { wordpressInstance } from "@/libs/axios";
import { IHttpResponse } from "../interfaces/http.interface";
import { IForm } from "@/app/contact-us/interfaces/contact-form";
import { PS_FORMS, USER_FORMS } from "../constants/url";
import { v4 as uuidv4 } from 'uuid'

interface Props {
  page: string;
  id: string;
}

interface IFromProps {
  data: IForm;
  token: string;
}

interface IAuthResponse {
  token: string;
  [key: string]: any; // Permite cualquier otra propiedad adicional
}

export const wordpressService = async <T>({ id, page }: Props) => {
  const response = await wordpressInstance.get<IHttpResponse<T>>(
    `/wp-json/wp/v2/${page}/${id}?acf_format=standard`
  );

  return response;
};

export const TermsConditionsService = async <T>({ id, page }: Props) => {
  const response = await wordpressInstance.get<T>(
    `/wp-json/wp/v2/${page}/${id}?acf_format=standard`
  );

  return response;
};

export const authService = async () => {
  const response = await wordpressInstance.post<IAuthResponse>(
    `/wp-json/jwt-auth/v1/token`,
    {
      username: USER_FORMS,
      password: PS_FORMS,
    }
  );
  
  return response
}

export const handlerFormsService = async <T>({ data, token }: IFromProps) => {
  const response = await wordpressInstance.post<IHttpResponse<T>>(
    `/wp-json/wp/v2/form_requirements`,
    {
      title: uuidv4(),
      acf: data,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

