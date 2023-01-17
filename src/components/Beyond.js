import React from "react"

export default function() {
    return (
      <div id="beyond" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"> Beyond Work </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Beyond my professional pursuits, I am also actively involved in a number of activities that align with my personal interests and passions. These activities not only provide a sense of fulfillment but also offer an opportunity to develop new skills and perspectives.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-4">
          <div>
            
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Mentoring
            </h5>
            <p className="text-gray-700">
              I mentor and guide new entry-level developers at 100devs via one-on-one meetings, code reviews, and hands-on training.
            </p>
          </div>
          <div>
            
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Volunteering
            </h5>
            <p className="text-gray-700">
            I volunteer as a tech support for multiple subreddits, which involves actively helping moderators with technical issues and providing guidance on automating their tasks.
            </p>
          </div>
          <div>
            
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Open Source
            </h5>
            <p className="text-gray-700">
              My recent notable contribution includes adding a new responsive feature to the <a className="text-green-800 underline" href="https://github.com/wasp-lang/wasp/pull/748" target="_blank" >WASP blog</a>. WASP is a configuration language supported by Y combinator. In addition, I also contributed by creating documentation and resolving bugs for <a className="text-green-800 underline" href="https://github.com/brittanyjoiner15/eui-event-template/pulls?q=is%3Apr+author%3Ashahx95+" target="_blank" >Event UI</a>, an event-based website template. 
            </p>
          </div>
          <div>
            
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Blog
            </h5>
            <p className="text-gray-700">
            I maintain a personal blog on <a className="text-green-800 underline" href="https://shahxcode.hashnode.dev/" target="_blank" >Hashnode</a>. Through my blog, I hope to provide valuable insights and contribute to the knowledge of others within my field.
            </p>
          </div>
        </div>
      </div>
    );
  };