import Head from "next/head";
import { appConfig } from "@/config/app.config";
import { SEOProps } from "./seo.props";

const SEO = ({
  children,
  appName = appConfig.appName,
  metaTitle = appConfig.metaTitle,
  metaDescription = appConfig.metaDescription,
  metaKeywords = appConfig.metaKeywords,
  author = appConfig.author,
  opengraphImage = appConfig.opengraphImage,
  opengraphUrl = appConfig.opengraphUrl,
  type = "website",
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
        <meta name="application-name" content={appName} />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content={author} />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={opengraphUrl} />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={opengraphImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={opengraphUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={appName} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={opengraphImage} />
      </Head>
      {children}
    </>
  );
};

export default SEO;
