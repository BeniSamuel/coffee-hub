import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import coffee from "../../../../types/coffee.type";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const WithMilk = (props: coffee) => {
  return (
    <View style={styles.container}>
      <View>
        <Image  />
      </View>
      <View>
        <Text>{props.name}</Text>
        <Text>{props.made_of}</Text>
      </View>
      <View>
        <View>
          <Text>$</Text>
          <Text>{props.price}</Text>
        </View>
        <View></View>
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
    width: screenwidth * 0.55,
    height: screenheight * 0.3,
    paddingHorizontal: screenwidth * 0.05,
    marginRight: screenwidth * 0.05,
    opacity: 12,
    borderRadius: 20
  },
});
