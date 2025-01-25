import Image from "next/image";
export default function Section4() {
  return (
    <section className="mt-4 mx-auto flex flex-col gap-6 items-center justify-center">
      <div className="w-[348px] h-[105px] flex flex-col p-1 justify-start items-center">
        <div className="text-[#FF5A3C] w-[135px] h-[43.61px] p-2 text-center rounded-3xl bg-[#FFEAEA] font-nunito font-bold text-[14px] md:text-[16px] flex justify-center items-center">
          Our Service
        </div>
        <span className="text-[24px] md:text-[44px] font-Poppins font-bold">
          Our Main focus
        </span>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="shadow-[0_5px_10px_4px_rgba(0,0,0,0.1)] p-4 w-[258px] flex flex-col justify-center items-center gap-2">
          <Image
            src="/assets/icon.png"
            alt="Corporate Relocation Icon 1"
            className="w-[187px] h-[142px]"
            width={187}
            height={142}
          />
          <p className="p-1 font-Poppins font-bold text-[24px] flex flex-col items-center justify-center leading-[1]">
            Corporate <span>Relocation</span>
          </p>
          <p className="grow w-[236px] h-[250px] text-[14px] text-center text-[#5C727D] py-5">
            RISE Realty provides top-notch corporate relocation services
            designed just for you. Whether you&apos;re growing your business or
            shifting headquarters, our experienced team will find the perfect
            location to meet your goals. Count on us for a smooth transition
            that sets your business up for success!
          </p>
          <button>
            <a className="text-[#92B7B6] font-bold font-Poppins">
              Find A Location-&gt;
            </a>
          </button>
        </div>

        <div className="shadow-[0_5px_10px_4px_rgba(0,0,0,0.1)] p-4 w-[258px] flex flex-col justify-center items-center gap-2">
          <Image
            src="/assets/icon (1).png"
            alt="Corporate Relocation Icon 2"
            className="w-[187px] h-[142px]"
            width={187}
            height={142}
          />
          <p className="p-1 font-Poppins font-bold text-[24px] flex flex-col items-center justify-center leading-[1]">
            Corporate <span>Relocation</span>
          </p>
          <p className="grow w-[236px] h-[250px] text-[14px] text-center text-[#5C727D] py-5">
            RISE Realty provides top-notch corporate relocation services
            designed just for you. Whether you&apos;re growing your business or
            shifting headquarters, our experienced team will find the perfect
            location to meet your goals. Count on us for a smooth transition
            that sets your business up for success!
          </p>
          <button>
            <a className="text-[#92B7B6] font-bold font-Poppins">
              Find A Location-&gt;
            </a>
          </button>
        </div>

        <div className="shadow-[0_5px_10px_4px_rgba(0,0,0,0.1)] p-4 w-[258px] flex flex-col justify-center items-center gap-2">
          <Image
            src="/assets/icon (2).png"
            alt="Corporate Relocation Icon 3"
            className="w-[187px] h-[142px]"
            width={187}
            height={142}
          />
          <p className="p-1 font-Poppins font-bold text-[24px] flex flex-col items-center justify-center leading-[1]">
            Corporate <span>Relocation</span>
          </p>
          <p className="grow w-[236px] h-[250px] text-[14px] text-center text-[#5C727D] py-5">
            RISE Realty provides top-notch corporate relocation services
            designed just for you. Whether you&apos;re growing your business or
            shifting headquarters, our experienced team will find the perfect
            location to meet your goals. Count on us for a smooth transition
            that sets your business up for success!
          </p>
          <button>
            <a className="text-[#92B7B6] font-bold font-Poppins">
              Find A Location-&gt;
            </a>
          </button>
        </div>

        <div className="shadow-[0_5px_10px_4px_rgba(0,0,0,0.1)] p-4 w-[258px] flex flex-col justify-center items-center gap-2">
          <Image
            src="/assets/icon (3).png"
            alt="Corporate Relocation Icon 4"
            className="w-[187px] h-[142px]"
            width={187}
            height={142}
          />
          <p className="p-1 font-Poppins font-bold text-[24px] flex flex-col items-center justify-center leading-[1]">
            Corporate <span>Relocation</span>
          </p>
          <p className="grow w-[236px] h-[250px] text-[14px] text-center text-[#5C727D] py-5">
            RISE Realty provides top-notch corporate relocation services
            designed just for you. Whether you&apos;re growing your business or
            shifting headquarters, our experienced team will find the perfect
            location to meet your goals. Count on us for a smooth transition
            that sets your business up for success!
          </p>
          <button>
            <a className="text-[#92B7B6] font-bold font-Poppins">
              Find A Location-&gt;
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
