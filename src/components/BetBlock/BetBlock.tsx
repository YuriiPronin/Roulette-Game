import { redUsers, greenUsers, greyUsers, jokerUsers } from "@/mocks/mockUsers";
import { itemsPayout } from "@/mocks/mockConfig";

import BetColumn from "../BetColumn/BetColumn";

type BetType = "red" | "green" | "grey" | "joker";

type CountBoxUser = {
  user: string;
  amount: number
};

const getUserByType = (type: BetType): CountBoxUser[] => {
  switch (type) {
    case "red":
      return redUsers;
    case "green":
      return greenUsers;
    case "grey":
      return greyUsers;
    case "joker":
      return jokerUsers;
    default:
      return [];
  }
};

const BetBlock = () => {
  return (
    <div className="w-full flex gap-8">
      {itemsPayout.map((item, index) => (
        <BetColumn
          key={index}
          type={item.type}
          payout={item.payout}
          users={getUserByType(item.type)}
          // onClick={() => handleBet(item.type)} // If/When there is a functionality
        />
      ))}
    </div>
  );
};

export default BetBlock;
