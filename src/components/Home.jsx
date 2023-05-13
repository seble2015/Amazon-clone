import React from "react";
import "./Home.css";
import Product from "../components/Product";
import SliderBootstrap from "./SliderBootstrap";
import Footer from "./Footer";
import BackToTop from "../BackToTop";
import "./BackToTop.css"


function Home() {
  return (
    <div className="home">
      <div className="home__container">
     
        <SliderBootstrap />
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1669}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/April/mp_20230409_1mosthearted_desktopsinglecategory_desktop_379x304._SY304_CB591700816_.jpg"
          />
          <Product
            id="12321341"
            title="6 Pack Sport Bands Compatible with Apple Watch Band 38mm 40mm 41mm 42mm 44mm 45mm 49mm,Soft Silicone Waterproof Strap"
            price={1669}
            rating={5}
            image="https://m.media-amazon.com/images/I/71bslp0DxTL._AC_UX569_.jpg"
          />
          <Product
            id="8903851"
            title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
            price={999.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71-CxLt6eEL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="2019 Apple MacBook Air with 1.6GHz Intel Core i5 (13-inch, 8GB RAM, 128GB SSD Storage) Gold (Renewed)"
            price={499.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51FWf+esWHL._AC_SL1024_.jpg"
          />
          <Product
            id="8903851"
            title="Decoreagy Watercolor Floral Shower Curtain "
            price={999.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81sM7o+NerL._AC_UL320_.jpg"
          />
          <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="67891234"
            title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones"
            price={349.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1669}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018197_379x304_1X_en_US._SY304_CB592739737_.jpg"
          />
          <Product
            id="23445930"
            title="The pre-loved edit at Shopbop"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/mp_20230125_pre-loved_desktopsinglecategory_desktop_379x304._SY304_CB614863139_.jpg"
          />
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default Home;
