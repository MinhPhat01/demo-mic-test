import { PAGES_API, TYPE_PARAMS } from "apis";
import Home, { HomeProps } from "containers/Home/Home";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import { GetServerSidePropsContext } from "next";

export default function HomePage(props: HomeProps) {
  return <Home {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    // const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["home.HomePage"],
        fields: "*",
        locale: "en",
      }),
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["product.ProductCategoryPage"],
        fields: "*",
        locale: "en",
        is_on_homepage: true,
        limit: 6,
      }),
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["news.NewDetailPage"],
        fields: "*",
        locale: "en",
        is_on_homepage: true,
        limit: 3,
      }),
    ];

    const { resList, fallback } = await prefetchData(urls, {});

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}