import Login from '@/auth/Login'
import ChildControlleOverview from '@/components/gust/ChildControlleOverview'
import Footer from '@/components/gust/Footer'
import Header from '@/components/gust/Header'
import Hero from '@/components/gust/Hero'
import Resources from '@/components/gust/Resources'
import React from 'react'

const Home = () => {
  return (
    <div>
    <div className='bg-gradient-to-r to-[var(--parent2)] from-[var(--parent4)]'>
     <Header/>
     <Hero/>
     <div className='mt-[100vh] relative'>
     <ChildControlleOverview/>
     <Resources/>
     <Footer/>
     </div>
    </div>
    </div>
  )
}

export default Home