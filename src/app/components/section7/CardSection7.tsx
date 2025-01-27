import Image from "next/image";
type CardProp<T> = {
  avatar: T;
  content: T;
  author: T;
  hidden?: T;
};
function CardSection7({ avatar, content, author, hidden }: CardProp<string>) {
  return (
    <div
      className={` ${hidden} md:block flex flex-col justify-evenly w-[361px] md:w-[350px] pb-8 rounded bg-[#FFFFFF] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`}
    >
      <p className="px-4 py-2 font-poppins text-[14px] md:text-[18px] leading-[30px] text-[#84959C] text-left">
        {content}
      </p>

      <div className="flex gap-2 px-3">
        <Image
          src={avatar}
          className="object-contain shrink-0 mt-2 rounded-full aspect-square w-[51px]"
          alt="Profile photo of Shane Sullivan"
          width={51} // width of the profile picture
          height={51} // height of the profile picture
          loading="lazy"
        />
        <div className="flex flex-col justify-end">
          <p className="font-poppins font-semibold leading-[20px] text-[18px]">
            {author}
          </p>
          <p className="font-poppins text-[14px] leading-[20px] text-[#99A6AC]">
            PROPERTYFORCE
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardSection7;
