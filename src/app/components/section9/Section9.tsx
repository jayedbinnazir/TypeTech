import Image from "next/image";

function Section9() {
  return (
    <section className="h-[344px] bg-[#F2F6F7] flex justify-center items-center gap-4">
      <Image
        src="/assets/image 84.png"
        className="h-[175px] md:w-[175px]"
        alt="Image 84"
        width={175} // Width of the image
        height={175} // Height of the image
        loading="lazy"
      />
      <Image
        src="/assets/image 83.png"
        className="hidden md:block h-[175px] w-[175px]"
        alt="Image 83"
        width={175}
        height={175}
        loading="lazy"
      />
      <Image
        src="/assets/image 82.png"
        className="hidden md:block h-[175px] w-[175px]"
        alt="Image 82"
        width={175}
        height={175}
        loading="lazy"
      />
      <Image
        src="/assets/image 81.png"
        className="hidden md:block h-[175px] w-[175px]"
        alt="Image 81"
        width={175}
        height={175}
        loading="lazy"
      />
      <Image
        src="/assets/image 80.png"
        className="hidden md:block h-[175px] w-[175px]"
        alt="Image 80"
        width={175}
        height={175}
        loading="lazy"
      />
    </section>
  );
}

export default Section9;
