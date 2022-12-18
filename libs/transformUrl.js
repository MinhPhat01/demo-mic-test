import queryString from "query-string";

export const transformUrl = (originalUrl, additionalParams) => {
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