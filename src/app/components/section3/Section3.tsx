import Image from "next/image";

export default function Section3() {
  return (
    <section className="bg-[#F2F6F7]">
      <div className="bg-[#F2F6F7] mt-4 md:h-[402px] py-20 flex flex-col md:flex-row justify-center items-center gap-20">
        <Image
          src="/assets/Years of Experience (1).svg"
          alt="Years of Experience 1"
          className="w-[161px] h-[197px]"
          width={161}
          height={197}
        />
        <Image
          src="/assets/Years of Experience.svg"
          alt="Years of Experience"
          className="w-[161px] h-[197px]"
          width={161}
          height={197}
        />
        <Image
          src="/assets/Square Footage Sold.svg"
          alt="Square Footage Sold"
          className="w-[161px] h-[197px]"
          width={161}
          height={197}
        />
        <Image
          src="/assets/Transactions Closed.svg"
          alt="Transactions Closed"
          className="w-[161px] h-[197px]"
          width={161}
          height={197}
        />
      </div>
      <div className="  flex justify-center py-10 ">
        <Image
          loading="lazy"
          src="/assets/Options.svg"
          alt={`Profile picture }`}
          width={152}
          height={12}
        />
      </div>
    </section>
  );
}
