"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import CountBox from "../CountBox/CountBox";
import { CountBoxType } from "../RouletteItem/RouletteItem";

import grey_zone from "../../images/grey_zone.svg";
import red_zone from "../../images/red_zone.svg";
import green_zone from "../../images/green_zone.svg";
import joker from "../../images/red_joker.svg";

const RouletteHeader = () => {
  const [redCount, setRedCount] = useState(0);
  const [greyCount, setGreyCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [jokerCount, setJokerCount] = useState(0);

  const syncFromCookies = () => {
  const data = JSON.parse(Cookies.get("last100") || "[]") as CountBoxType[];

  const count = data.reduce(
    (acc, type) => {
      acc[type]++;
      return acc;
    },
    { red: 0, grey: 0, green: 0, joker: 0 }
  );

  setRedCount(count.red);
  setGreyCount(count.grey);
  setGreenCount(count.green);
  setJokerCount(count.joker);
};

  useEffect(() => {
    syncFromCookies();

    const interval = setInterval(syncFromCookies, 1000);
    return () => clearInterval(interval);
  }, []);

  const spinHistory = [
    grey_zone,
    red_zone,
    grey_zone,
    green_zone,
    grey_zone,
    red_zone,
    red_zone,
    grey_zone,
    joker,
    red_zone,
  ];

  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-2">
        {spinHistory.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="roulette example zone"
            width={32}
            height={32}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2 items-center">
          <p className="font-[var(--font-geist-sans)] text-[14px] font-medium text-[#FCFFFE66]">
            LAST 100
          </p>

          <CountBox icon={red_zone} count={redCount} />
        </div>
        <CountBox icon={grey_zone} count={greyCount} />
        <CountBox icon={green_zone} count={greenCount} />
        <CountBox icon={joker} count={jokerCount} />
      </div>
    </div>
  );
};

export default RouletteHeader;
