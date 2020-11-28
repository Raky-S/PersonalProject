import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/MotherlandFortSalemS1/MLAND_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_fr-FR._CB415852252_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
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
            id="127674724"
            title="The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life - Before 8AM"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41GPIof19sL._AC_UL400_SR258,400_.jpg"
            rating={5} />
          <Product
            id="9864683537"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard"
            price={399.99}
            image="https://m.media-amazon.com/images/I/51LH9DtmipL._AC_UY327_QL65_.jpg"
            rating={4} />
          <Product
            id="34553579324"
            title="Sony WH-1000XM3 Noise Cancelling Wireless Headphones with Mic, 30 Hours Battery Life, Quick Charge, Gesture Control, Ambient Sound Mode,"
            price={240.99}
            image="https://m.media-amazon.com/images/I/71jDdUuRi8L._AC_UL480_QL65_.jpg"
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
          <Product
            id="12324344547"
            title="MoovTek Bouteille Infusion thé & Fruits Isotherme en INOX Double paroi - Mug Thermos café 450ml sans BPA"
            price={45.00}
            image="https://m.media-amazon.com/images/I/41VwKHGtV5L._AC_SY322_.jpg"
            rating={4} />
        </div>

        <div className="home__row">
          <Product
            id="674712724"
            title="The Guest List: The No 1 bestseller and the biggest crime thriller of 2020 from the author of The Hunting Party"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81BT-T3QFcL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5} />
          <Product
            id="33579455324"
            title="Sony WH-1000XM3 Noise Cancelling Wireless Headphones with Mic, 30 Hours Battery Life, Quick Charge, Gesture Control"
            price={240.99}
            image="https://m.media-amazon.com/images/I/71jDdUuRi8L._AC_UL480_QL65_.jpg"
            rating={4} />
          <Product
            id="9868356437"
            title="Star Wars The Child Animatronic Edition “AKA Baby Yoda” with Over 25 Sound and Motion Combinationsl"
            price={9999.99}
            image="https://m.media-amazon.com/images/I/41kOBoHmtjL._AC_SY322_.jpg"
            rating={5} />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
