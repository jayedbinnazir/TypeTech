import CardSection7 from "./CardSection7";

function Section7() {
  return (
    <div className=" h-[578.67px] w-[361px] md:w-full mx-auto  md:h-[742px] mb-10 md:mb-20">
      <div className="h-[459px] bg-[#F8F7FC]"></div>

      {/* start */}
      <div className="  -mt-80  flex flex-col gap-8 items-center mx-auto my-[120px] w-[361px] md:w-[1090px] h-[578.67px] md:h-[622px] ">
        <div className=" flex flex-col justify-between items-center  w-[222px] md:w-[407px] h-[97px] md:h-[91px]">
          <p className="rounded-[25px] p-2 bg-[#FFEAEA] flex items-center justify-center text-center border-2 border-[#FFEAEA]  font-nunito text-[#FF543E] text-[14px] md:text-[16px] font-bold ">
            Our Testimonials
          </p>
          <p className=" whitespace-nowrap  flex items-center text-center  leading-[45px] font-bold font-poppins text-[24px] md:text-[44px] ">
            Clients Feedback
          </p>
        </div>

        {/* Card */}

        <div className=" gap-4  flex justify-center items-center w-full h-[393px] md:h-[461px] ">
          <CardSection7
            avatar={"/assets/av1.png"}
            content={
              "Keith helped out our company more times than I can count. Between negotiating multiple sepa- rate spaces for us, and assisting through those office transitions he became a knowledgeable friend for everything we needed in the com- mercial space. Anytime anyone asks me for a recommendation on commercial properties I ALWAYS pass along his information."
            }
            author={"Shane Sullivan"}
          />
          <CardSection7
            avatar={"/assets/av2.png"}
            content={
              "Keith helped out our company more times than I can count. Between negotiating multiple sepa- rate spaces for us, and assisting through those office transitions he became a knowledgeable friend for everything we needed in the com- mercial space. Anytime anyone asks me for a recommendation."
            }
            author={"Shane Sullivan"}
            hidden={"hidden"}
          />
          <CardSection7
            avatar={"/assets/av3.png"}
            content={
              "Keith helped out our company more times than I can count. Between negotiating multiple sepa- rate spaces for us, and assisting through those office transitions he became a knowledgeable friend for everything we needed in the com- mercial space. Anytime anyone free."
            }
            author={"Shane Sullivan"}
            hidden={"hidden"}
          />
        </div>
      </div>
    </div>
  );
}

export default Section7;
