import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import coffee_milk from "../../../../data/coffee-milk/coffee.data";
import WithMilk from "./WithMilk";

const screenwidth = Dimensions.get("window").width;

const CoffeeWithMilk = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {coffee_milk.map((coffee) => (
          <WithMilk
            key={coffee.id}
            id={coffee.id}
            image={coffee.image}
            name={coffee.name}
            origin={coffee.origin}
            made_of={coffee.made_of}
            rating={coffee.rating}
            description={coffee.description}
            size={coffee.size}
            price={coffee.price}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CoffeeWithMilk;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: screenwidth * 0.035,
    paddingVertical: screenwidth * 0.035
  }
});
