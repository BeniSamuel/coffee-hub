import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

type ProductRatingProps = {
  name: string;
  made_of: string;
  rating: number;
  origin: string;
};

const ProductRating: React.FC<ProductRatingProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View>
          <Text style={styles.product_name}>{props.name}</Text>
          <Text style={styles.product_origin}>{props.origin}</Text>
        </View>
        <View style={styles.bottom_tab_container}>
          <View>
            <Image source={require("../../assets/product/star-icon.png")} />
            <Text style={styles.bottom_tab_rating}>
              {props.rating}{" "}
              <Text style={{ color: "#AEAEAE", fontFamily: "poppins-medium" }}>
                {" "}
                (6,879)
              </Text>
            </Text>
          </View>
          <View style={styles.bottom_button}>
            <Text style={styles.bottom_tab_rating}>{props.made_of}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductRating;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: screenwidth,
  },
  container2: {
    position: "absolute",
    bottom: 0,
    zIndex: 12,
    width: screenwidth * 0.95,
    paddingHorizontal: screenwidth * 0.06,
    paddingVertical: screenheight * 0.05,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#000000ff",
    opacity: 0.5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    gap: 15,
  },
  product_name: {
    color: "white",
    fontFamily: "poppins-semibold",
    fontSize: 15,
  },
  product_origin: {
    color: "#AEAEAE",
    fontFamily: "poppins-medium",
  },
  bottom_tab_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom_tab_rating: {
    color: "white",
    fontFamily: "poppins-medium",
  },
  bottom_button: {
    backgroundColor: "#141921",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});
