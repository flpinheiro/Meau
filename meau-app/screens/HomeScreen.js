import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import { Tile } from "react-native-elements";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.canvasContainer}>
            <Tile
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
              featured
              caption="Lorem Ipsum"
              containerStyle={styles.canvas}
              height={Dimensions.get("window").height * 1}
            />
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
