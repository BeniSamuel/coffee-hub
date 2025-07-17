import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabLayout from "../../../layout/TabLayout";
import CartsData from "../../../components/cart/CartsData";

const Cart = () => {
  return (
    <TabLayout screen_name="Cart">
      <CartsData />
    </TabLayout>
  );
};

export default Cart;

const styles = StyleSheet.create({});
