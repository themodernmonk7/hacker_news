import React from "react"

const Buttons = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center space-x-6 xl:text-xl">
        <button className="border text-white px-3 text-sm rounded-sm bg-gradient-to-r from-[#e052a0] to-[#f15c41] xl:text-xl ">
          Prev
        </button>
        <p>1 of 50 </p>
        <button className="border text-white px-3 text-sm rounded-sm bg-gradient-to-r from-[#e052a0] to-[#f15c41] xl:text-xl">
          Next
        </button>
      </div>
    </>
  )
}

export default Buttons
