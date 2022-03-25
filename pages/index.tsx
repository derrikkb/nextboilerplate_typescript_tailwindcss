import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Boilerplate: Nextjs-Typescript-TailwindCSS</title>
        <meta name="description" content="The personal portfolio of Derrikk Broughton" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-3xl font-bold'>Next JS Boilerplate : Typescript/TailwindCSS</div>
    </div>
  )
}
