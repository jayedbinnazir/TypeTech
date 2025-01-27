import CardSection4 from "./CardSection4";
export default function Section4() {
  return (
    <section className="  w-[361px] mt-16 mx-auto flex flex-col gap-6 items-center justify-center">
      <div className="  w-[348px] h-[105px] flex flex-col p-1 justify-start items-center">
        <div className="text-[#FF5A3C]  p-1 px-2 text-center rounded-3xl bg-[#FFEAEA] font-nunito font-bold text-[14px] md:text-[16px] flex justify-center items-center">
          Our Service
        </div>
        <span className="text-[24px] md:text-[44px] font-poppins font-bold">
          Our Main focus
        </span>
      </div>

      <div className="flex flex-col w-[361px] md:w-[1090px] justify-center items-center md:flex-row gap-4 ">
        <CardSection4
          logo={"/assets/icon.png"}
          title={"Corporate Relocation"}
          content={
            "RISE Realty provides top-notch corporate relocation services de signed just for you. Whether you're growing your business or shifting headquarters, our experi enced team will find the perfect location to meet your goals. Count on us for a smooth transi tion that sets your business up for success!"
          }
        />
        <CardSection4
          logo={"/assets/icon (1).png"}
          title={"Tenant Representation"}
          content={
            "RISE Realty provides top-notch corporate relocation services de signed just for you. Whether you're growing your business or shifting headquarters, our experi enced team will find the perfect location to meet your goals. Count on us for a smooth transi tion that sets your business up for success!"
          }
        />
        <CardSection4
          logo={"/assets/icon (2).png"}
          title={"Residential Leasing & Sales"}
          content={
            "RISE Realty provides top-notch corporate relocation services de signed just for you. Whether you're growing your business or shifting headquarters, our experi enced team will find the perfect location to meet your goals. Count on us for a smooth transi tion that sets your business up for success!"
          }
        />
        <CardSection4
          logo={"/assets/icon (3).png"}
          title={"Serviced Offices"}
          content={
            "RISE Realty provides top-notch corporate relocation services de signed just for you. Whether you're growing your business or shifting headquarters, our experi enced team will find the perfect location to meet your goals. Count on us for a smooth transi tion that sets your business up for success!"
          }
        />
      </div>
    </section>
  );
}
