import { favorite } from "../../data/favorite/favorite.data";
import coffee from "../../types/coffee.type";

export const add_to_favorite = (product: coffee) => {
  favorite.push(product);
};
