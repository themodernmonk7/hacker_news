import React from "react"

const Stories = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 xl:grid-cols-3 p-10  ">
      <article className=" bg-slate-800 px-8 py-4 rounded-sm shadow-md mx-auto ">
        <h4 className="text-white font-semibold tracking-wide">
          Relicensing React, Jest, Flow, and Immutable.js
        </h4>
        <p className="text-gray-400 mt-1">
          2280 points by
          <span> dwwoelfel | </span>
          498 comments
        </p>
        <div className="text-white text-xs mt-4 space-x-2 bg-text-300">
          <a href="#" className=" rounded-sm hover:text-blue-600  uppercase">
            Read more
          </a>
          <button className=" rounded-sm uppercase hover:text-red-600">
            remove
          </button>
        </div>
      </article>
    </section>
  )
}

export default Stories
