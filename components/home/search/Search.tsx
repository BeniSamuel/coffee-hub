import { Dimensions, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.input_search_box}>
      <TextInput
        keyboardType="web-search"
        placeholder="Find your coffee..."
        style={styles.input_search}
        onChangeText={(newText) => {
          setSearch(newText);
        }}
      />
      <TouchableOpacity>
        <Image source={require("../../../assets/home/search-icon.png")}/>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input_search_box: {
    width: screenwidth,
    paddingLeft: screenwidth * 0.035,
    paddingRight: screenwidth * 0.04,
    paddingVertical: screenheight * 0.005,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input_search: {
    color: "#52555A",
    fontFamily: "poppins-medium",
    backgroundColor: "#141921",
    width: screenwidth * 0.8,
    paddingHorizontal: screenwidth * 0.04,
    borderRadius: 6,
  },
});
