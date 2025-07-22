import { history } from "../../data/history/history.data";
import coffee from "../../types/coffee.type";

const add_to_history = (product: coffee) => {
  history.push(product);
};
