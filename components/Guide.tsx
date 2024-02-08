import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col"
    
    style={{
      
      'background-color':'#282828'
      
      
    }}
    >
      <div className="padding-container max-container w-full pb-24">
     <br />
        <p className="uppercase regular-18 -mt-1 mb-3 text-white">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40  lg:bold-64 xl:max-w-[390px]"
          style={{
      
      'color':"#B29241"
    }}>Revolutionize Your Productivity with VAssist</h2>
          <p className="regular-16 text-white xl:max-w-[520px]">Transform your to-do list into a productivity powerhouse with VAssist. Our platform seamlessly blends advanced technology with expert human assistance to provide you with unparalleled virtual support. Delegate tasks effortlessly, and watch as our experienced team springs into action, ensuring nothing falls through the cracks. With intuitive task management and transparent communication, VAssist empowers you to achieve your goals with ease. Say hello to a new era of productivity. Say hello to VAssist</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
     

      
      </div>
    </section>
  )
}

export default Guide