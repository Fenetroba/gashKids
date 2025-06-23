import Login from '@/auth/Login'
import ChildControlleOverview from '@/components/gust/ChildControlleOverview'
import Header from '@/components/gust/Header'
import Hero from '@/components/gust/Hero'
import React from 'react'

const Home = () => {
  return (
    <div>
    <div className='bg-gradient-to-r to-[var(--parent2)] from-[var(--parent4)]'>
     <Header/>
     <Hero/>
     <ChildControlleOverview/>
    </div>
    </div>
  )
}

export default Home