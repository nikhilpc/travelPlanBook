import styledComponents from "styled-components";
import { useAuth0 } from '@auth0/auth0-react';
import Destinations from "./Destinations";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Offer from "./Offer";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Tours from "./Tours";
const HomePage = () => {

  const { isLoading } = useAuth0();

  if (isLoading) return <Loader>Loading...</Loader>

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
      <Footer />
    </>
  );
};

const Loader = styledComponents.div`
position: absolute;
top: 50%;
left: 50%;
border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  border-left: 16px solid pink;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
`

export default HomePage;
