import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import RestaurantsList from "../components/RestaurantsList";
import Nav from "../components/Nav";

import StyledText from "../components/StyledText";

export default class Discover extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav discover />
        <ScrollView>
          <StyledText style={styles.title}>Recommended for you </StyledText>
          <RestaurantsList />
          <StyledText style={styles.title}>Ready to eat</StyledText>
          <RestaurantsList />
          <StyledText style={styles.title}>Groceries </StyledText>
          <RestaurantsList />
          <StyledText style={styles.title}>Collect for dinner </StyledText>
          <RestaurantsList />
          <StyledText style={styles.title}>Collect now </StyledText>
          <RestaurantsList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  title: {
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});
