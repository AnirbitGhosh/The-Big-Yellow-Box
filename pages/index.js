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

      // https://sheet.best/api/sheets/09b84277-3474-49cd-97e0-58443c2debe7
      const sendResponse = await Axios.post("#", request);
      console.log(request);
      
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="utf-8"/>
        <meta name="description" content="Idea sharing platform" />
        
        {/* og meta tags  */}
        <meta property="og:title" content="The Big Yellow Box" key="ogtitle"/>
        <meta 
        property="og:description" 
        content="Type your business idea, thoughts, feelings, confessions or what you had for 
        breakfast this morning into the big yellow box. If we like your idea, we'll go with it 
        and give you back 10% of the profits." 
        key="ogdesc"
        />
        <meta property="og:url" content="http://localhost:3000"  key="ogurl"/>
        <meta property="og:type" content="website"  key="ogtype"/>
        <meta property="og:image" content={"favicon.ico"} key="ogimage"/>

        {/* social media meta tags */}
        <meta name="twitter:card" content="Type your business idea, thoughts, feelings, confessions or what you had for 
        breakfast this morning into the big yellow box. If we like your idea, we'll go with it 
        and give you back 10% of the profits." key="twittercard"/>
        <meta name="fb:app_id" content="fb-app-id" key="fbappid"/>


        <title>The Big Yellow Box</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection formHandler={formHandler}/>
      <Footer />
    </>
  );
}
