"use client";

import { List } from "@/components/lists";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-2xl text-center font-bold mb-4">
        Realtime Sync List ! 🔁
      </h1>
      <List />
    </div>
  );
}
