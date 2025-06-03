"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import RouletteHeader from "@/components/RouletteHeader/RouletteHeader";
import Roulette from "@/components/Roulette/Roulette";
import MiddleStatusBar from "@/components/MiddleStatusBar/MiddleStatusBar";
import BetBlock from "@/components/BetBlock/BetBlock";

import { CountBoxType } from "@/components/RouletteItem/RouletteItem";

const BASE_STRUCTURE: CountBoxType[] = [
  "grey",
  "red",
  "grey",
  "green",
  "grey",
  "red",
  "red",
  "grey",
  "joker",
  "red",
];

const REPEAT_TIMES = 10;

const rouletteStructure: CountBoxType[] = Array(REPEAT_TIMES)
  .fill(BASE_STRUCTURE)
  .flat();

export default function Home() {
  const [lastResultIndex, setLastResultIndex] = useState<number | null>(null);

  const addToLast100 = (type: CountBoxType) => {
  const prev = JSON.parse(Cookies.get("last100") || "[]") as CountBoxType[];
  const updated = [...prev, type].slice(-100);
  Cookies.set("last100", JSON.stringify(updated));
};


  const spinRoulette = () => {
  const resultIndex = Math.floor(Math.random() * rouletteStructure.length);
  const resultType = rouletteStructure[resultIndex];

  addToLast100(resultType);
  setLastResultIndex(resultIndex);
};


  useEffect(() => {
    spinRoulette();
    const interval = setInterval(spinRoulette, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#15161a] min-h-screen px-20 pt-6 pb-16 flex flex-col gap-8">
      <RouletteHeader />
      <Roulette structure={rouletteStructure} activeIndex={lastResultIndex} />
      <MiddleStatusBar />
      <BetBlock />
    </main>
  );
}
