import React from "react"
import { Triangle } from "react-loader-spinner"

const Loading = () => {
  return (
    <>
      <div className=" flex justify-center items-center mt-56 md:mt-28  ">
        <Triangle
          height="90"
          width="90"
          color="#e95870"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  )
}

export default Loading
