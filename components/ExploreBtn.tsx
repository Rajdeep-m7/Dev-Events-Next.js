"use client"

import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";

const ExploreBtn = () => {
  return (
    <div>
        <button type="button" id="explore-btn" className="mt-6 mx-auto" onClick={()=> console.log("CLICK")}>
            <Link href="#events" className="flex items-center gap-2">
                Explore Events <FaArrowDown/>
            </Link>
        </button>
    </div>
  )
}

export default ExploreBtn