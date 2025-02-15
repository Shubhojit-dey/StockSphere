import React from "react";

import Hero from "./Hero";
import LeftManage from "./LeftSection";
import RightManage from "./RightSection";
import Universe from "./Universe";

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftManage
        productImgURL="media/kite.png"
        productName="Kite"
        productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        playStore="#"
        appStore="#"
        linkName="Try demo   →"
        linkname2="Learn More  →"
      />
      <RightManage
        productImgURL="media/console.png"
        productName="Console"
        productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMoreLink="#"
        learnMoreTopic="Learn More →"
      />
      <LeftManage
        productImgURL="media/coin.png"
        productName="Coin"
        productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        playStore="#"
        appStore="#"
        linkName="Coin →"
      />
      <RightManage
        productImgURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productdescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMoreLink="#"
        learnMoreTopic="Kite Connect →"
      />
      <LeftManage
        productImgURL="media/varsity.png"
        productName="Varsity mobile"
        productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#"
        learnMore="#"
        playStore="#"
        appStore="#"
      />
      <Universe />
    </>
  );
}

export default PricingPage;
