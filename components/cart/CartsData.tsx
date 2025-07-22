import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { cart } from "../../data/cart/cart.data";
import CartCard from "./CartCard";
import coffee from "../../types/coffee.type";
import CartPrice from "./CartPrice";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

let sum = 0;
for (let i = 0; i < cart.length; i++) {
  sum = sum + cart[i].price;
}

const CartsData: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {cart.length !== 0 ? (
        <View style={styles.container}>
          {cart.map((data: coffee) => (
            <CartCard
              key={data.id}
              product={{
                id: data.id,
                image: data.image,
                name: data.name,
                origin: data.origin,
                made_of: data.made_of,
                rating: data.rating,
                description: data.description,
                size: data.size,
                price: data.price,
              }}
            />
          ))}
          <CartPrice total={sum} />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            height: screenheight * 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 15,
          }}
        >
          <Image
            source={require("../../assets/cart/not-found-component.png")}
          />
          <Text style={{ color: "#D17842", fontFamily: "poppins-medium" }}>
            No data
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default CartsData;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: screenwidth * 0.035,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingVertical: screenheight * 0.01,
  },
});
