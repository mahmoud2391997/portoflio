import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [selected,setSelected] = useState("home");



    return <div className="absolute top-0 w-full flex flex-col items-center">

    <nav className="w-[86.7%] bg-[#1B1B1B] h-[70px] absolute top-0 rounded-b-md">

    </nav>
    <ul className="absolute flex justify-between w-[70%] left-[15%] top-[23px] text-[#7c7c7c]">
<li className={ selected == "home" ? "text-white" : ""}><Link href={"/"}  onClick={()=>{setSelected("home")}}>
Home
</Link>
</li>
<li className={ selected == "technologies" ? "text-white" : ""}><Link href={"/technologies"} onClick={()=>{setSelected("technologies")}}>
Technologies
</Link></li>
<li className={ selected == "skills" ? "text-white" : ""}><Link href={"/skills"}  onClick={()=>{setSelected("skills")}}>
Skills
</Link></li>
<li className={ selected == "works" ? "text-white" : ""}><Link href={"/works"}  onClick={()=>{setSelected("works")}}>
Works
</Link></li>

      </ul>
    </div>
}