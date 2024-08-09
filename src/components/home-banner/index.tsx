import Image from "next/image";

const Banner = function () {
  return (
    <div className="max-w-6xl w-[95vw] mx-auto py-10">
      <div className="relative">
        <Image
          src="/paper-bg.jpg"
          alt="paper-bg"
          width={0}
          height={0}
          sizes="100vw"
          className="h-72 w-full"
        />
        <div className="absolute inset-0 h-full w-[50%] rounded-lg bg-gray-950 opacity-30" />
        <Image
          src={"/book.png"}
          alt="billboard"
          className="absolute bottom-0 right-5"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "18rem" }}
        />
        <h3 className="absolute left-10 top-1/2 w-[90%] max-w-3xl -translate-y-1/2 text-2xl lg:text-4xl font-semibold tracking-tight text-[#fff]">
          Connect, Share and Trade Your Favourite Reads...
        </h3>
      </div>
    </div>
  );
};

export default Banner;
