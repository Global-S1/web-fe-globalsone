import { wordpressInstance } from "@/libs/axios";
import { IHttpResponse } from "../interfaces/http.interface";

interface Props {
  page: string;
  id: string;
}

export const wordpressService = async <T>({ id, page }: Props) => {
  const response = await wordpressInstance.get<IHttpResponse<T>>(
    `/wp-json/wp/v2/${page}/${id}?acf_format=standard`
  );

  return response;
};
