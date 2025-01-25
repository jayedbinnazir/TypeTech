import Image from "next/image";

export default function Menue() {
  return (
    <div className="flex  gap-1 md:gap-7 items-center text-[#FFFFFF] font-semibold font-nunito text-[18px] justify-center z-20 absolute top-20 md:top-12 p-2 w-full md:w-4/5">
      <div className="w-1/2 md:ml-8">
        <Image src="/assets/Logo.svg" alt="Logo" width={100} height={50} />
      </div>
      {/* HamBurger */}
      <div className="md:hidden w-1/2 border-red-500 flex justify-end">
        <button
          id="hamburger-button"
          className="text-white focus:outline-none bg-[rgba(232,228,228,0.1)]"
        >
          <Image
            src="/assets/burger-menu-svgrepo-com.svg"
            alt="Hamburger Menu"
            className="w-12 h-12"
            width={48}
            height={48}
          />
        </button>
      </div>
      <nav className="my-auto hidden md:block w-1/2">
        <ul className="flex gap-4 justify-end items-center w-full">
          <li>Home</li>
          <li>About</li>
          <li>Properties</li>
          <li>Neighborhood</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="border border-red p-2 border-[#FF5A3C]">ES</div>
    </div>
  );
}
