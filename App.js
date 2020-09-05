import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Colors from "./src/utils/colors";
import Routes from "./src/utils/Routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.two} animated style="light" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
});
