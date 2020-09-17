import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default class CadastrarPetScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.canvasContainer}>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  canvasContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    marginTop: 0
  },
  canvas: {
    alignItems: "center"
  }
});
