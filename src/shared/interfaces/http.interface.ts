export interface IHttpResponse<T> {
  acf: T;
  content?: {
    rendered: string;
  };
}
