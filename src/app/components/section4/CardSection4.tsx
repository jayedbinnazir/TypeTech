import Image from "next/image";

type Card<T> = {
  logo: T;
  title: T;
  content: T;
};

function CardSection4({ logo, title, content }: Card<string>) {
  return (
    <div className=" bg-[#FFFFFF] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-4 w-full md:w-[258px] flex flex-col  justify-center items-center gap-4">
      <Image
        src={logo}
        alt="Corporate Relocation Icon 1"
        className="w-[187px] h-[142px]"
        width={187}
        height={142}
      />
      <p className="p-1 font-poppins font-bold text-[24px] flex flex-col items-center text-center justify-center leading-[1]">
        {title}
      </p>
      <p className="grow w-[236px] h-[250px] text-[14px] text-center text-[#5C727D] py-5">
        {content}
      </p>
      <button>
        <a className="text-[#92B7B6] font-bold font-poppins">
          Find A Location-&gt;
        </a>
      </button>
    </div>
  );
}

export default CardSection4;
