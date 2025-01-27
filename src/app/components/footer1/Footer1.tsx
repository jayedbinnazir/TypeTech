import Image from "next/image";

function Footer1() {
  return (
    <footer className="flex flex-col text-base leading-7 text-white bg-black">
      <div className="flex flex-wrap gap-5 justify-between items-start px-16 py-24 w-full max-md:px-5 max-md:py-12 max-md:flex-col">
        {/* <!-- Logo and Address Section --> */}
        <div className="flex flex-col items-start flex-1 max-md:w-full max-md:mb-8">
          <Image
            loading="lazy"
            src="/assets/Logo.svg"
            alt="RISE Realty Logo"
            className="object-contain aspect-square w-[50px]"
            width={50}
            height={50}
          />
          <p className="self-stretch mt-2.5  text-white text-justify">
            RISE Realty offers corporate commercial real estate solutions for
            properties across South Florida. RISE Realty is your dedicated
            partner in realizing your real estate goals. With our expert team
            and personalized approach, we guide you through buying, selling,
            leasing, or tenant representation. Your happiness is our priority,
            and we always strive to deliver outstanding service by going above
            and beyond. Our office locations ensure top-notch service right from
            the heart of downtown Miami.
          </p>
          <div className="flex gap-4 mt-6">
            <Image
              loading="lazy"
              src="/assets/map.svg"
              alt="Location Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-[0.8]"
              width={16}
              height={16}
            />
            <span className="whitespace-nowrap">
              1111 Brickell Ave. Suite 1550 Miami, FL
            </span>
          </div>
          <div className="flex gap-4 mt-1.5">
            <Image
              loading="lazy"
              src="/assets/PhoneWhite icon.svg"
              alt="Phone Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-square"
              width={16}
              height={16}
            />
            <a href="tel:+13058591606" className="hover:underline">
              +1 (305) 859-1606
            </a>
          </div>
          <div className="flex gap-4 mt-1.5">
            <Image
              loading="lazy"
              src="/assets/EmailWhite Icon.svg"
              alt="Email Icon"
              className="object-contain shrink-0 my-auto w-4 aspect-[1.33]"
              width={16}
              height={16}
            />
            <a href="mailto:info@RISErealty.com" className="hover:underline">
              info@RISErealty.com
            </a>
          </div>
        </div>

        {/* <!-- Company Links --> */}
        <nav
          className="flex flex-col w-[200px] flex-1 max-md:w-full max-md:mb-8"
          aria-label="Company Links"
        >
          <h2 className="text-2xl font-bold leading-none">Company</h2>
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

        {/* <!-- Services Links --> */}
        <nav
          className="flex flex-col w-[200px] flex-1 max-md:w-full max-md:mb-8"
          aria-label="Services Links"
        >
          <h2 className="text-2xl font-bold leading-none">Services</h2>
          <a href="/tenant-representation" className="mt-4 hover:underline">
            Tenant Representation
          </a>
          <a href="/corporate-relocation" className="mt-2 hover:underline">
            Corporate Relocation
          </a>
          <a href="/residential" className="mt-2 hover:underline">
            Residential Leasing & Sales
          </a>
          <a href="/serviced-offices" className="mt-2 hover:underline">
            Serviced Offices
          </a>
        </nav>

        {/* <!-- Newsletter Section --> */}
        <div className="flex flex-col flex-1 max-md:w-full">
          <h2 className="text-2xl font-bold leading-none">Newsletter</h2>
          <p className="mt-4">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
          <div className="flex items-center w-[80vw] md:w-[344px] h-[58px] border mt-2 border-gray-300 ">
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
    </footer>
  );
}

export default Footer1;
