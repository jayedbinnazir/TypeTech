import Image from "next/image";

export default function Fau() {
  return (
    <div className="flex flex-col relative w-[100vw]  items-center  ">
      {/* Top nav */}
      <div className="top-nav fixed flex justify-center flex-wrap bg-transparent z-20 w-full shadow-lg transition-all duration-300">
        <div className="basis-1/2 flex gap-2 p-1.5 font-Poppins font-bold text-[16px] text-[#FFFFFF]">
          <p className="text-center flex justify-end items-baseline gap-1 pr-1 basis-1/2">
            <Image
              src="/assets/Email Icon.svg"
              alt="Email Icon"
              className="w-3 h-3"
              width={12}
              height={12}
            />
            <span>info@RISErealty.com</span>
          </p>
          <p className="text-center whitespace-nowrap flex items-baseline basis-1/2">
            <Image
              src="/assets/Phone icon.svg"
              alt="Phone Icon"
              className="w-3 h-3"
              width={12}
              height={12}
            />
            <span>+1 (305) 859-1606</span>
          </p>
        </div>
        <div className="basis-1/2 md:p-1.5 flex gap-3 justify-center text-[16px] items-center">
          <Image
            src="/assets/Facebook.svg"
            alt="Facebook Icon"
            className="w-4 h-4"
            width={16}
            height={16}
          />
          <Image
            src="/assets/Twitter.svg"
            alt="Twitter Icon"
            className="w-4 h-4"
            width={16}
            height={16}
          />
          <Image
            src="/assets/linkedin.svg"
            alt="LinkedIn Icon"
            className="w-4 h-4"
            width={16}
            height={16}
          />
          <Image
            src="/assets/Tiktok.svg"
            alt="TikTok Icon"
            className="w-4 h-4"
            width={16}
            height={16}
          />
          <Image
            src="/assets/Instagram.svg"
            alt="Instagram Icon"
            className="w-4 h-4"
            width={16}
            height={16}
          />
          <Image
            src="/assets/Youtube.svg"
            alt="YouTube Icon"
            className="w-4 h-4"
            width={16}
            height={16}
          />
        </div>
      </div>

      {/* Menue */}
      <div className="flex gap-1 md:gap-7 items-center text-[#FFFFFF] font-semibold font-nunito text-[18px] justify-center z-20 fixed top-16 md:top-10 p-4 w-4/5">
        <div className="w-1/2 ml-8">
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

      {/* Main Content */}
      <div className="relative flex flex-col gap-2 justify-center items-center p-4 w-[100vw] h-[809px] bg-[url('/assets/Background.png')] bg-cover bg-center">
        {/* Transparent glass overlay with ash color */}
        <div
          className="absolute inset-0 bg-[#2f2f2f]"
          style={{ opacity: 0.55 }}
        ></div>

        {/* Content */}
        <div className="text-center z-10 font-nunito text-[16px] text-[#FFFFFF]">
          <div className="flex justify-center gap-3">
            <Image
              src="/assets/Icon.svg"
              alt="Real Estate Icon"
              width={24}
              height={24}
            />
            <p>Real Estate Agency</p>
          </div>
          <p className="font-semibold text-[65px] font-[Poppins] p-1 w-[400px] md:w-[600px] leading-[1]">
            Miami Real Estate Specialists
          </p>
        </div>
        <div className="w-[400px] z-10" style={{ opacity: 0.9 }}>
          <p className="font-nunito text-[16px] text-center text-[#FFFFFF]">
            RSIE Realty, your specialists in residential and commercial
            properties. From dream homes to prime business spaces, trust our
            unique expertise to guide you in Miami/South Florida&apos;s dynamic
            market.
          </p>
        </div>
      </div>

      {/* section-1 */}
      <section className=" -mt-8 md:-mt-28 drop-shadow-md font-Poppins text-[45px] text-[#FFFFFF] flex flex-col md:flex-row relative h-[518.5px] w-[361px] md:w-[1090px] md:h-[159px] bg-[#FF5A3C]">
        <div className=" md:grow flex justify-center items-center">
          <Image
            src="/assets/Book Image.png"
            alt="Book Image"
            className="relative -top-20 md:static"
            width={200}
            height={300}
          />
        </div>
        <div className="grow basis-1/6 md:basis-4/6 text-center italic">
          <p className="italic text-[20px] font-normal leading-tight">
            GET YOUR <span className="font-extrabold text-[45px]">Free</span>
          </p>
          <span className="block leading-none">REAL ESTATE INVESTMENT</span>
          <span className="block leading-none font-bold">EBook</span>
        </div>
        <div className="md:grow px-6 basis-1/6 flex justify-center items-center text-black font-nunito text-[16px]">
          <button className="bg-[#FFFFFF] flex items-center justify-center w-[159px] h-[50px] drop-shadow-2xl">
            Download
            <Image
              src="/assets/arrow.svg"
              alt="Download Arrow"
              className="h-8 w-6"
              width={24}
              height={24}
            />
          </button>
        </div>
      </section>

      {/* rectangle */}
      <section className="mt-10 font-Poppins font-bold text-[16px] flex flex-col py-10 md:py-0 md:flex-row md:gap-4 relative h-[380px] w-[361px] md:w-[1090px] md:h-[159px] bg-[#E2E5EA]">
        <div className="grow px-6 flex justify-center items-center">
          <div
            className="flex gap-5 justify-between px-6 py-2 w-full bg-white border border-gray-100 border-solid"
            role="button"
            tabIndex={0}
          >
            <div>Lease</div>
            <Image
              src="/assets/dArrow.svg"
              alt="Lease Image 1"
              className="object-contain shrink-0 my-auto w-2 aspect-[1.6]"
              width={32}
              height={51}
            />
          </div>
        </div>
        <div className="grow px-6 flex justify-center items-center">
          <div
            className="flex gap-5 justify-between px-6 py-2 w-full bg-white border border-gray-100 border-solid"
            role="button"
            tabIndex={0}
          >
            <div>Lease</div>
            <Image
              src="/assets/dArrow.svg"
              alt="Lease Image 2"
              className="object-contain shrink-0 my-auto w-2 aspect-[1.6]"
              width={32}
              height={51}
            />
          </div>
        </div>
        <div className="grow px-6 flex justify-center items-center">
          <div
            className="flex gap-5 justify-between px-6 py-2 w-full bg-white border border-gray-100 border-solid"
            role="button"
            tabIndex={0}
          >
            <div>Lease</div>
            <Image
              src="/assets/dArrow.svg"
              alt="Lease Arrow"
              className="object-contain shrink-0 my-auto w-2 aspect-[1.6]"
              width={32}
              height={51}
            />
          </div>
        </div>

        <div className="grow flex justify-center items-center text-black font-nunito text-[16px]">
          <button className="bg-[#FF5A3C] text-[#FFFFFF] flex items-center justify-center w-[159px] h-[50px] drop-shadow-2xl">
            SEARCH
          </button>
        </div>
      </section>
    </div>
  );
}
