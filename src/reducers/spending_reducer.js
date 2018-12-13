import { REMOVE_POCKET_MONEY, ADD_POCKET_MONEY } from "./../actions/index";

import { addToBag } from "./helper";

export default function pocketMoney(state = 50, action) {
  switch (action.type) {
    case ADD_POCKET_MONEY:
      // console.log("Pocket Money added");
      let item = addToBag(action.id);
      let pocketMoney = state + item.cost;
      return pocketMoney;
      return state;
    case REMOVE_POCKET_MONEY:
      // console.log("Pocket Money Removed");
      item = addToBag(action.id);
      pocketMoney = state - item.cost;
      return pocketMoney;
      return state;
    default:
      return state;
  }
}
