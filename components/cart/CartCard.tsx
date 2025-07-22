import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import coffee from "../../types/coffee.type";

type CartCardProps = {
  product: coffee;
};

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const CartCard: React.FC<CartCardProps> = ({ product }) => {
  const [count, setCount] = useState(1);

  const handle_reduce_count = () => {
    if (count !== 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={product.image} style={styles.image_style} />
      </View>

      <View style={styles.content_info}>
        <View style={styles.description_container}>
          <Text style={styles.product_name}>{product.name}</Text>
          <Text style={styles.product_made_of}>{product.made_of}</Text>
        </View>
        <View style={styles.size_price_tag_container}>
          <View style={styles.size_tag}>
            <Text style={styles.size_content}>{product.size}gm</Text>
          </View>
          <View style={styles.price_container}>
            <Text
              style={{
                color: "#D17842",
                fontFamily: "poppins-medium",
                fontSize: 18,
              }}
            >
              $
            </Text>
            <Text style={{ color: "white", fontFamily: "poppins-medium" }}>
              {product.price}
            </Text>
          </View>
        </View>
        <View style={styles.quantity_container}>
          <TouchableOpacity
            style={styles.counter_button}
            onPress={handle_reduce_count}
          >
            <Text style={styles.counter_text}>-</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.counter_text}>{count}</Text>
          </View>
          <TouchableOpacity
            style={styles.counter_button}
            onPress={() => {
              setCount(count + 1);
            }}
          >
            <Text style={styles.counter_text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262B33",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: screenwidth * 0.04,
    alignItems: "center",
    borderRadius: 12,
    gap: 6,
    paddingVertical: screenheight * 0.015,
  },
  image_style: {
    borderRadius: 20,
  },
  content_info: {
    width: screenwidth / 2,
    paddingHorizontal: screenwidth * 0.025,
    paddingVertical: screenheight * 0.02,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  product_name: {
    color: "white",
    fontFamily: "poppins-medium",
  },
  product_made_of: {
    color: "#AEAEAE",
    fontFamily: "poppins-regular",
  },
  description_container: {
    display: "flex",
    flexDirection: "column",
  },
  size_price_tag_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  size_tag: {
    backgroundColor: "#0C0F14",
    width: screenwidth * 0.2,
    height: screenheight * 0.043,
    borderRadius: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  size_content: {
    color: "white",
    fontFamily: "poppins-medium",
  },
  price_container: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  quantity_container: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
  },
  counter_button: {
    backgroundColor: "#D17842",
    width: screenwidth * 0.14,
    height: screenheight * 0.04,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  counter_text: {
    color: "white",
    fontFamily: "poppins-medium",
  },
});
