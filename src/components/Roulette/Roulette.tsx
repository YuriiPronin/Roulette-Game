import { useState, useEffect } from "react";

import RouletteItem from "../RouletteItem/RouletteItem";
import { CountBoxType } from "../RouletteItem/RouletteItem";

type Props = {
  structure: CountBoxType[];
  activeIndex: number | null;
};

const Roulette = ({ structure, activeIndex }: Props) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (activeIndex !== null) {
      requestAnimationFrame(() => setShouldAnimate(true));
    }
  }, [activeIndex]);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className={`flex gap-4 ${
          shouldAnimate ? "transition-transform duration-700" : ""
        }`}
        style={{
          transform:
            activeIndex !== null
              ? `translateX(-${activeIndex * 104}px)`
              : undefined,
        }}
      >
        {structure.map((type: CountBoxType, index: number) => (
          <RouletteItem key={index} type={type} />
        ))}
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#15161a] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#15161a] to-transparent z-10" />
    </div>
  );
};

export default Roulette;
