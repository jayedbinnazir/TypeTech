import React from "react";
import Image from "next/image";

function Fot() {
  return (
    <div className=" text-[16px] leading-[29px] font-poppins flex justify-between md:justify-center flex-col md:flex-row md:items-baseline text-[#FFFFFF] bg-[#000000] h-[1300px]  md:h-[667px] ">
      <div className="  md:text-[16px] p-4  md:px-[70px] md:basis-2/5 flex flex-col gap-3   md:gap-8  md:h-full justify-center items-start  ">
        <Image
          loading="lazy"
          src="/assets/Logo.svg"
          alt="RISE Realty Logo"
          className="object-contain aspect-square w-[50px]  border-blue-300"
          width={50}
          height={50}
        />
        <p className="text-base leading-[29px] text-[14px] md:text-[16px]  font-poppins text-justify   ">
          RISE Realty offers corporate commercial real estate solutions for
          properties across South Florida. RISE Realty is your dedicated partner
          in realizing your real estate goals. With our expert team and
          personalized approach, we guide you through buying, selling, lea-
          sing, or tenant representation. Your happiness is our priority, and we
          always strive to deliver outstanding service by going above and
          beyond. Our office loca- tions ensure top-notch service right from the
          heart of downtown Miami.
        </p>
        <div className=" flex flex-col justify-between  md:w-[309px] h-[129.8px]  md:h-[129.8px] ">
          <div className=" flex gap-3 ">
            <Image
              loading="lazy"
              src="/assets/map.svg"
              alt="Location Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-[0.8]"
              width={16}
              height={20.41}
            />
            <span className="whitespace-nowrap">
              1111 Brickell Ave. Suite 1550 Miami, FL
            </span>
          </div>
          <div className=" flex gap-3 ">
            <Image
              loading="lazy"
              src="/assets/PhoneWhite icon.svg"
              alt="Phone Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-square"
              width={16.47}
              height={15.8}
            />
            <a href="tel:+13058591606" className="hover:underline">
              +1 (305) 859-1606
            </a>
          </div>
          <div className=" flex gap-3 ">
            <Image
              loading="lazy"
              src="/assets/EmailWhite Icon.svg"
              alt="Email Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-[1.33]"
              width={16}
              height={12}
            />
            <a href="mailto:info@RISErealty.com" className="hover:underline">
              info@RISErealty.com
            </a>
          </div>
          <div className="flex -ml-1 gap-3 ">
            <Image
              loading="lazy"
              src="/assets/FacebookW.svg"
              alt="Facebook Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-[1.33]"
              width={9}
              height={15.8}
            />
            <Image
              loading="lazy"
              src="/assets/Clip path group.svg"
              alt="Clip Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-[1.33]"
              width={16}
              height={15.8}
            />
            <Image
              loading="lazy"
              src="/assets/linkedinW.svg"
              alt="Linkedin Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-[1.33]"
              width={16}
              height={15.8}
            />
            <Image
              loading="lazy"
              src="/assets/TiktokW.svg"
              alt="Tiktok Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-[1.33]"
              width={18}
              height={15.8}
            />
            <Image
              loading="lazy"
              src="/assets/InstagramW.svg"
              alt="Insta Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-[1.33]"
              width={16}
              height={15.8}
            />
            <Image
              loading="lazy"
              src="/assets/YoutubeW.svg"
              alt="Youtube Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-[1.33]"
              width={16}
              height={15.8}
            />
          </div>
        </div>
      </div>
      <div className="   md:grow flex p-4 flex-col ">
        <div className="md:w-[137px] h-[263px] md-h-[289px] ">
          <header className="text-[22px] font-bold  md:relative -top-9 ">
            Company
          </header>
          <nav
            className="flex   flex-col w-[137px] h-[289px] flex-1  max-md:w-full max-md:mb-8"
            aria-label="Company Links"
          >
            <a href="/about" className="mt-4 hover:underline">
              About
            </a>
            <a href="/blogs" className="mt-2 hover:underline">
              Blogs
            </a>
            <a href="/properties" className="mt-2 hover:underline">
              Properties
            </a>
            <a href="/faq" className="mt-2 hover:underline">
              FAQ
            </a>
            <a href="/contact" className="mt-2 hover:underline">
              Contact
            </a>
            <a
              href="/sms-privacy-policy"
              className="self-stretch mt-2 hover:underline"
            >
              SMS Privacy Policy
            </a>
          </nav>
        </div>
      </div>
      <div className="   md:grow flex p-4 flex-col ">
        <div className="w-[216px] h-[189px] md:h-[209px] ">
          <header className="text-[22px] font-bold  md:relative -top-9 ">
            Services
          </header>
          <nav
            className="flex  border-white flex-col w-[137px] h-[289px] flex-1  max-md:w-full max-md:mb-8"
            aria-label="Company Links"
          >
            <a href="/about" className="mt-4 hover:underline">
              Tenant Representation
            </a>
            <a href="/blogs" className="mt-2 hover:underline">
              Corporate Relocation
            </a>
            <a href="/properties" className="mt-2 hover:underline">
              Residential Leasing & Sales
            </a>
            <a href="/faq" className="mt-2 hover:underline">
              Serviced Offices
            </a>
          </nav>
        </div>
      </div>
      <div className="  md:grow p-4 flex flex-col ">
        <header className="text-[22px] font-bold  md:relative -top-9 ">
          Newsletter
        </header>
        <div className="w-[344px] md:h-[194px]">
          <p>
            Subscribe to our weekly Newsletter and re- ceive updates via email.
          </p>
          <div className="flex items-center w-[80vw] md:w-full h-[58px] mt-2  ">
            <input
              type="text"
              placeholder="Email"
              className="flex-grow h-full pl-4 text-gray-500 focus:outline-none"
            />
            <div className="w-[50px] h-full bg-red-500 flex items-center justify-center ">
              <div className="relative w-[15px] h-[15px]">
                <Image
                  src="/assets/inputArrow.svg"
                  alt="Send Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fot;
