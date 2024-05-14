import React, { useState, useEffect } from 'react';
import image from "../images/hero.jpg";
import { TypeAnimation } from 'react-type-animation';

function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Start the typing animation when the component mounts
    setShowWelcome(true);
  }, []);

  return (
    <div className='flex gap-4 h-[calc(100vh-75px)] w-11/12 mx-auto mt-[78px] bg-q' >

      <div className='h-full w-full flex items-center justify-center flex-col'>
      <TypeAnimation
                  sequence={[
        // Same substring at the start will only be typed out once, initially
        'Welcome To I-NEXT ETS',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We Are Provide Best Web Developemt',
        1000,
        'We Are Provide Best App Developemt',
        1000,
        'We Are Provide Best Marketing',
        1000
      ]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={false}
            className=' text-3xl font-bold'
          />


          <div className='mt-5 text-xl font-semibold text-center leading-snug '>
          At <span className='text-blue-700'>I-NEXT-ETS</span>, we're not just builders; we're architects of digital dreams, engineers of innovation, and creators of tomorrow's landscapes. Our mission is simple yet profound: to craft digital solutions that transcend expectations, empower businesses, and enrich lives.
          </div>
      </div>

      <div className='w-full flex items-center justify-center'>
        <img src={image} alt="" className='w-[70%]' />
      </div>

    </div>
  );
}

export default Home;
