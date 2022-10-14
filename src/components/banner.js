import React from 'react';

export default function banner() {
  return (
    <>
    <div className='banner relative h-screen w-full px-[80px] min-h-[600px] bg-cover bg-no-repeat bg-center z-[1]'>
        <div className='content pt-[100px] flex items-center justify-center h-full max-w-[550px] relative left-[10%]'>
          <div className="text-[#999999]">
            <div className="title">
              <h3 className="text-[#fdf252] italic inline-block text-[35px]">
                People
              </h3>
              <h1 className='text-[70px] leading-[70px]'>
                Star War Universe
              </h1>
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="icons mt-8">
            </div>
          
          <div className='flex items-center mt-[40px]'>
              <span className="relative top-[-2px]">|</span>
              <a href="#people" rel="next" className='sec-link flex items-center'>
                  <span className="mx-[15px] relative top-[-2px] uppercase">people</span>
                  <svg width="57" height="9" viewBox="0 0 57 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="41.0503" height="1" transform="matrix(1 0 0 -1 0 5)" fill="#fdf252"></rect>
                    <path fillRule="evenodd" clipRule="evenodd" d="M52.7578 0.257812L57.0005 4.50045L56.2933 5.20756L56.2931 5.20735L52.7574 8.74313L52.0503 8.03602L55.0858 5.00046H41.0508V4.00046H55.0862L52.0507 0.964919L52.7578 0.257812Z" fill="#fdf252"></path>
                </svg>
              </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
