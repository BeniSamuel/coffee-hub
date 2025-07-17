import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import coffee from "../../../../types/coffee.type";
import AddButton from "../../../common/AddButton";
import { useNavigation } from "@react-navigation/native";
import { ScreenParam } from "../../../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

type HomeTabNavigationProp = NativeStackNavigationProp<ScreenParam>;

const WithMilk = (props: coffee) => {

  const navigation = useNavigation<HomeTabNavigationProp>();

  return ( 
    <View style={styles.container}>
      <View style={styles.image_card_container}>
        <Image
          source={props.image}
          resizeMode="cover"
          style={styles.image_style}
        />
      </View>
      <View>
        <Text
          style={styles.product_name}
          onPress={() => {navigation.navigate("Product", {product : props})}}
        >
          {props.name}
        </Text>
        <Text style={styles.product_made_of}>{props.made_of}</Text>
      </View>
      <View style={styles.bottom_bar}>
        <View style={styles.price_tag}>
          <Text style={styles.price_tag_icon}>$</Text>
          <Text style={styles.price_tag_price}>{props.price}</Text>
        </View>
        <View style={styles.add_button_container}>
          <AddButton />
        </View>
      </View>
    </View>
  );
};

export default WithMilk;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#252A32",
    width: screenwidth * 0.5,
    height: screenheight * 0.35,
    marginRight: screenwidth * 0.05,
    opacity: 12,
    borderRadius: 20,
    paddingVertical: screenheight * 0.022,
    paddingHorizontal: screenwidth * 0.055,
    gap: 12,
  },
  image_card_container: {
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image_style: {
    borderRadius: 16,
    width: screenwidth * 0.45,
  },
  product_name: {
    fontFamily: "poppins-medium",
    color: "white",
  },
  product_made_of: {
    color: "white",
    fontFamily: "poppins-regular",
    fontSize: 11.5,
  },
  bottom_bar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price_tag: {
    display: "flex",
    flexDirection: "row",
  },
  price_tag_icon: {
    color: "#D17842",
    fontFamily: "poppins-medium",
  },
  price_tag_price: {
    fontFamily: "poppins-medium",
    color: "white",
    paddingLeft: screenwidth * 0.01,
  },
  add_button_container: {},
});
