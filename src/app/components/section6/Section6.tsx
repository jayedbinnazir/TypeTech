import Image from "next/image";

export default function Section6() {
  return (
    <section className="w-full h-[319px] border-2  lg:w-[1422px] lg:h-[319px] relative mt-16  mx-auto">
      {/* Video Player */}
      <video
        id="videoPlayer"
        className="w-full h-full object-cover hidden"
        controls
        aria-label="Property video player"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cover Image */}
      <div
        id="coverImage"
        className="absolute inset-0 w-full h-full bg-black flex items-center justify-center cursor-pointer"
        style={{
          backgroundImage: 'url("/assets/video.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <Image
            src="/assets/play.svg"
            alt="Play video"
            className="w-6 h-6 md:w-8 md:h-8"
            width={32} // width of the play button icon
            height={32} // height of the play button icon
          />
        </button>
      </div>
    </section>
  );
}
