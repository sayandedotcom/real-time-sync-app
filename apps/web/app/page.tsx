"use client";

import { Lights } from "@/components/light";
import { List } from "@/components/lists";

export default function Home() {
  return (
    <div className="w-screen h-screen block">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className={"w-full h-full relative bg-grid-white/[0.03] px-4"}>
        <div
          className={
            "w-full h-[100px] flex flex-col sm:items-center items-start justify-center relative animate-moveUp"
          }
        >
          {/* <div className="relative w-full">
            <div className="bg-gradient-to-br from-green-950/[0.8] to-blue-950/[0.7] border border-green-900 rounded-lg p-1 aspect-square overflow-hidden absolute left-0 sm:left-1/2 sm:-translate-x-1/2 -top-12">
              <span className="text-xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-yellow-400 ">
                ✨
              </span>
            </div>
          </div> */}
          <div
            className={
              "text-transparent sm:text-center text-start font-bold sm:text-4xl text-3xl bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-black/[0.6]"
            }
          >
            Realtime Sync List
          </div>
          {/* <div className="text-white/[0.7] sm:text-center text-start">
            Trusted by Trusted Companies and Trusted People
          </div> */}
          {/* <div className="mt-5 w-full flex max-sm:flex-col justify-center sm:gap-10 gap-4 text-white">
            <button className="group h-10 sm:h-8 w-full sm:w-36 bg-gradient-to-br from-green-950 to-blue-950 border border-green-900 rounded-lg flex items-center justify-center gap-1.5">
              <span>Our Work</span>
              <span className="group-hover:translate-x-0.5 transition-all">
                &rarr;
              </span>
            </button>
            <button className="h-8 flex items-center justify-center underline">
              <span>contact us</span>
            </button>
          </div> */}
        </div>
        {/* <div
          className={
            "absolute bottom-0 left-0 w-full h-full z-0 animate-appear opacity-0"
          }
        >
          <Lights />
        </div> */}
        <List />
      </div>
    </div>
  );
}

// <div className="p-5 bg-[#0F0F0F] bg-[radial-gradient(ellipse_at_top_left,rgba(19,238,227,0.5)_0%,transparent_40%)] h-screen">
