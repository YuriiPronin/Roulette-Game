type ItemsType = {
  type: "red" | "green" | "grey" | "joker";
  payout: number
}

export const itemsPayout: ItemsType[] = [
  {
    type: "red",
    payout: 2,
  },
  {
    type: "green",
    payout: 14,
  },
  {
    type: "grey",
    payout: 2,
  },
  {
    type: "joker",
    payout: 7,
  },
];