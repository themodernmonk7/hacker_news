import React from "react"
import personImage from "../assets/avatar-ali.png"

const Navbar = () => {
  return (
    <>
      <nav className="  text-white py-3 shadow-lg  bg-slate-900 relative">
        {/* <!-- Flex Container --> */}
        <div className="flex justify-between items-center mx-4">
          {/* <!-- Explore --> */}
          <div className="flex space-x-4">
            <a href="#">
              <span>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </a>
            <h2>Explore</h2>
          </div>

          {/* <!-- Logo --> */}
          <div className="ml-14">
            <h2>
              <span className="text-4xl tracking-wider font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e052a0] to-[#f15c41]">
                Hacker
              </span>
              news
            </h2>
          </div>

          <div className=" justify-between items-center space-x-6 uppercase hidden md:flex ">
            <a
              href=""
              className="bg-gradient-to-r from-[#e052a0] to-[#f15c41] hover:from-green-400 hover:to-blue-500 px-2 py-2 text-xs rounded-sm"
            >
              Subscribe
            </a>

            <figure className="w-14 h-14 px-2 py-2">
              <img
                src={personImage}
                className="border-2 border-slate-500 rounded-full "
                alt=""
              />
            </figure>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
