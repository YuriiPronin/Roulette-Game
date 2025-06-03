import Image from "next/image";
import { StaticImageData } from "next/image";

import grey_zone from "../../images/grey_zone.svg";
import red_zone from "../../images/red_zone.svg";
import green_zone from "../../images/green_zone.svg";
import joker from "../../images/red_joker.svg";

export type CountBoxType = 'red' | 'grey' | 'green' | 'joker';

type Props = {
  type: CountBoxType;
};

const RouletteItem = ({ type }: Props) => {
  const iconMap: Record<CountBoxType, StaticImageData> = {
    red: red_zone,
    grey: grey_zone,
    green: green_zone,
    joker: joker,
  };

  return (
    <div className="w-[100px] h-[100px] rounded-[8px] shrink-0" data-id={type}>
      <Image src={iconMap[type]} alt={`${type} zone`} width={100} height={100}/>
    </div>
  );
};

export default RouletteItem;
