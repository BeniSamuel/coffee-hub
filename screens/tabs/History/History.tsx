import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabLayout from "../../../layout/TabLayout";
import HistoryData from "../../../components/history/HistoryData";

const History = () => {
  return (
    <TabLayout screen_name="Order History">
      <HistoryData />
    </TabLayout>
  );
};

export default History;

const styles = StyleSheet.create({});
