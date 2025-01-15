"use client";

import { List } from "@/components/lists";

export default function Home() {
  return (
    <div className="p-5 bg-[#0F0F0F] bg-[radial-gradient(ellipse_at_top_left,rgba(19,238,227,0.5)_0%,transparent_40%)] h-screen">
      <h1 className="text-3xl text-center font-bold mb-4 font-sans">
        Realtime Sync List !
      </h1>
      <List />
    </div>
  );
}
