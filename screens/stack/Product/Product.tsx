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
import { RouteProp } from "@react-navigation/native";

const screenwidth = Dimensions.get("window").width;

type RootStackParamList = {
  Product: {
    product: coffee;
  };
};

type ProductScreenRouteProp = RouteProp<RootStackParamList, "Product">;

type Props = {
  route: ProductScreenRouteProp;
};

const Product: React.FC<Props> = ({ route }) => {
  const { product } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ProductImage product={product} />
      <ScrollView>
        <View style={styles.content}>
          <View style={{ gap: 5 }}>
            <Text style={styles.description_text_heading}>Description</Text>
            <Text style={styles.description_text}>{product.description}</Text>
          </View>

          <Size size={product.size} />
          <PriceTag price={product.price} product={product} />
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
  content: {
    flex: 1,
    width: screenwidth,
    paddingHorizontal: screenwidth * 0.06,
    paddingVertical: 10,
    flexDirection: "column",
    gap: 12,
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
