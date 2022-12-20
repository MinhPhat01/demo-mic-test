import queryString from "query-string";

type Params = [original: string | undefined, additionalParams?: object];

type FunctionType = (...args: Params) => string;

export const transformUrl: FunctionType = (originalUrl, additionalParams) => {
  if (originalUrl == undefined) {
    return "";
  }

  const { url, query: params } = queryString.parseUrl(originalUrl);

  const mergeParams = {
    ...params,
    ...additionalParams,
  };

  return `${url}?${queryString.stringify(mergeParams)}`;
};
