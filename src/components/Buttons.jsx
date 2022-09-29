import React from "react"
import { useGlobalContext } from "../context/context"

const Buttons = () => {
  const { loading, handlePage, page, nbPages } = useGlobalContext()
  return (
    <>
      <div className="container mx-auto flex justify-center items-center space-x-6 xl:text-xl">
        <button
          className="border text-white px-3 text-sm rounded-sm bg-gradient-to-r from-[#e052a0] to-[#f15c41] xl:text-xl disabled:cursor-not-allowed "
          disabled={loading}
          onClick={() => handlePage("decrease")}
        >
          Prev
        </button>
        <p>
          {page + 1} of {nbPages}{" "}
        </p>
        <button
          className="border text-white px-3 text-sm rounded-sm bg-gradient-to-r from-[#e052a0] to-[#f15c41] xl:text-xl disabled:cursor-not-allowed"
          disabled={loading}
          onClick={() => handlePage("increase")}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Buttons
