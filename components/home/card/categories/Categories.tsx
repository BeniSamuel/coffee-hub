import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const categories = ["All", "Cappuccino", "Espresso", "Americano", "Macchiato"];

const Categories = () => {
  const [section, setSection] = useState("All");
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity key={category} style={styles.category_text_container}>
            <Text
              onPress={() => {
                setSection(category);
              }}
              style={[
                styles.category_text,
                { color: section !== category ? "#52555A" : "#D17842" },
              ]}
            >
              {category}
            </Text>
            { section === category ? (<View style={styles.active_section_indicator}/>) : (<></>)}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: screenwidth * 0.035,
    paddingVertical: screenheight * 0.02,
  },
  category_text_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: screenwidth * 0.055
  },
  category_text: {
    fontFamily: "poppins-medium"
  },
  active_section_indicator: {
    backgroundColor: "#D17842",
    width: 12,
    height: 12,
    borderRadius: screenwidth
  }
});
