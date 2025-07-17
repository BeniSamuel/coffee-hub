import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const Orientation = () => {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <Image source={require("../../assets/product/back-icon.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFavorite(!favorite);
        }}
      >
        {favorite ? (
          <Image
            source={require("../../assets/product/favorite-icon-active.png")}
          />
        ) : (
          <Image
            source={require("../../assets/product/favorite-icon-inactive.png")}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Orientation;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 12,
    width: screenwidth,
    paddingHorizontal: screenwidth * 0.06,
    paddingVertical: screenheight * 0.05,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
