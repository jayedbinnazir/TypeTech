import Image from "next/image";

export default function TopNav() {
  return (
    <div className="top-nav  p-2 md:p-1 fixed flex justify-center  flex-wrap bg-transparent z-20 w-full shadow-lg transition-all duration-300">
      <div className="basis-1/2 flex gap-2 p-2 font-Poppins font-bold text-[16px] text-[#FFFFFF]">
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
  );
}
