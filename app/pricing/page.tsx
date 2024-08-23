import React from 'react'
import Manage1 from '../components/Manage1'
import Manage2 from '../components/Manage2'

export const metadata = {
  title: 'Our Prices - Plans for Everyone',
  description: 'Beyond aesthetics, we build experiences that resonate.',
}

const page = () => {
  return (
    <main>
      <Manage1 />
      {/* <Manage2/> */}
    </main>
  )
}

export default page