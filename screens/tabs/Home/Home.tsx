import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import TabLayout from "../../../layout/TabLayout";
import Search from "../../../components/home/search/Search";
import Categories from "../../../components/home/card/categories/Categories";
import CoffeeWithMilk from "../../../components/home/card/coffee-card/CoffeeWithMilk";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const Home = () => {
  return (
    <TabLayout>
      <View style={styles.description_text_container}>
        <Text style={styles.description_text}>Find the best</Text>
        <Text style={styles.description_text}>Coffee for you</Text>
      </View>
      <View>
        <Search />
      </View>
      <View>
        <Categories />
        <CoffeeWithMilk />
      </View>
    </TabLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  description_text_container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: screenwidth * 0.035,
    paddingVertical: screenheight * 0.01,
  },
  description_text: {
    color: "white",
    fontFamily: "poppins-semibold",
    fontSize: 21,
  }
});
