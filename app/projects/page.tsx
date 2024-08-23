import React from 'react'
import Banner from '../components/Banner'
import Featured1 from '../components/Featured1'
import Featured2 from '../components/Featured2'
import Featured3 from '../components/Featured3'


export const metadata = {
  title: 'Projects | Unlock Your Online Potential: Digital Marketing, Design, Development, and Hosting Solutions.',
  description: "Maximize your reach and impact in the digital sphere with our tailored solutions designed to amplify your brand's success.",
}

const page = () => {
  return (
    <main>
      
      <Featured1 />
      <Featured2 />
      <Featured3 />
    </main>
  )
}

export default page