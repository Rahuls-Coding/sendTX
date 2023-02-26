import Head from "next/head";

export default function Meta({ title }) {
  const siteTitle = "SendTX";
  const description = "Decentralized, Secure, Social Payments.";
  const keywords = "crypto payments, social payments, decentralized payments";
  const author = "Rahul";
  const twitter = "@rahuls-coding";
  const themeColor = "#C2F0C2";
  const darkThemeColor = "#C2F0C2";
  const image =
    "https://og-image.vercel.app/**Next.js**%20Starter%20%3Cbr%2F%3E%20%40exu3.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>
        {title} | {siteTitle}
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta
        name="theme-color"
        content={themeColor}
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content={darkThemeColor}
        media="(prefers-color-scheme: dark)"
      />
      <meta property="og:url" content="yourdomain.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
    </Head>
  );
}
