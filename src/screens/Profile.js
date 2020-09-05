import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Picker,
  Alert,
} from "react-native";
import StyledText from "../components/StyledText";
import BackButton from "../components/BackButton";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../utils/colors";
import { Actions } from "react-native-router-flux";

export default class Profile extends Component {
  state = {
    name: "",
    email: "",
    phoneNo: "",
    country: "",
  };

  onSubmit = async () => {
    Actions.discover();
    // const { email, password } = this.state;
    // const res = await FB.signin(email, password);
    // res && Actions.loading();
  };

  render() {
    const { email, name, phoneNo, country } = this.state;
    return (
      <View style={styles.container}>
        <BackButton title="Profile" />
        <TouchableOpacity style={styles.logout} onPress={Actions.welcome}>
          <AntDesign style={styles.logoutText} name="logout" />
        </TouchableOpacity>
        <View style={styles.details}>
          <StyledText style={styles.title}>Account Details</StyledText>
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
          <TouchableOpacity style={styles.loginButton} onPress={this.onSubmit}>
            <StyledText style={styles.loginText}>Update</StyledText>
          </TouchableOpacity>
          {/* <View style={styles.orderContainer}>
            <StyledText style={styles.title}>Orders</StyledText>
            <StyledText style={styles.title}>Orders</StyledText>
          </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logout: {
    margin: 20,
    right: 0,
    textAlign: "right",
    position: "absolute",
  },
  logoutText: {
    fontSize: 24,
    color: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: Colors.four,
  },
  details: {
    padding: 20,
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
  orderContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
