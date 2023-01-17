import React from "react"

export default function(){

    return (
        <div id="projects">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
           
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d9d7687a-355f-4502-8ec4-7945db034688"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Biggish</span>
          </span>{' '}
          Software Projects
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Here are some things I made that are being used by people every day. All of them are my own work, bar Noodle-n which is an ongoing collaboration.
        </p>
      </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex items-center justify-center">
              <img
                className="object-fit w-full h-56 rounded shadow-lg sm:h-96"
                src="fourthings.png"
                alt=""
              />
            </div>
          <div className="w-full max-w-xl px-4 mx-auto my-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
            Four Things
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
          A comprehensive task management solution, tailored to meet the unique needs of individuals with attention deficit disorder (ADD). This platform boasts a user-friendly interface that enables users to seamlessly organize and prioritize their tasks, while providing an automatic task rollover feature that works in tandem with the task bank. By leveraging this tool, individuals with ADD can improve their focus, increase productivity and ultimately, achieve their goals in an efficient and effective manner. 
          </p>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">Four Things is built using Bootstrap for the frontend, Node.js for the backend, and a MongoDB database to store data.</p>
          <div className="mb-10 text-center md:mb-2 lg:mb-2">
            <a
              href="https://mvp.shahx95.repl.co/"
              target="_blank" 
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-green-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Visit Website
            </a>
          </div>
           
        </div>
      </div>
            
          </div>
        </div>
      </div>  
      );
}