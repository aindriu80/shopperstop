import { ADD_GROCERY } from "./../actions/index";
import groceryItemsList from "../data/groceryItems.json";

export default function shoppingBag(state = [], action) {
  switch (action.type) {
    case ADD_GROCERY:
      console.log("Add Grocery Clicked and shopping bag action is", action);

      let shoppingBag = [...state, addToBag(action.id)];
      console.log("shopping bag should be populated with", shoppingBag);
      return shoppingBag;
    default:
      return state;
  }
}

function addToBag(id) {
  let item = groceryItemsList.find(item => item.id === id);
  return item;
}
