import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabLayout from "../../../layout/TabLayout";

const Favorite = () => {
  return (
    <TabLayout screen_name="Favorites">
      <View>
        <Text>Favorite</Text>
      </View>
    </TabLayout>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
