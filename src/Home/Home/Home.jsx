import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from '../../Components/Banner'
import HowItWorks from '../../Components/HowItWorks'
import OurServices from '../../Components/OurServices'
import Partner from '../../Components/Partner'
import TrustedValue from '../../Components/TrustedValue'
import Merchant from '../../Components/Merchant'
import Review from '../../Components/Review'
import Faq from '../../Components/Faq'

export const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <HowItWorks></HowItWorks>
        <OurServices></OurServices>
        <Partner></Partner>
        <TrustedValue></TrustedValue>
        <Merchant></Merchant>
        <Review></Review>
        <Faq></Faq>
    </div>
  )
}

export default Home