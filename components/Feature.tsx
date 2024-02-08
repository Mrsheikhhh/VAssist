import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-24"
   style={{
      
      backgroundColor:"#282828"
    }}
    >
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]"
        style={{
      
      backgroundColor:"#282828"
    }}>
          <div className='relative'>

            <h2 className="bold-40 lg:bold-64"
            
            style={{
      
      color:"#B29241"
    }}
            >Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <div
    style={{
      
      backgroundColor:"#B29241"
    }}>
    <li className="flex w-full flex-1 flex-col items-start"
    
    
     
    
    
    >
      <div className="rounded-full p-4 lg:p-7 bg-black">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize"
      style={{
      
      backgroundColor:"#B29241"
    }}>
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80  lg:mt-[30px] lg:bg-none text-black"
      style={{
      
      backgroundColor:"#B29241"
    }}
    >
        {description}
      </p>
    </li>
    </div>
  )
}

export default Features