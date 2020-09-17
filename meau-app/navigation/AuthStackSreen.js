import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import { Button } from "react-native-elements";

import CadastrarPetScreen from "../screens/Atalhos/CadastrarPetScreen";

const Stack = createStackNavigator();

const AuthStackSreen = ({ navigation, style }) => {
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
        <Stack.Screen name="CadastrarPet">
          {(props) => <CadastrarPetScreen {...props} />}
        </Stack.Screen> 
      </Stack.Navigator>
  );
};


export default AuthStackSreen;