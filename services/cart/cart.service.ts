import coffee from "../../types/coffee.type";
import { cart } from "../../data/cart/cart.data";

export const add_to_cart = (product: coffee) => {
    cart.push(product);
}
