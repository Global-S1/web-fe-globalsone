import { wordpressInstance } from "@/libs/axios";
import { IHttpResponse } from "../interfaces/http.interface";
import { IForm } from "@/app/contact-us/interfaces/contact-form";
import { PS_FORMS, USER_FORMS } from "../constants/url";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  id: string;
  contentType: string;
}

interface IFromProps {
  data: IForm;
  token: string;
}

interface IAuthResponse {
  token: string;
  [key: string]: any;
}

export const WPGetDataByContentType = async <T>({
  id,
  contentType,
}: IProps) => {
  const response = await wordpressInstance.get<IHttpResponse<T>>(
    `/wp-json/wp/v2/${contentType}/${id}?acf_format=standard`
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

  return response;
};

export const handlerFormsService = async <T>({ data, token }: IFromProps) => {
  const response = await wordpressInstance.post<IHttpResponse<T>>(
    `/wp-json/wp/v2/form_requirements`,
    {
      title: uuidv4(),
      acf: data,
      status: "publish",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
