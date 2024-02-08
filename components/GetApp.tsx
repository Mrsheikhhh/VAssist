import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { PEOPLE_URL } from "@/constants";
const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Personalized Places Suggestions on Mobile</h2>
          <p className="regular-16 text-gray-10">Make Your Small Phone A Door To Convenient Lifestyle </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
             
                
  >
      <br />

   
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp