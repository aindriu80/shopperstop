import { ADD_GROCERY } from "./../actions/index";
import groceryItemsList from "../data/groceryItems.json";

export default function grocery(state = groceryItemsList, action) {
  switch (action.type) {
    case ADD_GROCERY:
      console.log("Add Grocery Clicked");
      return state;
    default:
      return state;
  }
}
