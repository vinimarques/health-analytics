import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@styles/Home.module.css';
import { FileAnalyzer } from '@components/FileAnalyzer';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Health Analytics</title>
        <meta
          name="description"
          content="Analytics for health file from iphone app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FileAnalyzer />
    </div>
  );
};

export default Home;
