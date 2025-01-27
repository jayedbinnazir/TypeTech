import Image from "next/image";

type Card5<T> = {
  author: T;
  price: T;
  avatar: T;
  image: T;
  email: T;
};

export default function CardSec5({
  author,
  avatar,
  image,
  price,
  email,
}: Card5<string>) {
  return (
    <div
      className="flex flex-col w-[350px] h-[511px]"
      role="article"
      aria-label="Property listing"
    >
      <div className="flex flex-col w-full h-full bg-white shadow-[0px_5px_14px_rgba(0,0,0,0.07)]">
        {/* Image Section */}
        <div className="relative w-full h-[227px]">
          {/* Image */}
          <Image
            loading="lazy"
            src={image}
            className="object-cover w-full h-full"
            alt="Property exterior view"
            width={350}
            height={227}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          {/* "FOR SALE" Badge */}
          <div
            className="absolute top-2 right-2 z-10 px-3 py-0.5 text-sm font-semibold text-white bg-red-500"
            role="status"
          >
            FOR SALE
          </div>

          {/* Address Section */}
          <div className="absolute bottom-2 left-2 flex gap-2 px-3 py-0.5 text-sm text-white z-20">
            <Image
              loading="lazy"
              src="/assets/dir (1).svg"
              className="object-contain w-[11px] aspect-[0.85]"
              alt="Location pin icon"
              width={11}
              height={9}
            />
            <div className="flex-auto font-poppins text-[14px]" role="text">
              1215 West Ave, Miami Beach, FL 33139, USA
            </div>
          </div>
        </div>
        {/* Content Section */}
        <div className="flex flex-col px-3 mt-2 font-semibold">
          <div
            className="text-[18px] font-poppins font-semibold text-[#FF5A3C]"
            role="text"
            aria-label="Price"
          >
            {price}
          </div>
          <div
            className="mt-2 text-[22px] font-semibold font-poppins leading-7 text-black"
            role="heading"
            aria-level={2}
          >
            Exclusive Miami Beach Retail
            <br />
            Property for sale: High-Traffic
            <br />
            Location with Long-Term
            <br />
            Leases and Strong NOI
          </div>
        </div>
        {/* Separator */}
        <div
          className="mt-3.5 w-full border border-gray-100"
          role="separator"
          aria-hidden="true"
        ></div>
        {/* Author Section */}
        <div
          className="flex items-center gap-2 px-3 mt-2 text-sm font-semibold text-black"
          role="contentinfo"
        >
          <Image
            loading="lazy"
            src={avatar}
            className="object-cover rounded-full w-[37px] h-[37px]"
            alt={`Profile picture of ${author}`}
            width={37}
            height={37}
          />
          <div className="">
            <p className="font-poppins font-semibold text-[14px]">{author}</p>
            <p className="text-[#A9B4BA] font-poppins text-[12px]">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
