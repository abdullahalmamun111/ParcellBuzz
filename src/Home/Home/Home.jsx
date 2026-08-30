import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from '../../Components/Banner'
import HowItWorks from '../../Components/HowItWorks'
import OurServices from '../../Components/OurServices'
import Partner from '../../Components/Partner'
import TrustedValue from '../../Components/TrustedValue'
import Merchant from '../../Components/Merchant'
import Faq from '../../Components/Faq'
import Reviews from '../../Components/Reviews'

const reviewPromise = fetch('/reviews.json').then(res => res.json())

export const Home = () => {
  return (
    <div className="w-full bg-[#f3f4f6] pb-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <Banner></Banner>
        <HowItWorks></HowItWorks>
        <OurServices></OurServices>
        <Partner></Partner>
        <TrustedValue></TrustedValue>
        <Merchant></Merchant>
        <Reviews reviewsPromise={reviewPromise}></Reviews>
        <Faq></Faq>
      </div>

    </div>
  )
}

export default Home