import Image from "next/image";
import user_mark from "../../images/user_mark.svg";

type BetUser = {
  user: string;
  amount: number;
};

type Props = {
  type: "red" | "green" | "grey" | "joker";
  payout: number;
  users: BetUser[];
  onClick?: () => void;
};

const BetColumn = ({ type, payout, users, onClick }: Props) => {
  const colorMap = {
    red: "bg-[#F43F5E]",
    green: "bg-[#22C55E]",
    grey: "bg-[#262B34]",
    joker: "bg-[#8B5CF6]",
  };

  const label = {
    red: "BET ON RED",
    green: "BET ON GREEN",
    grey: "BET ON GREY",
    joker: "BET ON JOKER",
  };

  return (
    <div className="flex flex-col gap-2 flex-1 min-w-[280px]">
      <button
        type="button"
        onClick={onClick}
        className={`flex justify-between items-center px-4 py-2 rounded-t-md ${colorMap[type]}`}
      >
        <span className="text-sm font-bold text-white">{label[type]}</span>
        <span className="text-sm font-bold text-white">PAYS {payout}X</span>
      </button>

      <div className="bg-[#1B1E23] px-4 py-2 rounded-b-md">
        <div className="flex justify-between text-sm text-white mb-2">
          <span>{users.length} Bets total</span>
          <span>{users.reduce((sum, u) => sum + u.amount, 0).toFixed(2)}</span>
        </div>

        {users.map((u, i) => (
          <div
            key={i}
            className="flex justify-between items-center text-white text-sm py-1 px-2 rounded-md hover:bg-[#2c2f35]"
          >
            <span className="flex gap-[9px]">
              <Image src={user_mark} alt="user mark" width={11} height={15} />{" "}
              {u.user}
            </span>
            <span>{u.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetColumn;
