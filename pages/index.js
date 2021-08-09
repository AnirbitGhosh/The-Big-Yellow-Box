import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Axios from 'axios'
import { v4 as uuidv4} from 'uuid';

export default function Home() {
  const formHandler = async (values) => {
      const request = {
          id: uuidv4(),
          idea: values.idea,
          email: values.email,
      }

      const sendResponse = await Axios.post("http://localhost:8000/api", request);
      console.log(request);
      
  }

  return (
    <>
      <Head>
        <title>Big Yellow Box</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection formHandler={formHandler}/>
      <Footer />
    </>
  );
}
