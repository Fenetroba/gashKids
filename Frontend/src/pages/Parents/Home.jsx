
import Guide from '@/components/Parents/Guide'
import Header from '@/components/Parents/Header'
import HeroSection from '@/components/Parents/heroSection'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-gradient-to-r to-[var(--parent2)] from-[var(--parent4)]'>
  <Header/>
  <HeroSection/>
  <Guide/>
    </div>
  )
}

export default Home