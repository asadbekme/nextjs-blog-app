import Head from "next/head";
import { appConfig } from "@/config/app.config";
import { SEOProps } from "./seo.props";

const SEO = ({
  children,
  metaTitle = appConfig.metaTitle,
  metaDescription = appConfig.metaDescription,
  metaKeywords = appConfig.metaKeywords,
  author = appConfig.author,
}: SEOProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>{metaTitle}</title>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keyword" content={metaKeywords} />
        <meta name="author" content={author} />
        <meta name="description" content={metaDescription} />
        <link rel="shortcut icon" href={"/favicon.svg"} type="image/x-icon" />
      </Head>
      {children}
    </>
  );
};

export default SEO;
