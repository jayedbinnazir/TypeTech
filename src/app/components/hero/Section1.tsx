import Image from "next/image";

export default function Section1() {
  return (
    <section className=" -mt-16   md:-mt-28 drop-shadow-md font-poppins text-[45px] text-[#FFFFFF] flex flex-col md:flex-row relative h-[518.5px] w-[361px] md:w-[1090px] md:h-[159px] bg-[#FF5A3C]">
      <div className="   md:grow flex justify-center items-center">
        <Image
          src="/assets/Book Image.png"
          alt="Book Image"
          className="float-left -mt-32 mb-4 md:-mt-0"
          width={138}
          height={228}
        />
      </div>
      <div className="  grow  md:basis-4/6 text-center italic">
        <p className="italic mt-10 md:mt-0 text-[20px] font-normal leading-tight">
          GET YOUR <span className="font-extrabold text-[45px]">Free</span>
        </p>
        <span className="block leading-none">REAL ESTATE INVESTMENT</span>
        <span className="block leading-none font-bold">EBook</span>
      </div>
      <div className="  md:grow px-6 basis-1/6 flex justify-center md:items-center  text-black font-nunito text-[16px]">
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
