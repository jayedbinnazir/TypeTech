import Image from "next/image";

export default function Rectangle() {
  return (
    <section className="mt-10 font-Poppins  font-bold text-[16px] flex flex-col py-10 md:py-0 md:flex-row md:gap-4 relative h-[380px] w-[361px] md:w-[1090px]  md:h-[159px] bg-[#E2E5EA]">
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
          <div>Property Type</div>
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
          <div>Choose City</div>
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
  );
}
