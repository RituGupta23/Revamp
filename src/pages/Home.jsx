import React from 'react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import Cards from '../components/Cards'
import RegistrationForm from '../components/RegistrationForm'

export default function Home() {
  return (
    <>
    <HeroSection/>
    {/* <Particle/> */}
    <StatsSection />
    <Cards/>
    {/* <RegistrationForm /> */}
    </>
  )
}
