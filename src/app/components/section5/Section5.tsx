import Image from "next/image";

export default function Section5() {
  return (
    <section className="mt-20 mx-auto flex flex-col gap-6 items-center justify-center">
      <div className="w-[348px] h-[105px] flex flex-col p-1 justify-start items-center">
        <div className="text-[#FF5A3C] w-[135px] h-[43.61px] p-2 text-center rounded-3xl bg-[#FFEAEA] font-nunito font-bold text-[14px] md:text-[16px] flex justify-center items-center">
          Our Properties
        </div>
        <span className="text-[24px] md:text-[44px] font-Poppins font-bold whitespace-nowrap">
          Featured Listings
        </span>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 px-4">
        {/* Card 1 */}
        <div
          className="flex flex-col w-[350px] h-[511px]"
          role="article"
          aria-label="Property listing"
        >
          <div className="flex flex-col w-full h-full bg-white shadow-[0px_5px_14px_rgba(0,0,0,0.07)]">
            {/* Image Section */}
            <div className="relative w-full h-[227px]">
              <Image
                loading="lazy"
                src="/assets/image.png"
                className="object-cover w-full h-full"
                alt="Property exterior view"
                width={350}
                height={227}
              />
              <div
                className="absolute top-2 right-2 z-10 px-3 py-0.5 text-sm font-semibold text-white bg-red-500"
                role="status"
              >
                FOR SALE
              </div>
              <div className="absolute bottom-2 left-2 flex gap-2 px-3 py-0.5 text-sm text-white">
                <Image
                  loading="lazy"
                  src="/assets/dir (1).svg"
                  className="object-contain w-[11px] aspect-[0.85]"
                  alt="Location pin icon"
                  width={11}
                  height={9}
                />
                <div className="flex-auto" role="text">
                  1215 West Ave, Miami Beach, FL 33139, USA
                </div>
              </div>
            </div>
            {/* Content Section */}
            <div className="flex flex-col px-3 mt-2 font-semibold">
              <div
                className="text-lg text-red-500"
                role="text"
                aria-label="Price"
              >
                $966
              </div>
              <div
                className="mt-2 text-2xl leading-7 text-black"
                role="heading"
                aria-level="2"
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
                src="/assets/Client image.png"
                className="object-cover rounded-full w-[37px] h-[37px]"
                alt="Profile picture of Kavin Albert Krueger"
                width={37}
                height={37}
              />
              <div>Kavin Albert Krueger</div>
            </div>
          </div>
        </div>

        {/* Repeat for other cards */}

        {/* Card 2 */}
        <div
          className="flex flex-col w-[350px] h-[511px]"
          role="article"
          aria-label="Property listing"
        >
          <div className="flex flex-col w-full h-full bg-white shadow-[0px_5px_14px_rgba(0,0,0,0.07)]">
            <div className="relative w-full h-[227px]">
              <Image
                loading="lazy"
                src="/assets/image (1).png"
                className="object-cover w-full h-full"
                alt="Property exterior view"
                width={350}
                height={227}
              />
              <div
                className="absolute top-2 right-2 z-10 px-3 py-0.5 text-sm font-semibold text-white bg-red-500"
                role="status"
              >
                FOR SALE
              </div>
              <div className="absolute bottom-2 left-2 flex gap-2 px-3 py-0.5 text-sm text-white">
                <Image
                  loading="lazy"
                  src="/assets/dir (1).svg"
                  className="object-contain w-[11px] aspect-[0.85]"
                  alt="Location pin icon"
                  width={11}
                  height={9}
                />
                <div className="flex-auto" role="text">
                  1215 West Ave, Miami Beach, FL 33139, USA
                </div>
              </div>
            </div>
            <div className="flex flex-col px-3 mt-2 font-semibold">
              <div
                className="text-lg text-red-500"
                role="text"
                aria-label="Price"
              >
                $966
              </div>
              <div
                className="mt-2 text-2xl leading-7 text-black"
                role="heading"
                aria-level="2"
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
            <div
              className="mt-3.5 w-full border border-gray-100"
              role="separator"
              aria-hidden="true"
            ></div>
            <div
              className="flex items-center gap-2 px-3 mt-2 text-sm font-semibold text-black"
              role="contentinfo"
            >
              <Image
                loading="lazy"
                src="/assets/man.png"
                className="object-cover rounded-full w-[37px] h-[37px]"
                alt="Profile picture of Kavin Albert Krueger"
                width={37}
                height={37}
              />
              <div>Kavin Albert Krueger</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="flex flex-col w-[350px] h-[511px]"
          role="article"
          aria-label="Property listing"
        >
          <div className="flex flex-col w-full h-full bg-white shadow-[0px_5px_14px_rgba(0,0,0,0.07)]">
            <div className="relative w-full h-[227px]">
              <Image
                loading="lazy"
                src="/assets/image.png"
                className="object-cover w-full h-full"
                alt="Property exterior view"
                width={350}
                height={227}
              />
              <div
                className="absolute top-2 right-2 z-10 px-3 py-0.5 text-sm font-semibold text-white bg-red-500"
                role="status"
              >
                FOR SALE
              </div>
              <div className="absolute bottom-2 left-2 flex gap-2 px-3 py-0.5 text-sm text-white">
                <Image
                  loading="lazy"
                  src="/assets/dir (1).svg"
                  className="object-contain w-[11px] aspect-[0.85]"
                  alt="Location pin icon"
                  width={11}
                  height={9}
                />
                <div className="flex-auto" role="text">
                  1215 West Ave, Miami Beach, FL 33139, USA
                </div>
              </div>
            </div>
            <div className="flex flex-col px-3 mt-2 font-semibold">
              <div
                className="text-lg text-red-500"
                role="text"
                aria-label="Price"
              >
                $966
              </div>
              <div
                className="mt-2 text-2xl leading-7 text-black"
                role="heading"
                aria-level="2"
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
            <div
              className="mt-3.5 w-full border border-gray-100"
              role="separator"
              aria-hidden="true"
            ></div>
            <div
              className="flex items-center gap-2 px-3 mt-2 text-sm font-semibold text-black"
              role="contentinfo"
            >
              <Image
                loading="lazy"
                src="/assets/man.png"
                className="object-cover rounded-full w-[37px] h-[37px]"
                alt="Profile picture of Kavin Albert Krueger"
                width={37}
                height={37}
              />
              <div>Kavin Albert Krueger</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
