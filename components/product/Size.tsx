import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const grams = [250, 500, 1000];

type SizeProps = {
  size: number;
};

const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;

const Size: React.FC<SizeProps> = ({ size }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.description_text_heading}>Size</Text>
      </View>
      <View style={styles.grams_container}>
        {grams.map((gram) => (
          <View
            key={gram}
            style={{
              backgroundColor: "#141921",
              width: screenwidth * 0.27,
              height: screenheight * 0.06,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: size === gram ? 2 : 0,
              borderColor: size === gram ? "#D17842" : "#AEAEAE",
            }}
          >
            <Text
              style={{
                fontFamily: "poppins-medium",
                color: size === gram ? "#D17842" : "#AEAEAE",
              }}
            >
              {gram}gm
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Size;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  description_text_heading: {
    color: "#AEAEAE",
    fontFamily: "poppins-semibold",
  },
  grams_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
