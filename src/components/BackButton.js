import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import StyledText from "../components/StyledText";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../utils/colors";
import { Actions } from "react-native-router-flux";
// import { Actions } from "react-native-router-flux";

export default class BackButton extends Component {
  render() {
    return (
      <View style={styles.button}>
        <TouchableOpacity style={{ marginRight: 20 }} onPress={Actions.pop}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <StyledText style={styles.title}>{this.props.title || ""}</StyledText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: Colors.one,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});
