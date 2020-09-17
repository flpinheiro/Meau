import React from "react";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { View, StyleSheet } from "react-native";

import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";

const NotAuthDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View>
        <DrawerItem
          label="Introducao"
          onPress={() => {
            props.navigation.navigate("Introducao");
          }}
          icon={() => (
            <Feather
              name="home"
              size={24}
              color="black"
              style={styles.drawerIcon}
            />
          )}
        ></DrawerItem>

        <DrawerItem
          label="Cadastrar Pet"
          onPress={() => {
            props.navigation.navigate("CadastrarPet");
          }}
          icon={() => (
            <FontAwesome name="paw"
              size={24}
              color="black"
              style={styles.drawerIcon}
            />
          )}
        ></DrawerItem>

        <DrawerItem
          label="Login"
          onPress={() => {
            props.navigation.navigate("Login");
          }}
          icon={() => (
            <AntDesign name="login" size={24} style={styles.drawerIcon} />
          )}
        ></DrawerItem>
      </View>
    </DrawerContentScrollView>
  );
};

export default NotAuthDrawerContent;

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
