import { REMOVE_POCKET_MONEY, ADD_POCKET_MONEY } from "./../actions/index";

export default function pocketMoney(state = 50, action) {
  switch (action.type) {
    case ADD_POCKET_MONEY:
      console.log("Pocket Money added");
      return state;
    case REMOVE_POCKET_MONEY:
      console.log("Pocket Money Removed");
      return state;
    default:
      return state;
  }
}
