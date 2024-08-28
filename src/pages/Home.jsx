import React from 'react'

import './../styles/home.scss'
import Hero from '../homepage/Hero'
import Explore from '../homepage/Explore'
import Service from '../homepage/Service'
import Animal from '../homepage/Animal'
import Place from '../homepage/Place'
import Map from '../homepage/Map'

function Home() {
  return (
    <>
      <div className="home">
        <Hero/>
        <Explore/>
        <Service/>
        <Animal/>
        <Place/>
        <Map/>
      </div>
    </>
  )
}

export default Home
