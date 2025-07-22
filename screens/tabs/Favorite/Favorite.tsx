import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabLayout from "../../../layout/TabLayout";
import FavoriteData from "../../../components/favorite/FavoriteData";

const Favorite = () => {
  return (
    <TabLayout screen_name="Favorites">
      <FavoriteData />
    </TabLayout>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
