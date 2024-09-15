export default function TechnologiesPage() {
    return <div className="grid grid-cols-5 w-[70%] h-[40%] gap-6 text-white">
  <section className="h-full bg-[#7c7c7c] rounded w-full flex flex-col justify-between">
    <h2 className="text-2xl w-full text-center">Client Side Technologies</h2>
    <ul className=" list-disc list-inside flex flex-col w-[80%] h-[60%] justify-between m-auto ">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>TS</li>
    </ul>
  </section>
  <section className="h-full bg-[#7c7c7c] rounded w-full flex flex-col justify-between">
    <h2 className="text-2xl w-full text-center">CSS Frameworks</h2>
    <ul className=" list-disc list-inside flex flex-col w-[80%] h-[60%] justify-between m-auto ">
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
        <li>SASS</li>
    </ul>
  </section>
  <section className="h-full bg-[#7c7c7c] rounded w-full flex flex-col justify-between">
    <h2 className="text-2xl w-full text-center">Front-End Frameworks</h2>
    <ul className=" list-disc list-inside flex flex-col w-[80%] h-[60%] justify-between m-auto ">
        <li>React.Js</li>
        <li>React.Ts</li>
        <li>Next.Js</li>
        <li>Next.Ts</li>
    </ul>
  </section>
  <section className="h-full bg-[#7c7c7c] rounded w-full flex flex-col justify-between">
    <h2 className="text-2xl w-full text-center">Backend Languages and Frameworks</h2>
    <ul className=" list-disc list-inside flex flex-col w-[80%] h-[60%] justify-between m-auto ">
        <li>Node.Js</li>
        <li>Node.Ts</li>
        <li>Express.Js</li>
        <li>Express.Ts</li>
    </ul>
  </section>
  <section className="h-full bg-[#7c7c7c] rounded w-full flex flex-col justify-between">
    <h2 className="text-2xl w-full text-center">Databases</h2>
    <ul className=" list-disc list-inside flex flex-col w-[80%] h-[60%] justify-between m-auto ">
        <li>MongoDB</li>
        <li>My SQL</li>
        <li>FireBase</li>
    </ul>
  </section>
 
</div>

}