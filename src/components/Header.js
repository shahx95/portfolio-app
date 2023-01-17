import React from "react"


export default function(){
    
    return (
        <div className="overflow-hidden bg-gray-800">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Hey there, I am{' '}
                  <span className="text-green-800">Shah</span>! 
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                I am a fullstack software engineer with 2+ years of experience.
                </p>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Please take a look around to see what I've been up to, the
projects I've completed, and what we can build together.
                </p>
                <a
                  href="#stack"
                  aria-label="Discover"
                  className="inline-flex items-center text-xl font-semibold tracking-wider transition-colors duration-200 text-green-800 hover:text-teal-700"
                >
                  Discover
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="relative">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-green-800 lg:w-32 lg:-mr-16 sm:block"
                  >
                    <defs>
                      <pattern
                        id="766323e1-e594-4ffd-a688-e7275079d540"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <div className="relative rounded">
                    <img src="./shahx95-webdev.png" alt="Illustration of Shah"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}