import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import coffee from "../../types/coffee.type";
import { add_to_cart } from "../../services/cart/cart.service";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

type PriceTagProp = {
  price: number;
  product: coffee;
};

const add_to_cart_function = (product: coffee) => {
  add_to_cart(product);
};

const PriceTag: React.FC<PriceTagProp> = ({ price, product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.price_container}>
        <Text style={styles.price_mark}>$</Text>
        <View style={styles.price_description_container}>
          <Text style={styles.price_indicator}>Price</Text>
          <Text style={styles.price_value}>{price}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.add_cart_button}
        onPress={() => {
          add_to_cart_function(product);
        }}
      >
        <Text style={styles.cart_text}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PriceTag;

const styles = StyleSheet.create({
  container: {
    paddingVertical: screenheight * 0.03,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price_container: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  price_description_container: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  price_mark: {
    fontFamily: "poppins-bold",
    color: "#D17842",
    fontSize: 25,
  },
  price_indicator: {
    fontFamily: "poppins-medium",
    color: "#AEAEAE",
  },
  price_value: {
    fontFamily: "poppins-medium",
    color: "white",
  },
  add_cart_button: {
    backgroundColor: "#D17842",
    width: screenwidth * 0.3,
    height: screenheight * 0.055,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cart_text: {
    fontFamily: "poppins-regular",
    color: "white",
  },
});
