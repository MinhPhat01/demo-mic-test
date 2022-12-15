import queryString from "query-string";

export const transformUrl = (originalUrl, addtionalParams) => {
  if (originalUrl == undefined) {
    return "";
  }

  const { url, query: params } = queryString.parseUrl(originalUrl);

  const mergepParams = {
    ...params,
    ...addtionalParams,
  };

  return `${url}?${queryString.stringify(mergepParams)}`;
};
