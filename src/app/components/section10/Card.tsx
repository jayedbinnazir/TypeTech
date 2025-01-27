import React from "react";
import Image from "next/image";

type CardProps<T> = {
  image: T;
  content: T;
  date: T;
  display?: T;
};

function Card({ image, content, date, display }: CardProps<string>) {
  return (
    <div
      className={`${display} md:block   md:w-[350px] md:h-[480px]-200  bg-[#FFFFFF] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`}
    >
      <a href="#">
        <Image
          className=""
          src={image}
          alt="Blog image"
          width={361} // Adjust the width as per your design
          height={223} // Adjust the height as per your design
        />
      </a>

      <div className=" ml-2 p-1 mt-2 flex flex-row  gap-2 ">
        <Image
          className=""
          src="/assets/Group.svg"
          alt="Blog image"
          width={11.85} // Adjust the width as per your design
          height={11.84} // Adjust the height as per your design
        />
        <span className=" leading-[29px] font-semibold  text-[14px] font-poppins text-[#657982]">
          by:Admin
        </span>
        <Image
          className=""
          src="/assets/Pointer.svg"
          alt="Blog image"
          width={13.82} // Adjust the width as per your design
          height={10.85} // Adjust the height as per your design
        />
      </div>
      <p className=" ml-2 p-1  h-[100px] pr-2 mt-3 mb-8 text-justify text-[16px] font-poppins font-semibold leading-[21px] ">
        {content}
      </p>
      <hr className=" mx-auto w-[322px]" />
      <div className=" my-auto h-[100px] flex flex-col justify-center items-center">
        <div className="text-[14px] w-full  font-poppins font-semibold flex justify-between  p-4 ">
          <p className="w-[108px]  text-[#657982] flex gap-3 ">
            <Image
              className=""
              src="/assets/uil_calender.svg"
              alt="Blog image"
              width={13.82} // Adjust the width as per your design
              height={10.85} // Adjust the height as per your design
            />
            <span>{date}</span>
          </p>
          <a href="#">
            <button className="text-[#FF543E] leading-[21px] ">
              READ MORE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
