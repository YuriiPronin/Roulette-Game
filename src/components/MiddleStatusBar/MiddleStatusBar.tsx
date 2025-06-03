import Image from "next/image"

import coin from '../../images/coin_icon.svg'

const MiddleStatusBar = () => {
  return(
    <div className="w-[500px] flex justify-between items-center mx-auto">
      <Image src={coin} alt="coin icon" width={16} height={16} />
      <div className="flex gap-[2px] items-center pl-3 py-1">
        <div className="bg-[#343843] w-[51px] h-[36px] rounded-[8px]" />
        <div className="bg-[#343843] w-[51px] h-[36px] rounded-[8px]" />
        <div className="bg-[#343843] w-[51px] h-[36px] rounded-[8px]" />
      </div>
    </div>
  )
}

export default MiddleStatusBar