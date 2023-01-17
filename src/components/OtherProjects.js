import React from "react"

export default function(){
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">Other Projects</h2>
      <div className="max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
          <div className="mb-4 lg:mb-0 text-left ">
            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
              Inkwell
            </h5>
            <div className="relative pr-8">
              <p className="text-base text-gray-700 md:text-lg">
                This project is a no-login note taking app utilizing various features of ReactJS, such as Event Listeners, State Management, Conditional Rendering, React Hooks, and Lazy State Initialization. The app comes with functionalities like synchronization with local storage, automatic title generation, and the ability to sort notes by the most recent update.
              </p>
            </div>
          </div>
          <div className="flex justify-start w-80 lg:justify-end">
            <a
              href="https://github.com/shahx95/inkwell"
              target="_blank" 
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-green-800 hover:text-deep-purple-800"
            >
              Github
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
          <div className="mb-4 lg:mb-0 text-left ">
            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
              Rapid Roll
            </h5>
            <div className="relative pr-8">
              <p className="text-base text-gray-700 md:text-lg">
              A fun and interactive dice game built with ReactJS. The game utilizes React's state management and conditional rendering capabilities, ensuring a dynamic and responsive gameplay. Additionally, the use of React Hooks such as useEffect, enables the game to provide an immersive and interactive experience for players. 
              </p>
            </div>
          </div>
          <div className="flex justify-start w-80 lg:justify-end">
            <a
              href="https://github.com/shahx95/rapid-roll"
              target="_blank" 
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-green-800 hover:text-deep-purple-800"
            >
              Github
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
          <div className="mb-4 lg:mb-0 text-left ">
            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
            Star Trek Species Encyclopedia
            </h5>
            <div className="relative pr-8">
              <p className="text-base text-gray-700 md:text-lg">
              The Star Trek Species Encyclopedia is built using html, css, javascript and node. It features a client-side project that utilizes a Star Trek API, developed by myself, to provide an in-depth exploration of the diverse species that inhabit the Star Trek universe.
              </p>
            </div>
          </div>
          <div className="flex justify-start w-80 lg:justify-end">
            <a
              href="https://github.com/shahx95/star-trek-client"
              target="_blank" 
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-green-800 hover:text-deep-purple-800"
            >
              Github
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
          <div className="mb-4 lg:mb-0 text-left ">
            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
            This Portfolio Website
            </h5>
            <div className="relative pr-8">
              <p className="text-base text-gray-700 md:text-lg">
              This website that you are currently browsing. The website showcases my skills and projects, utilizing the power of React for dynamic updates and Tailwind for clean and modern styling."
              </p>
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
  };