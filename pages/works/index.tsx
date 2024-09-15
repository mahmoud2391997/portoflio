import Image from "next/image";
import Link from "next/link";

export default function Works() {
    return  <section className="w-[70%] h-[65%] flex flex-col justify-between text-white">
  
  <div className="w-full h-[45%] flex p-2 bg-[#7c7c7c]">
  <Image
        src="/user.jpg"
        alt="My Image"
        width={450}
        height={450}

      />
      <div className="px-5 flex flex-col justify-between">

  <div className="text-2xl font-bold">Artix (User Website)</div>
    <div className="flex jus">
      <div className="text one">
        Website Link:
      </div>
    <Link className="ml-1" href={"https://art-handmade-ecommerce.vercel.app/"}>
    <p className="text-blue-600 hover:underline cursor-pointer">https://art-handmade-ecommerce.vercel.app/</p>
    </Link>
    </div>
    <p className="text-lgs">Using: Reactjs - Redux - Node.js - MongoDB</p>

    <p>Website displays handicrafts and art pieces in our application.  Our application    helps clients to find the best products.  Also, it provides events for displaying products and artistic talents, where clients can book a ticket.  Moreover, we send the ticket to mail provided by our client.
    </p>
  </div>
</div>
  <div className="w-full  h-[45%]  flex p-2 bg-[#7c7c7c]">
  <Image
        src="/adminWeb.jpg"
        alt="My Image"
        width={375}
        height={450}

      />
      <div className="px-5 flex flex-col justify-between">

  <div className="text-2xl font-bold">Artix (Admin Website)</div>
    <div className="flex">
      <div className="text one">
        Website Link:
      </div>
    <Link className="ml-1" href={"https://art-admin-one.vercel.app/"}>
    <p className="text-blue-600 hover:underline cursor-pointer">https://art-admin-one.vercel.app/</p>
    </Link>
    </div>
    <p className="text-lgs">Using: Reactjs - Redux - Node.js - MongoDB</p>
    <p>  As for the product owner, we have created a website with the owner’s authority to add products, receive orders, display each order details and be aware of the sales percentage.  As for the product owner, we have created a website with the owner’s authority to add products, receive orders, display each order details and be aware of the sales percentage.
    </p>
  </div>
      </div>
 

  
</section>

}