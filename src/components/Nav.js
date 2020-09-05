import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import StyledText from "../components/StyledText";
import Colors from "../utils/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

export default class Nav extends Component {
  render() {
    const { browse, discover, orders, profile, favourites } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={Actions.discover}
        >
          <FontAwesome5
            name="compass"
            size={22}
            color={discover ? Colors.one : Colors.four}
          />
          <StyledText
            style={[
              styles.itemText,
              { color: discover ? Colors.one : Colors.four },
            ]}
          >
            Discover
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={Actions.browse}>
          <FontAwesome5
            name="wpexplorer"
            size={22}
            color={browse ? Colors.one : Colors.four}
          />
          <StyledText
            style={[
              styles.itemText,
              { color: browse ? Colors.one : Colors.four },
            ]}
          >
            Browse
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={Actions.favourites}
        >
          <FontAwesome5
            name="heart"
            size={22}
            color={favourites ? Colors.one : Colors.four}
          />
          <StyledText
            style={[
              styles.itemText,
              { color: favourites ? Colors.one : Colors.four },
            ]}
          >
            Favourites
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={Actions.orders}>
          <FontAwesome5
            name="calendar-check"
            size={22}
            color={orders ? Colors.one : Colors.four}
          />
          <StyledText
            style={[
              styles.itemText,
              { color: orders ? Colors.one : Colors.four },
            ]}
          >
            Orders
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={Actions.profile}
        >
          <FontAwesome5
            name="user-circle"
            size={22}
            color={profile ? Colors.one : Colors.four}
          />
          <StyledText
            style={[
              styles.itemText,
              { color: profile ? Colors.one : Colors.four },
            ]}
          >
            Profile
          </StyledText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    flex: 1,
    bottom: 0,
    position: "absolute",
    width: "100%",
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 12,
  },
});
