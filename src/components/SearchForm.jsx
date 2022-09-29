import React from "react"
import { useGlobalContext } from "../context/context"

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()
  return (
    <>
      <section className="mt-5 p-5 container mx-auto flex justify-center items-center">
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-2xl text-center">Search Hacker News</h2>
          <input
            type="text"
            placeholder="React"
            value={query}
            className="border px-6 py-2 shadow-pink-300 shadow-sm xl:px-10 uppercase"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>
      </section>
    </>
  )
}

export default SearchForm
