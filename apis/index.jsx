const PREFIX = "https://mic.t-solution.vn/api/v2";

const PAGES = "pages";

export const TYPE_PARAMS = {
  "product.ProductCategoryPage": "product.ProductCategoryPage",
};

const generatePathname = (data) => {
  const arr = [PREFIX, ...data];
  return `/${arr.join("/")}/`;
};

export const SETTING_API = `/${PREFIX}/`;

export const PAGES_API = generatePathname([PAGES]);
