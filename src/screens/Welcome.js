import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import StyledText from "../components/StyledText";
import Colors from "../utils/colors";
import welcome from "../assets/welcome.png";
import { Actions } from "react-native-router-flux";

export default class Welcome extends Component {
  googleSignin = async () => {
    Actions.discover();
    // const user = await FB.googleSignin();
    // const res = await FB.saveGoogleUser(user);
    // res && Actions.dashboard();
  };

  facebookSignin = async () => {
    Actions.discover();
    // const user = await FB.facebookSignin();
    // const res = await FB.saveFacebookUser(user);
    // res && Actions.dashboard();
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={welcome} />
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={this.facebookSignin}>
            <Image
              style={styles.socialLogo}
              source={require("../assets/fb.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.googleSignin}>
            <Image
              style={styles.socialLogo}
              source={require("../assets/google.png")}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={Actions.signin}>
          <StyledText style={styles.loginText}> Login </StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={Actions.signup}>
          <StyledText style={styles.signupText}>Create An Account</StyledText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    alignSelf: "center",
    marginVertical: 60,
    width: 300,
    height: 300,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  socialLogo: {
    margin: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  loginButton: {
    marginTop: 25,
    backgroundColor: Colors.one,
    borderRadius: 50,
    paddingVertical: 10,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  signupButton: {
    marginTop: 25,
    backgroundColor: "white",
    borderRadius: 50,
    paddingVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 6,
  },
  signupText: {
    color: Colors.one,
    fontSize: 20,
    fontWeight: "bold",
  },
});
