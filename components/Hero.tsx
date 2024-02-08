"use client"
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  const router = useRouter()
  const go=async()=>{
    
    //redirect('/Login')
    router.push('/Login')
  }
  const goS=async()=>{
    
    //redirect('/Login')
    router.push('/signup')
  }
  return (
    <>
    <section className="max-cainer padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    style={{
    
    'background-color':'#282828'
    
    }}>
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">

        <h1 className="bold-52  lg:bold-88" style={{
        'color':'#B29241'
        }}>VAssist </h1>
        <p className="regular-16 mt-6 tex xl:max-w-[520px] text-white">
        V-ASSIST  Makes Your Business Routines Automated So That Your Productivity Enchances
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70"
          style={{
      
      'color':"#B29241"
    }}>
            198k
            <span className="regular-16 lg:regular-20 ml-1"
            
            style={{
      
      'color':"#B29241"
    }}
            >Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row ">
          <Button 
            type="button" 
            title="SIGN IN" 
            variant="btn_yellow" 
            onClick={go}
            
          />

        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">MUREE</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Day</p>
              <p className="bold-20 text-white">Sunday</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero