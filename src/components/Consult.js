import React from "react"
import Socials from "./Socials"
import Form from "./ContactForm"

export default function(){
    return (
        <div id="workwithme" className="overflow-hidden bg-gray-800">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">Transform your ideas into reality with my fullstack development skills. </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                I offer a wide range of services including website development, web application development, Wordpess development, API development, e-commerce development, maintenance and updates, performance optimization, and technical consultation. 
                
                </p>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">Don't let your ideas stay just ideas, Contact me today to start turning them into reality.
                </p>
                <Socials/>
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
                  <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl underline">
                      Drop me a mail
                    </h3>
                    <Form />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}