import { PAGES_API, TYPE_PARAMS } from 'apis'
import Products, { ProductProps } from 'containers/Products/Products'
import prefetchData from 'libs/prefetchData'
import { transformUrl } from 'libs/transformUrl'
import React from 'react'

export default function ProductPage(props: ProductProps) {
  return (
    <Products {...props}></Products>
  )
}

export async function getServerSideProps() {
  try {
    const urls = [transformUrl(PAGES_API, {
      type: TYPE_PARAMS["product.ProductCategoryPage"],
      fields: "*",
      locale: "en"
    }),
    transformUrl(PAGES_API, {
      type: TYPE_PARAMS["product.ProductDetailPage"],
      fields: "*",
      locale: "en",
      limit: 8
    })
    ]

    const { resList, fallback } = await prefetchData(urls, {})

    return {
      props: {
        initData: resList,
        fallback
      }
    }

  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false
      }
    }
  }
}
