import type { StaticImageData } from 'next/image';

import Image from "next/image";

const CountBox = ({ icon, count }: { icon: StaticImageData; count: number }) => (
  <div className="flex gap-2 items-center">
    <Image src={icon} alt="roulette example zone" width={24} height={24} />
    <p className="font-[var(--font-geist-sans)] text-[14px] font-medium text-[#FFF]">
      {count}
    </p>
  </div>
);

export default CountBox
