import Link from "next/link";

export default function Navbar() {
    return <div className="absolute top-0 w-full flex flex-col items-center">

    <nav className="w-[86.7%] bg-[#1B1B1B] h-[70px] absolute top-0 rounded-b-md">

    </nav>
    <ul className="absolute flex justify-between w-[70%] left-[15%] top-[23px] text-[#7c7c7c]">
<li>Home</li>
<li><Link href={"/technologies"}>
Technologies
</Link></li>
<li>Skills</li>
<li>Works</li>
      </ul>
    </div>
}