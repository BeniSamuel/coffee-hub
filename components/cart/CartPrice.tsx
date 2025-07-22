import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;

type CartPriceProps = {
  total: number;
};

const CartPrice: React.FC<CartPriceProps> = ({ total }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.price_heading}>Total Price</Text>
        <Text style={{ color: "#D17842", fontFamily: "poppins-medium" }}>
          ${" "}
          <Text style={{ color: "white", fontFamily: "poppins-medium" }}>
            {" "}
            {total}
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.pay_button}>
        <Text style={styles.button_text}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartPrice;

const styles = StyleSheet.create({
  container: {
    paddingVertical: screenheight * 0.04,
    paddingHorizontal: screenwidth * 0.01,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price_details: {
    display: "flex",
    flexDirection: "column",
  },
  price_heading: {
    color: "#AEAEAE",
    fontFamily: "poppins-medium",
  },
  pay_button: {
    width: screenwidth * 0.5,
    backgroundColor: "#D17842",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: screenheight * 0.07,
    borderRadius: 12,
  },
  button_text: {
    color: "white",
    fontFamily: "poppins-medium",
  },
});
