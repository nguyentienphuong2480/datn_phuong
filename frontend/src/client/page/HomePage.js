import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Banner from "../common/Banner";
import Brand from "../common/Brand";
import Featured from "../home/Featured";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Featured />
      <Brand />
      <Footer />
    </>
  );
}

export default HomePage;
