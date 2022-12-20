const PREFIX = "api/v2";

const PAGES = "pages";


const generatePathname = (data: string[]): string => {
  const arr = [PREFIX, ...data];
  return `/${arr.join("/")}/`;
};

export const TYPE_PARAMS = {
  "home.HomePage": "home.HomePage",
  "news.NewDetailPage": "news.NewsDetailPage",
  "product.ProductCategoryPage": "product.ProductCategoryPage",
  "about.AboutPage": "about.AboutPage"

} as const;

export const SETTING_API = `/${PREFIX}/`;

export const PAGES_API = generatePathname([PAGES]);

