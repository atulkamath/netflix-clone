import Link from "next/link";
import Image from "next/image";

export default function error404() {
  return (
    <div
      className="fixed w-screen h-screen bg-cover"
      style={{
        "background-image":
          "url(https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png)",
      }}
    >
      <header className="flex items-start justify-start w-full h-16 bg-black">
        <div className="px-8">
          <Link href="/">
            <Image src="/netflix-3.svg" height={60} width={90} />
          </Link>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center text-center text-white h-70v drop-shadow-4xl md:h-4/6 ">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl ">
          Lost Your way?
        </h1>
        <h3 className="px-20 mt-4 text-sm font-light md:text-lg md:px-48 lg:text-2xl lg:px-96">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </h3>
        <Link href="/">
          <button className="p-1 px-4 mt-3 text-xs font-bold text-black bg-white rounded-md lg:px-6 lg:py-2 lg:text-lg ">
            Netflix Home
          </button>
        </Link>
        <div className="fixed bottom-0 flex items-center justify-center pl-2 mb-2 text-sm tracking-wider text-white border-l-2 font-extralight border-netflix-red lg:text-3xl lg:mb-10">
          Error Code &nbsp; <span className="font-bold"> NSES-404</span>
        </div>
      </section>
      <div className="fixed bottom-0 right-0 m-6 text-xs text-gray-400 md:text-lg lg:text-xl drop-shadow-4xl ">
        From <span className="text-gray-300">Lost in Space</span>
      </div>
    </div>
  );
}
