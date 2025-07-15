import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import Header from "../components/common/Header";
import { StatusBar } from "expo-status-bar";

type TabLayoutProp = {
    screen_name?: string;
    children: ReactNode
}

const TabLayout: React.FC<TabLayoutProp> = ({screen_name, children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <Header screen_name={screen_name}/>
      <View style={styles.dynamic_container}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS !== "ios" ? 35 : 25,
    backgroundColor: "#0C0F14",
    flex: 1
  },
  dynamic_container: {
    flex: 1
  }
});
