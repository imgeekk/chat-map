"use client";

import { useState } from "react";
import { FiCornerDownLeft } from "react-icons/fi";
import SummaryView from "./components/SummaryView";
import { GeneratedOutput } from "@/types/output";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<GeneratedOutput | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong");
      }

      const data = await res.json();
      setOutput(data);
    } catch (err: any) {
      setError(err.message || "Failed to generate");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen w-full">
      <div
        id="overlay"
        className="h-screen text-white/90 font-[inter-bold] overflow-hidden mask-[linear-gradient(to_top,transparent,black_40%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_40%)]"
      >
        <section
          id="landing-section"
          className="relative min-h-screen w-full flex flex-col justify-center bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover"
        >
          <nav className="absolute top-0 w-full flex items-center justify-between p-5 sm:px-30 sm:py-5 text-lg sm:text-2xl">
            <div className="flex items-center">
              <img src={"/logo.png"} className="h-6 w-6 sm:h-8 sm:w-8"></img>
              <h1 className="pl-1 font-[inter-bold] text-black/85">ChatMap</h1>
            </div>
            <button className="px-3 py-1 bg-white hover:bg-white/60 transition-all duration-50 ease-in">
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
        className="min-h-screen w-full flex flex-col items-center justify-start pt-30"
      >
        <div className="w-full flex flex-col items-center justify-start px-5 font-[inter-regular]">
          <div
            id="textarea"
            className="relative w-full lg:w-200 bg-white/20 border border-black/20 shadow-xs shadow-black/30 rounded-md p-3"
          >
            <textarea
              name="chat"
              id="chat"
              placeholder="Paste your chat here"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="relative w-full h-30 border-0 outline-0 resize-none"
            ></textarea>
            <section className="flex items-center justify-end p-3">
              <button
                disabled={loading}
                className="bg-black/80 text-white px-2 py-1 rounded-sm flex items-center gap-1 hover:cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
                onClick={() => {
                  handleGenerate();
                }}
              >
                Generate <FiCornerDownLeft />
              </button>
            </section>
          </div>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : output ? (
          <SummaryView data={output} />
        ) : (
          <div></div>
        )}
      </section>
      <footer className="h-10">
        <h1 className="text-center text-black/70 font-[inter-regular] text-sm">
          ⓒ 2026 By Thahir
        </h1>
      </footer>
    </div>
  );
};

export default Page;
