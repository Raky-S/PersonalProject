import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product 
          id="127674724"
          title="The Morning Miracle" 
          price={29.99} 
          image="https://images-eu.ssl-images-amazon.com/images/I/41GPIof19sL._AC_UL400_SR258,400_.jpg" 
          rating={5} />
          <Product 
          id="9864683537"
          title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Cream" 
          price={399.99} 
          image="https://m.media-amazon.com/images/I/51LH9DtmipL._AC_UY327_QL65_.jpg" 
          rating={4} />
        </div>

        <div className="home__row">
        <Product 
          id="9864683537"
          title="Mapple Watch Series 15 (GPS + Cellular, 40mm) - Space Grey Aluminium Case with Black Sport Band" 
          price={125.00} 
          image="https://m.media-amazon.com/images/I/71a+EYihmwL._AC_UY327_QL65_.jpg" 
          rating={3} />
         <Product 
          id="93243455357"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Heather Grey Fabric" 
          price={390.99} 
          image="https://m.media-amazon.com/images/I/6128QtaL0LL._AC_UY327_FMwebp_QL65_.jpg" 
          rating={5} />
         <Product 
          id="9642765895"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)" 
          price={990.99} 
          image="https://m.media-amazon.com/images/I/81WhK5+gf2L._AC_UY327_FMwebp_QL65_.jpg" 
          rating={4} />
        </div>

        <div className="home__row">
         <Product 
          id="9864683537"
          title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440, 120Hz, Freesync, Gsync Compatible, HDMI, 2 x Displayport, USB, Dark Blue Grey" 
          price={1090.00} 
          image="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_UY327_FMwebp_QL65_.jpg" 
          rating={5} />
        </div>
      </div>
    </div>
  );
}

export default Home;
