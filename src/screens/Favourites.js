import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import FavList from "../components/FavList";
import Nav from "../components/Nav";
import Colors from "../utils/colors";
import StyledText from "../components/StyledText";

export default class Favourites extends Component {
  state = {
    isFav: true,
  };
  render() {
    const { isFav } = this.state;
    return (
      <View style={styles.container}>
        <Nav favourites />
        {isFav ? (
          <FavList />
        ) : (
          <View style={styles.noFavContainer}>
            <Image
              style={styles.filterIcon}
              source={require("../assets/cartoon1.png")}
            />
            <StyledText style={styles.noFavText}>
              No favourites added yet. Tap the heart on a store to add it to
              your faviourites
            </StyledText>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  noFavContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavText: {
    textAlign: "center",
    fontSize: 16,
    paddingHorizontal: 70,
    color: Colors.four,
  },
  filterIcon: {
    height: 150,
    width: 150,
    marginBottom: 20,
    paddingVertical: 50,
  },
});
