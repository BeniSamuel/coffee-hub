import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  screen_name?: string;
};

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const Header: React.FC<HeaderProps> = ({ screen_name }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../../assets/common/home-icon.png")} />
      </TouchableOpacity>
      <View>
        <Text style={styles.screen_name}>{screen_name}</Text>
      </View>
      <View>
        <Image source={require("../../assets/common/user-icon.png")} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: screenwidth,
    height: screenheight * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: screenwidth * 0.035,
  },
  screen_name: {
    fontFamily: "poppins-semibold",
    color: "white",
  },
});
