const Page = () => {
  return (
    <div className="min-h-screen w-full">
      <div id="overlay" className="h-screen text-white/90 font-[inter-bold] overflow-hidden mask-[linear-gradient(to_top,transparent,black_40%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_40%)]">
        <section
          id="landing-section"
          className="relative min-h-screen w-full flex flex-col justify-center bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover"
        >
          <nav className="absolute top-0 w-full flex items-center justify-between p-5 sm:px-30 sm:py-5 text-lg sm:text-2xl">
            <div className="flex items-center">
              <img src={"/logo.png"} className="h-6 w-6 sm:h-8 sm:w-8"></img>
              <h1 className="pl-1 font-[inter-bold] text-black/85">ChatMap</h1>
            </div>
            <button className="px-3 py-1 bg-white hover:bg-white/60 transition-all duration-50 ease-in ">
              <a
                href="#generate"
                className="text-[15px] sm:text-xl text-black/85 font-[inter-regular]"
              >
                Generate
              </a>
            </button>
          </nav>
          <header className="font-stretch-ultra-condensed flex flex-col items-center text-black/85">
            <h1 className="px-2 text-5xl sm:text-7xl mb-5 leading-none text-center tracking-tight font-[inter-bold]">
              Turn<span className="font-[instrument]"> Chatgpt </span>
              conversations into
              <br></br>clean<span className="font-[instrument]"> pdfs </span>{" "}
              and<span className="font-[instrument]"> mindmaps.</span>
            </h1>
            <h2 className="text-center text-md px-5 mb-5 sm:text-xl text-black/70 font-[inter-regular]">
              Paste a chat. Click generate. Download clarity
            </h2>
            <button className="px-4 py-2 bg-black/90 hover:bg-black/80 transition-all duration-100 ease-in ">
              <a
                href="#generate"
                className="text-xl text-white/90 font-[inter-regular]"
              >
                Generate
              </a>
            </button>
          </header>
        </section>
      </div>
      <section
        id="generate"
        className="min-h-screen w-full flex justify-center"
      >
      </section>
    </div>
  );
};

export default Page;
