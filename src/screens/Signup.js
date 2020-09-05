import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Picker,
  ScrollView,
} from "react-native";
import logo from "../assets/logo.png";
import StyledText from "../components/StyledText";
import Colors from "../utils/colors";
import BackButton from "../components/BackButton";
import { Actions } from "react-native-router-flux";

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    phoneNo: "",
    country: "",
    password: "",
    confirmPassword: "",
  };

  onchange = (text, name) => this.setState({ [name]: text });

  onSubmit = async () => {
    Actions.discover();

    // const { email, password } = this.state;
    // const res = await FB.signin(email, password);
    // res && Actions.loading();
  };

  render() {
    const {
      email,
      password,
      name,
      phoneNo,
      confirmPassword,
      country,
    } = this.state;
    return (
      <ScrollView>
        <BackButton title="Sigup" />
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} />
          <TextInput
            value={name}
            style={styles.input}
            placeholder="Full Name"
            onChangeText={(text) => this.onchange(text, "name")}
          />
          <TextInput
            value={email}
            style={styles.input}
            autoCompleteType="email"
            placeholder="Email"
            onChangeText={(text) => this.onchange(text, "email")}
            keyboardType="email-address"
          />
          <TextInput
            value={phoneNo}
            style={styles.input}
            placeholder="+92345345345"
            onChangeText={(text) => this.onchange(text, "phoneNo")}
          />
          <Picker
            selectedValue={country}
            style={styles.input}
            onValueChange={(itemValue) => this.setState({ country: itemValue })}
          >
            <Picker.Item label="Please Select a country" value="pakistan" />
            <Picker.Item label="Pakistan" value="pakistan" />
            <Picker.Item label="India" value="india" />
            <Picker.Item label="Chaina" value="chaina" />
          </Picker>
          <TextInput
            secureTextEntry
            value={password}
            style={styles.input}
            autoCompleteType="password"
            placeholder="Password"
            onChangeText={(text) => this.onchange(text, "password")}
          />
          <TextInput
            secureTextEntry
            value={confirmPassword}
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => this.onchange(text, "confirmPassword")}
          />
          <TouchableOpacity style={styles.loginButton} onPress={this.onSubmit}>
            <StyledText style={styles.loginText}>Signup</StyledText>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
