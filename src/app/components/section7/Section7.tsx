import Image from "next/image";

function Section7() {
  return (
    <section className="">
      <div className="h-[735px] md:h-[742px] mb-10 md:mb-20">
        <div className="h-[459px] bg-[#F8F7FC]"></div>

        {/* part-2 */}
        <div className="mt-20 relative -top-96 mx-auto flex flex-col gap-6 items-center justify-center">
          <div className="w-[348px] h-[105px] flex flex-col p-1 justify-start items-center">
            <div className="text-[#FF5A3C] w-[150px] h-[43.61px] p-2 text-center rounded-3xl bg-[#FFEAEA] font-nunito font-bold text-[14px] md:text-[16px] flex justify-center items-center">
              Our Testimonials
            </div>
            <span className="text-[24px] md:text-[44px] font-Poppins font-bold whitespace-nowrap">
              Clients Feedback
            </span>
          </div>

          {/* card section */}
          <div className="flex flex-wrap gap-4">
            {/* First Card (Always Visible) */}
            <div
              className="flex flex-col text-lg rounded-none w-[350px] h-[461px]"
              role="article"
              aria-label="Customer Testimonial"
            >
              <div className="flex flex-col px-3.5 py-7 w-full h-full bg-white rounded-md shadow-[0px_5px_14px_rgba(0,0,0,0.07)]">
                <blockquote className="leading-8 text-gray-400 overflow-hidden text-ellipsis">
                  Keith helped out our company more times than I can count.
                  Between negotiating multiple separate spaces for us, and
                  assisting through those office transitions he became a
                  knowledgeable friend for everything we needed in the
                  commercial space. Anytime anyone asks me for a recommendation
                  on commercial properties I ALWAYS pass along his information.
                </blockquote>
                <div className="flex gap-2 items-start self-start mt-5 font-semibold leading-10 text-gray-800">
                  <Image
                    src="/assets/av1.png"
                    className="object-contain shrink-0 mt-2 rounded-full aspect-square w-[51px]"
                    alt="Profile photo of Shane Sullivan"
                    width={51} // width of the profile picture
                    height={51} // height of the profile picture
                    loading="lazy"
                  />
                  <div className="basis-auto">Shane Sullivan</div>
                </div>
              </div>
            </div>

            {/* Second Card (Hidden on Mobile) */}
            <div
              className="hidden md:flex flex-col text-lg rounded-none w-[350px] h-[461px]"
              role="article"
              aria-label="Customer Testimonial"
            >
              <div className="flex flex-col px-3.5 py-7 w-full h-full bg-white rounded-md shadow-[0px_5px_14px_rgba(0,0,0,0.07)]">
                <blockquote className="leading-8 text-gray-400 overflow-hidden text-ellipsis">
                  Keith helped out our company more times than I can count.
                  Between negotiating multiple separate spaces for us, and
                  assisting through those office transitions he became a
                  knowledgeable friend for everything we needed in the
                  commercial space. Anytime anyone asks me for a recommendation
                  on commercial properties I ALWAYS pass along his information.
                </blockquote>
                <div className="flex gap-2 items-start self-start mt-5 font-semibold leading-10 text-gray-800">
                  <Image
                    src="/assets/av2.png"
                    className="object-contain shrink-0 mt-2 rounded-full aspect-square w-[51px]"
                    alt="Profile photo of Shane Sullivan"
                    width={51}
                    height={51}
                    loading="lazy"
                  />
                  <div className="basis-auto">Shane Sullivan</div>
                </div>
              </div>
            </div>

            {/* Third Card (Hidden on Mobile) */}
            <div
              className="hidden md:flex flex-col text-lg rounded-none w-[350px] h-[461px]"
              role="article"
              aria-label="Customer Testimonial"
            >
              <div className="flex flex-col px-3.5 py-7 w-full h-full bg-white rounded-md shadow-[0px_5px_14px_rgba(0,0,0,0.07)]">
                <blockquote className="leading-8 text-gray-400 overflow-hidden text-ellipsis">
                  Keith helped out our company more times than I can count.
                  Between negotiating multiple separate spaces for us, and
                  assisting through those office transitions he became a
                  knowledgeable friend for everything we needed in the
                  commercial space. Anytime anyone asks me for a recommendation
                  on commercial properties I ALWAYS pass along his information.
                </blockquote>
                <div className="flex gap-2 items-start self-start mt-5 font-semibold leading-10 text-gray-800">
                  <Image
                    src="/assets/av3.png"
                    className="object-contain shrink-0 mt-2 rounded-full aspect-square w-[51px]"
                    alt="Profile photo of Shane Sullivan"
                    width={51}
                    height={51}
                    loading="lazy"
                  />
                  <div className="basis-auto">Shane Sullivan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section7;
