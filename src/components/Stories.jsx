import React from "react"
import { useGlobalContext } from "../context/context"
import { Loading } from "../components"
const Stories = () => {
  const { loading, hits, removeStory } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-2  p-10 max-w-5xl ">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article
            key={objectID}
            className=" bg-slate-800 px-4 py-6 w-full rounded-sm shadow-md mx-auto "
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
              <button
                className=" rounded-sm uppercase hover:text-red-600"
                onClick={() => removeStory(objectID)}
              >
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
