import { isDefined, convertObjectToArray } from "utils/helpers";

const useApi = () => {
  const apiBaseUrl = "http://localhost:3000";

  const getHeaders = (token?: string): HeadersInit | undefined => {
    const headers: HeadersInit | undefined = {
      Connection: "keep-alive",
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    if (!!token) {
      headers["Authorization"] = token;
    }
    return headers;
  };

  const post = async (
    uri: string,
    body: object,
    token?: string
  ): Promise<Response> => {
    return fetch(`${apiBaseUrl}${uri}`, {
      method: "POST",
      headers: getHeaders(token),
      body: JSON.stringify(body),
    });
  };

  const patch = async (
    uri: string,
    body: object,
    token?: string
  ): Promise<Response> => {
    return fetch(`${apiBaseUrl}${uri}`, {
      method: "PATCH",
      headers: getHeaders(token),
      body: JSON.stringify(body),
    });
  };

  const remove = async (uri: string, token?: string): Promise<Response> => {
    return fetch(`${apiBaseUrl}${uri}`, {
      method: "DELETE",
      headers: getHeaders(token),
    });
  };

  const get = async (
    uri: string,
    token: string,
    params?: object
  ): Promise<Response> => {
    let url = `${apiBaseUrl}${uri}`;
    if (isDefined(params)) {
      url += `?${new URLSearchParams(convertObjectToArray(params)).toString()}`;
    }
    return fetch(url, {
      method: "GET",
      headers: getHeaders(token),
    });
  };

  return { post, get, remove, patch };
};

export default useApi;
