import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img className='home__image'
      src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
      />

      <div className='home_row'>
        <Product
          id="1234812"
          title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"
          price={1899}
          rating={4}
          image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
        />
        <Product
          id="123412"
          title="Sfane Polyester Grey Duffle/Shoulder/Gym Bag for Men & Women with Separate Shoe Compartment (Grey)"
          price={569}
          rating={4}
          image="https://m.media-amazon.com/images/I/81H8JmdJIsS._SL1500_.jpg"
        />  
      </div>

      <div className='home_row'>
        <Product
          id="1234192"
          title="The Sleep Company SmartGRID Ortho 6 Inch Mattress King Size | Medium Firm Double bed Orthopedic Mattress for Back Pain Relief | Patented Japanese SmartGRID Technology | AIHA Certified|78x72x6"
          price={19999}
          rating={5}
          image="https://m.media-amazon.com/images/I/718DanI+K0L._SL1500_.jpg"
        />
        <Product
          id="1234512"
          title="Genuine Decor 18 Inch Sheesham Wood Floating Shelves for Wall Set of 3, Rustic Wall Mounted Ledge Shelf for Bathroom, Bedroom, Living"
          price={1207}
          rating={3}
          image="https://m.media-amazon.com/images/I/61ftPN+jalL._SL1080_.jpg"
        />  
        <Product
          id="1234132"
          title="LEW Punching Bag 10 Piece Boxing Set Filled with Heavy Bag Gloves Ceiling Hook Chains Hand Wraps Training Kickboxing Muay Thai MMA Punching Bags"
          price={2749}
          rating={3}
          image="https://m.media-amazon.com/images/I/71-YvwUID+S._SL1500_.jpg"
        />  
      </div>
      
      <div className='home_row'>
        <Product
          id="1234102"
          title="LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UQ7500PSF (Ceramic Black)"
          price={30490}
          rating={5}
          image="https://m.media-amazon.com/images/I/91OzzQSg47L._SL1500_.jpg"
        />
      </div>

    </div>

  )
}

export default Home
