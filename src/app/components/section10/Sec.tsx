import Card from "./Card";

function Sec() {
  return (
    <div className="  flex flex-col justify-between items-center mx-auto my-[120px] w-[361px] md:w-[1090px] h-[662px] md:h-[629px] ">
      <div className=" flex flex-col justify-between items-center  w-[222px] md:w-[407px] h-[97px] md:h-[91px]">
        <p className="rounded-[25px] bg-[#FFEAEA] flex items-center justify-center text-center border-2 border-[#FFEAEA]  font-nunito text-[#FF543E] text-[14px] md:text-[16px] font-bold p-1 px-2">
          Our Blog
        </p>
        <p className=" whitespace-nowrap  flex items-center text-center  leading-[45px] font-bold font-poppins text-[24px] md:text-[44px] ">
          Leatest Blog Posts
        </p>
      </div>
      <div className="  w-[361px] md:w-[1090px] h-[480px] md:h-[480px] flex  flex-row justify-center items-center md:gap-4 ">
        <Card
          image={"/assets/blog1.png"}
          content={
            "Exploring the Future of Cypress Creek: A New Hub for Office Leasing and Investment Opportunities"
          }
          date={"2024-09-25"}
        />
        <Card
          image={"/assets/blog2.png"}
          content={
            "Unlocking the Benefits: Why Leasing Modern Industrial Facilities in South Florida is Key to Meeting Miami’s Rising Cooler Demand"
          }
          date={"2024-09-11"}
          display={"hidden"}
        />
        <Card
          image={"/assets/blog3.png"}
          content={
            "Unlocking the Benefits: Why Leasing Modern Industrial Facilities in South Florida is Key to Meeting Miami’s Rising Cooler Demand"
          }
          date={"2024-09-22"}
          display={"hidden"}
        />
      </div>
    </div>
  );
}

export default Sec;
