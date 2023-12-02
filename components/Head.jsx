import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Anay Malviya is an avid full stack developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="anay malviya, anay, malviya, web developer portfolio, anay web developer, anay developer, mern stack, anay malviya portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Anay Malviya's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Anay Malviya',
};
