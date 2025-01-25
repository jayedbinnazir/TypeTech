import Image from "next/image";

export default function Section1() {
  return (
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
  );
}
