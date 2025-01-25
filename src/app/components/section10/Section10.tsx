import Image from "next/image";

function Section10() {
  return (
    <section className="mt-20 mx-auto flex flex-col gap-6 items-center justify-center p-4">
      <div className="w-[348px] h-[105px] flex flex-col p-1 justify-start items-center">
        <div className="text-[#FF5A3C] w-[135px] h-[43.61px] p-2 text-center rounded-3xl bg-[#FFEAEA] font-nunito font-bold text-[14px] md:text-[16px] flex justify-center items-center">
          Our Blogs
        </div>
        <span className="text-[24px] md:text-[44px] font-Poppins font-bold whitespace-nowrap">
          Latest Blog Posts
        </span>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 px-4">
        {/* Blog Card 1 */}
        <div
          className="flex flex-col text-sm font-semibold max-w-[350px] w-[350px] h-[480px] bg-white shadow-[0px_5px_14px_rgba(0,0,0,0.07)]"
          role="article"
        >
          <Image
            src="/assets/blog1.png"
            className="object-cover w-full h-[223px]"
            alt="Cypress Creek office building exterior"
            width={350}
            height={223}
            loading="lazy"
          />
          <div className="flex flex-col px-3 mt-5 w-full">
            <div className="flex gap-2.5 self-start ml-5 leading-7 text-gray-500 whitespace-nowrap">
              <div className="grow">by: Admin</div>
              <Image
                src="/assets/Vector.svg"
                className="object-contain shrink-0 my-auto aspect-[1.18] w-[13px]"
                alt="Vector icon"
                width={13}
                height={13}
                loading="lazy"
              />
            </div>
            <h2 className="mt-3 text-base leading-5 text-black">
              Exploring the Future of Cypress Creek: A New Hub for Office
              Leasing and Investment Opportunities
            </h2>
            <div
              className="shrink-0 mt-5 max-w-full h-px border border-gray-100 border-solid w-[322px]"
              role="separator"
            ></div>
            <div className="flex gap-5 justify-between mt-6 w-full">
              <div className="flex gap-2 text-gray-500 whitespace-nowrap">
                <Image
                  src="/assets/uil_calender.svg"
                  className="object-contain shrink-0 my-auto w-3.5 aspect-square"
                  alt="Calendar icon"
                  width={14}
                  height={14}
                  loading="lazy"
                />
                <time dateTime="2024-09-25">2024-09-25</time>
              </div>
              <a
                href="#"
                className="text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Read more about Cypress Creek office leasing opportunities"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div
          className="hidden md:flex flex-col text-sm font-semibold max-w-[350px] w-[350px] h-[480px] bg-white shadow-[0px_5px_14px_rgba(0,0,0,0.07)]"
          role="article"
        >
          <Image
            src="/assets/blog2.png"
            className="object-cover w-full h-[223px]"
            alt="Cypress Creek office building exterior"
            width={350}
            height={223}
            loading="lazy"
          />
          <div className="flex flex-col px-3 mt-5 w-full">
            <div className="flex gap-2.5 self-start ml-5 leading-7 text-gray-500 whitespace-nowrap">
              <div className="grow">by: Admin</div>
              <Image
                src="/assets/Vector.svg"
                className="object-contain shrink-0 my-auto aspect-[1.18] w-[13px]"
                alt="Vector icon"
                width={13}
                height={13}
                loading="lazy"
              />
            </div>
            <h2 className="mt-3 text-base leading-5 text-black">
              Exploring the Future of Cypress Creek: A New Hub for Office
              Leasing and Investment Opportunities
            </h2>
            <div
              className="shrink-0 mt-5 max-w-full h-px border border-gray-100 border-solid w-[322px]"
              role="separator"
            ></div>
            <div className="flex gap-5 justify-between mt-6 w-full">
              <div className="flex gap-2 text-gray-500 whitespace-nowrap">
                <Image
                  src="/assets/uil_calender.svg"
                  className="object-contain shrink-0 my-auto w-3.5 aspect-square"
                  alt="Calendar icon"
                  width={14}
                  height={14}
                  loading="lazy"
                />
                <time dateTime="2024-09-25">2024-09-25</time>
              </div>
              <a
                href="#"
                className="text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Read more about Cypress Creek office leasing opportunities"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div
          className="hidden md:flex flex-col text-sm font-semibold max-w-[350px] w-[350px] h-[480px] bg-white shadow-[0px_5px_14px_rgba(0,0,0,0.07)]"
          role="article"
        >
          <Image
            src="/assets/blog3.png"
            className="object-cover w-full h-[223px]"
            alt="Cypress Creek office building exterior"
            width={350}
            height={223}
            loading="lazy"
          />
          <div className="flex flex-col px-3 mt-5 w-full">
            <div className="flex gap-2.5 self-start ml-5 leading-7 text-gray-500 whitespace-nowrap">
              <div className="grow">by: Admin</div>
              <Image
                src="/assets/Vector.svg"
                className="object-contain shrink-0 my-auto aspect-[1.18] w-[13px]"
                alt="Vector icon"
                width={13}
                height={13}
                loading="lazy"
              />
            </div>
            <h2 className="mt-3 text-base leading-5 text-black">
              Exploring the Future of Cypress Creek: A New Hub for Office
              Leasing and Investment Opportunities
            </h2>
            <div
              className="shrink-0 mt-5 max-w-full h-px border border-gray-100 border-solid w-[322px]"
              role="separator"
            ></div>
            <div className="flex gap-5 justify-between mt-6 w-full">
              <div className="flex gap-2 text-gray-500 whitespace-nowrap">
                <Image
                  src="/assets/uil_calender.svg"
                  className="object-contain shrink-0 my-auto w-3.5 aspect-square"
                  alt="Calendar icon"
                  width={14}
                  height={14}
                  loading="lazy"
                />
                <time dateTime="2024-09-25">2024-09-25</time>
              </div>
              <a
                href="#"
                className="text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Read more about Cypress Creek office leasing opportunities"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>

        <div>Placeholder slider</div>
      </div>
    </section>
  );
}

export default Section10;
