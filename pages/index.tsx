import Image from "next/image";
import localFont from "next/font/local";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <section className="w-[70%] md:h-[60%] h-fit flex-col md:static my-28 items-center md:items-stretch flex md:flex-row-reverse md:mb-0">
      <div className="my-auto ">
        <Image
          src="/portfolio.jpg"
          alt="My Image"
          width={450}
          height={450}
          className="rounded-full"
        />{" "}
      </div>
      <div className="flex justify-between h-auto  flex-col items-start w-auto md:w-[70%] text-center md:text-start">
        <h1 className="font-bold text-5xl text-white">
          Mahmoud Mohamed Elsayed
        </h1>
        <p className="text-lg text-[#7c7c7c]">
          I'm MERN Stack Developer With a passion for developing and designing
          programs to assist engineers in designing, constructing, and analyzing
          systems, as well as maintaining systems, I have acquired extensive
          work skills in technical engineering. I am conscientious, hardworking,
          detail- oriented, quick to learn new skills, and eager to contribute.
          I bring a wealth of ideas, enthusiasm, and strong problem-solving
          abilities to the table.
        </p>
        <button
          type="button"
          className="bg-white text-xl md:m-0 m-auto font-medium w-52 h-auto"
        >
          <a href="/cv.pdf" download="/cv.pdf">
            Download CV
          </a>
        </button>
      </div>
    </section>
  );
}
