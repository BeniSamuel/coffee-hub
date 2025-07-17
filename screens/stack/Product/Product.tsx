import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import ProductImage from "../../../components/product/ProductImage";
import coffee from "../../../types/coffee.type";
import { StatusBar } from "expo-status-bar";
import Size from "../../../components/product/Size";
import PriceTag from "../../../components/product/PriceTag";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const Product = ({ route }) => {
  const { product } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ProductImage
        product={{
          id: product.id,
          image: product.image,
          name: product.name,
          origin: product.origin,
          made_of: product.made_of,
          rating: product.rating,
          description: product.description,
          size: product.size,
          price: product.price,
        }}
      />
      <ScrollView>
        <View
          style={{
            flex: 1,
            width: screenwidth,
            paddingHorizontal: screenwidth * 0.06,
            paddingVertical: 10,
            flexDirection: "column",
            gap: 12,
          }}
        >
          <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Text style={styles.description_text_heading}>Description</Text>
            <Text style={styles.description_text}>{product.description}</Text>
          </View>

          <View>
            <Size size={product.size} />
          </View>

          <View>
            <PriceTag price={product.price} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS !== "ios" ? 35 : 25,
    backgroundColor: "#0C0F14",
    flex: 1,
  },
  description_text_heading: {
    color: "#AEAEAE",
    fontFamily: "poppins-semibold",
  },
  description_text: {
    color: "#FFFFFF",
    fontFamily: "poppins-regular",
    fontSize: 13,
    lineHeight: 22,
  },
});
