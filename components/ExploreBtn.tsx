"use client"

import { FaArrowDown } from "react-icons/fa6";

const ExploreBtn = () => {
  return (
    <div>
        <button type="button" id="explore-btn" className="mt-6 mx-auto" onClick={()=> console.log("CLICK")}>
            <a href="#events" className="flex items-center gap-2">
                Explore Events <FaArrowDown/>
            </a>
        </button>
    </div>
  )
}

export default ExploreBtn