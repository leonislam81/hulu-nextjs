import Head from 'next/head'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import request from '../utils/request';

export default function Home({results}) {
  console.log(results);
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}


export async function getServerSideProps(context){
  const genre = context.query.genre;

  const response = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrendings.url}`).then((res)=> res.json());

  // const data = await response.json();

  return{
    props: {
      results: response.results,
    }
  }
}