import CardSec5 from "./CardSec5";
import Image from "next/image";

export default function Section5() {
  return (
    <section className="mt-20 mx-auto flex flex-col gap-6 items-center justify-center">
      <div className="w-[348px] h-[105px] flex flex-col p-1 justify-start items-center">
        <div className="text-[#FF5A3C] w-[135px] h-[43.61px] p-2 text-center rounded-3xl bg-[#FFEAEA] font-nunito font-bold text-[14px] md:text-[16px] flex justify-center items-center">
          Our Properties
        </div>
        <span className="text-[24px] md:text-[44px] font-poppins font-bold whitespace-nowrap">
          Featured Listings
        </span>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 px-4">
        {/* Card 1 */}
        <CardSec5
          price={"$966"}
          author={"Kavin Albert Krueger"}
          avatar={"/assets/Client image.png"}
          image={"/assets/image.png"}
          email={"Kevin@Riserealty.com"}
        />
        <CardSec5
          price={"$35/Square Ft"}
          author={"Keith Alan Darby"}
          avatar={"/assets/man.png"}
          image={"/assets/image (1).png"}
          email={"Kevin@Riserealty.com"}
        />
        <CardSec5
          price={"$966"}
          author={"Keith Alan Darby"}
          avatar={"/assets/man.png"}
          image={"/assets/image.png"}
          email={"Kevin@Riserealty.com"}
        />
      </div>
      <div className="p-4">
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
