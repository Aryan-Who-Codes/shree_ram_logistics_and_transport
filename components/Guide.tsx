import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image
          src="/truck-logo.svg"
          alt="truck"
          width={80}
          height={50}
          className='h-full w-auto'
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-orange-50">
          Drive, Deliver, Trust
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Why Choose Us?</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Discover why Shree Ram Logistics is the preferred choice for businesses seeking top-notch logistics services. From our unwavering commitment to excellence to our customer-centric approach, find out what makes us stand out.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/white.jpg"
          alt="boat"
          width={1200}
          height={500}
          className="w-full object-cover object-center lg:rounded-5xl 2xl:rounded-5xl lg:h-screen"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Ahmedabad, GJ</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Bhavnagar</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide