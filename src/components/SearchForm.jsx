import React from "react"

const SearchForm = () => {
  return (
    <>
      <section className="mt-5 p-5 container mx-auto flex justify-center items-center">
        <form className="space-y-3">
          <h2 className="text-2xl text-center">Search Hacker News</h2>
          <input
            type="text"
            placeholder="React"
            className="border px-6 py-2 shadow-pink-300 shadow-sm xl:px-10 uppercase"
          />
        </form>
      </section>
    </>
  )
}

export default SearchForm
