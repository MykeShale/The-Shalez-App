import React from 'react'
import Digital1 from '../components/Digital1'
import Wework from '../components/Wework'

export const metadata = {
  title: 'About U | Empowering Brands Online: Digital Marketing, Design, Development & Hosting Solutions',
  description: 'Discover tailored digital marketing, graphic design, web development, and hosting services under one roof.',
}

const page = () => {
  return (
    <main>
      <>
        <Digital1 />
        <Wework />
      </>
    </main>
  )
}

export default page