import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Button } from "react-native-elements";

import IntroducaoScreen from "../screens/Introducao/IntroducaoScreen";
import Animated from "react-native-reanimated";
import LoginScreen from "../screens/Login/LoginScreen";

const Stack = createStackNavigator();

const NotAuthStackSreen = ({ navigation, style }) => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#fee29b",
          },
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              icon={<Entypo name="menu" size={24} color="#88c9bf" />}
              type="clear"
            />
          ),
        }}
      >
        <Stack.Screen name="Introducao">
          {(props) => <IntroducaoScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
  );
};


export default NotAuthStackSreen;