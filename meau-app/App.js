import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo-asset";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});

export default App;
