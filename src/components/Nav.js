import React from "react"

export default function(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div class="bg-gray-800">
          <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="relative flex items-center justify-between">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                class="inline-flex items-center"
              >
                <svg class="w-8 text-green-800" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="1" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none"><path fill="none" d="M17.125,1.375H2.875c-0.828,0-1.5,0.672-1.5,1.5v11.25c0,0.828,0.672,1.5,1.5,1.5H7.75v2.25H6.625c-0.207,0-0.375,0.168-0.375,0.375s0.168,0.375,0.375,0.375h6.75c0.207,0,0.375-0.168,0.375-0.375s-0.168-0.375-0.375-0.375H12.25v-2.25h4.875c0.828,0,1.5-0.672,1.5-1.5V2.875C18.625,2.047,17.953,1.375,17.125,1.375z M11.5,17.875h-3v-2.25h3V17.875zM17.875,14.125c0,0.414-0.336,0.75-0.75,0.75H2.875c-0.414,0-0.75-0.336-0.75-0.75v-1.5h15.75V14.125z M17.875,11.875H2.125v-9c0-0.414,0.336-0.75,0.75-0.75h14.25c0.414,0,0.75,0.336,0.75,0.75V11.875z M10,14.125c0.207,0,0.375-0.168,0.375-0.375S10.207,13.375,10,13.375s-0.375,0.168-0.375,0.375S9.793,14.125,10,14.125z"></path></svg>
                <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                  Shah's Portfolio
                </span>
              </a>
              <ul class="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <a
                    href="#stack"
                    aria-label="Stack"
                    title="Stack"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Stack
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    aria-label="Projects"
                    title="Projects"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#workwithme"
                    aria-label="Contact"
                    title="Contact"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#beyond"
                    aria-label="Beyond Work"
                    title="Beyond Work"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Beyond Work
                  </a>
                </li>
                <li>
                  <a
                    href="#workwithme"
                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Work with Me
                  </a>
                </li>
              </ul>
              <div class="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg class="w-5 text-gray-100" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div class="absolute top-0 left-0 w-full">
                    <div class="p-5 bg-gray-900 border rounded shadow-sm justify-right">
                      <div class="flex items-center justify-end mb-4">
                        
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul class="space-y-4">
                        <li>
                  <a
                    href="#stack"
                    aria-label="Stack"
                    title="Stack"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Stack
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    aria-label="Projects"
                    title="Projects"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    aria-label="Contact"
                    title="Contact"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#beyond"
                    aria-label="Beyond Work"
                    title="Beyond Work"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Beyond Work
                  </a>
                </li>
                <li>
                  <a
                    href="#workwithme"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Work with Me
                  </a>
                </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    };