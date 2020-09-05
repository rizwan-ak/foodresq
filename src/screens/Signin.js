import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/logo.png";
import StyledText from "../components/StyledText";
import Colors from "../utils/colors";
import BackButton from "../components/BackButton";
import { Actions } from "react-native-router-flux";

export default class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  onchange = (text, name) => this.setState({ [name]: text });

  onSubmit = async () => {
    Actions.discover();

    // const { email, password } = this.state;
    // const res = await FB.signin(email, password);
    // res && Actions.loading();
  };
  render() {
    const { email, password } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <BackButton title="Signin" />
        <Image style={styles.logo} source={logo} />
        <View style={styles.container}>
          <TextInput
            value={email}
            style={styles.input}
            autoCompleteType="email"
            placeholder="Please enter your email"
            onChangeText={(text) => this.onchange(text, "email")}
            keyboardType="email-address"
          />
          <TextInput
            secureTextEntry
            value={password}
            style={styles.input}
            autoCompleteType="password"
            placeholder="Please enter your password"
            onChangeText={(text) => this.onchange(text, "password")}
          />
          <TouchableOpacity onPress={() => alert("pressed")}>
            <StyledText style={styles.forgotPassword}>
              Forgot Password?
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={this.onSubmit}>
            <StyledText style={styles.loginText}>Signin</StyledText>
          </TouchableOpacity>
        </View>
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
    marginVertical: 20,
  },
  input: {
    marginTop: 20,
    backgroundColor: "white",
    height: 40,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 6,
  },
  marginTop: {
    marginTop: 30,
  },
  forgotPassword: {
    padding: 5,
    textAlign: "right",
    color: Colors.one,
  },
  loginButton: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: Colors.one,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 6,
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
