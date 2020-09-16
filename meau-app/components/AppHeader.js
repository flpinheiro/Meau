import React, { Component } from "react";
import { Header, Badge, Text } from "react-native-elements";
import { Image } from "react-native";

class AppHeader extends Component {
  renderLogo() {
    return <Image source={require("../assets/images/icon.png")} />;
  }

  renderBadge(callback, navigation, text, authenticated) {
    return (
      <Badge
        badgeStyle={{
          backgroundColor: "#A57A46",
          borderColor: "#A57A46",
          padding: "10%"
        }}
        containerStyle={{}}
        value={
          <Text style={{ color: "#fff", paddingBottom: "20%" }}>{text}</Text>
        }
        onPress={() =>
          authenticated ? callback() : navigation.navigate("Login")
        }
      />
    );
  }
  render() {
    const { navigation } = this.props;
    //const { authenticated } = this.props.auth;
    //const text = authenticated ? "Sair" : "Login";
    return (
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: () => navigation.toggleDrawer()
        }}
        centerComponent={this.renderLogo()}
        /*rightComponent={this.renderBadge(
          this.props.signoutUser,
          navigation,
          text,
          authenticated
        )}*/
        containerStyle={{
          backgroundColor: "#CE9E5F",
          justifyContent: "space-around"
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default AppHeader;
