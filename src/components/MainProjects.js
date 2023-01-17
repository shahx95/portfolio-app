import React from "react"

export default function(){
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
              <a href="/" aria-label="Article">
                <img
                  src="noodlen.png"
                  className="object-fit w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="py-5">
            
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">Noodle-n</p>
                </a>
                <p className="mb-4 text-gray-700">
                Noodle'n is a full-stack web application designed to aid individual grocery-related needs. It is built using html, css, express, nodeJs and mongoDB.
                </p>
                <div class="mb-10 text-center md:mb-2 lg:mb-2"><a href="https://noodle-n.gentlegiantdev.repl.co/" target="_blank"  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-green-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Visit Website</a></div>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
              <a href="/" aria-label="Article">
                <img
                  src="communitycareers.png"
                  className="object-fit w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="py-5">
                
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">Community Careers</p>
                </a>
                <p className="mb-4 text-gray-700">
                Community Careers is an open source job listing platform for niche communities. It is built using React and Firebase.
                </p>
                <div class="mb-10 text-center md:mb-2 lg:mb-2"><a href="https://github.com/shahx95/community-careers" target="_blank"  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-green-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Visit Website</a></div>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
              <a href="/" aria-label="Article">
                <img
                  src="reddit-bot.png"
                  className="object-fit w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="py-5">
                
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">
                    SubReddit Guardian
                  </p>
                </a>
                <p className="mb-4 text-gray-700">
                Subreddit Guardian is a python bot that harnesses the power of Reddit's PRAW API to streamline moderation, eliminate spam, and protect against brigading. Currently safeguarding over 150,000 users.
                </p>
                <div class="mb-10 text-center md:mb-2 lg:mb-2"><a href="/" class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-green-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Visit Website</a></div>
              </div>
            </div>
          </div>
        </div>
      );
}