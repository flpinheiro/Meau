import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { StyleSheet } from "react-native";
import NotAuthDrawerContent from "./NotAuthDrawerContent";
import NotAuthStackSreen from "./NotAuthStackSreen";
import AuthDrawerContent from "./AuthDrawerContent";
import AuthStackSreen from "./AuthStackSreen";


const Drawer = createDrawerNavigator();

export default (props) => {
  const { loginState } = props;
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerStyle={styles.drawerStyles}
      contentContainerStyle={{ flex: 1 }}
      drawerContentOptions={{
        activeBackgroundColor: "white",
        activeTintColor: "white",
        inactiveTintColor: "white",
      }}
      drawerContent={(props) => {
        return loginState.userToken !== null ? (
          <AuthDrawerContent {...props} />
        ) : (
          <NotAuthDrawerContent {...props} />
        );
      }}
    >
      {loginState.userToken  !== null ? (
        <Drawer.Screen name="AuthDrawer" component={AuthStackSreen} />
      ) : (
        <Drawer.Screen name="NotAuthDrawer" component={NotAuthStackSreen} />
      )}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 5,
  },
  drawerStyles: { flex: 1, width: "80%", backgroundColor: "#f7f7f7" },
  drawerItem: { alignItems: "flex-start", marginVertical: 0 },
  drawerLabel: {
    color: "#434343",
    marginBottom: 20,
    marginTop: 16,
    fontSize: 14,
  },
  drawerIcon: {
    width: 24,
    height: 24,
    color: "#757575",
    marginBottom: 12,
    marginLeft: 16,
    marginTop: 16,
  },
  drawerLogoutItem: {
    alignItems: "center",
    backgroundColor: "#88c9bf",
  },
  avatarContainer: {
    backgroundColor: "#88c9bf",
    width: 304,
    height: 172,
  },
  avatar: {
    marginTop: 40,
    marginRight: 224,
    marginBottom: 68,
    marginLeft: 16,
  },
});
