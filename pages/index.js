import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Anh Vo Duy's Website</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Anh Vo Duy. I am a Software Engineering student passionate about web development, application design, and software architecture. My career objective is to become a skilled Software Engineer who builds clean, user-friendly, and scalable web applications.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}