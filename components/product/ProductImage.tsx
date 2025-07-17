import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import coffee from "../../types/coffee.type";
import Orientation from "./Orientation";
import ProductRating from "./ProductRating";

type ProductImageProps = {
  product: coffee;
};

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Orientation />
      <View style={styles.image_cover_container}>
        <Image
          source={product.image}
          resizeMode="cover"
          style={styles.image_cover}
        />
      </View>
      <ProductRating name={product.name} made_of={product.made_of} rating={product.rating} origin={product.origin} />
    </View>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingVertical: screenheight * 0.01,
  },
  image_cover_container: {
    width: screenwidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image_cover: {
    height: screenheight * 0.6,
    width: screenwidth * 0.95,
    borderRadius: 20,
  },
});
