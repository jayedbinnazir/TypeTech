import Image from "next/image";

export default function MainContent() {
  return (
    <div className="relative flex flex-col gap-2 justify-center items-center p-4 w-[100vw] h-[809px] bg-[url('/assets/Background.png')] bg-cover bg-center">
      {/* Transparent glass overlay with ash color */}
      <div
        className="absolute inset-0 bg-[#2f2f2f]"
        style={{ opacity: 0.55 }}
      ></div>

      {/* Content */}
      <div className="text-center z-10 font-nunito text-[16px] text-[#FFFFFF]">
        <div className="flex justify-center gap-3">
          <Image
            src="/assets/Icon.svg"
            alt="Real Estate Icon"
            width={24}
            height={24}
          />
          <p>Real Estate Agency</p>
        </div>
        <p className="font-semibold text-[65px] font-[Poppins] p-1 w-[400px] md:w-[600px] leading-[1]">
          Miami Real Estate Specialists
        </p>
      </div>
      <div className="w-[400px] z-10" style={{ opacity: 0.9 }}>
        <p className="font-nunito text-[16px] text-center text-[#FFFFFF]">
          RSIE Realty, your specialists in residential and commercial
          properties. From dream homes to prime business spaces, trust our
          unique expertise to guide you in Miami/South Florida&apos;s dynamic
          market.
        </p>
      </div>
    </div>
  );
}
