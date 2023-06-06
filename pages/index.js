import Head from "next/head";
import Collections from "@/components/Collections";
import Banner from "@/components/Banner";
import BestSeller from "@/components/BestSeller";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
      <Collections />
      <Banner />
      <BestSeller />
    </>
  )
}

export default Home;