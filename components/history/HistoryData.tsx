import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { history } from "../../data/history/history.data";

const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;

const HistoryData = () => {
  return (
    <ScrollView>
      {history.length !== 0 ? (
        <View></View>
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

export default HistoryData;

const styles = StyleSheet.create({
  container: {},
});
