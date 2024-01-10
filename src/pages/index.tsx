import dynamic from 'next/dynamic'
import Head from 'next/head';
import Link from 'next/link';

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr:false});

export default function Home() {
  return (
    <>
      <Head>
        <title>Canada Line</title>
        <link rel='icon' href="/images/logo.png"/>
      </Head>
      <DynamicMap/>
    </>
  )
}
