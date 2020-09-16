import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import DrawerIcon from "../components/DrawerIcon";
import HomeScreen from "../screens/HomeScreen";
import AppHeader from "../components/AppHeader";

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    header: <AppHeader />
  }
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  defaultNavigationOptions
);

HomeStack.navigationOptions = {
  drawerLabel: "Inicio",
  drawerIcon: ({ focused }) => <DrawerIcon focused={focused} name="home" />
};


const drawerNavigator = createDrawerNavigator(
  {
    HomeStack
  },
  {
    drawerOptions: {
      drawerBackgroundColor: "#000",
      activeBackgroundColor: "#CE9E5F",
      activeTintColor: "#fff",
      inactiveTintColor: "#BCBAB8"
    },
    contentOptions: {
      style: {
        backgroundColor: "#D5AD77"
      }
    }
  }
);

const navigator = { drawerNavigator };

export default navigator;
