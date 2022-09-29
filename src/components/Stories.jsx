import React from "react"
import { useGlobalContext } from "../context/context"

const Stories = () => {
  const { loading, hits } = useGlobalContext()

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 xl:grid-cols-3 p-10  ">
      {hits.map((story) => {
        console.log(story)
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article
            key={objectID}
            className=" bg-slate-800 px-8 py-4 rounded-sm shadow-md mx-auto "
          >
            <h4 className="text-white font-semibold tracking-wide">{title}</h4>
            <p className="text-gray-400 mt-1">
              {points} points by
              <span> {author} | </span>
              {num_comments} comments
            </p>
            <div className="text-white text-xs mt-4 space-x-2 bg-text-300">
              <a
                href={url}
                className=" rounded-sm hover:text-blue-600  uppercase"
                rel="noopener noreferrer"
              >
                Read more
              </a>
              <button className=" rounded-sm uppercase hover:text-red-600">
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
