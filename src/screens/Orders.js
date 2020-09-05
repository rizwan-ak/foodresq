import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import Nav from "../components/Nav";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../utils/colors";
import StyledText from "../components/StyledText";

export default class Orders extends Component {
  state = {
    isOrder: true,
  };
  render() {
    const { isOrder } = this.state;
    return (
      <View style={styles.container}>
        <Nav orders />
        {isOrder ? (
          <ScrollView>
            <StyledText style={styles.title}>Active </StyledText>
            <View style={styles.orderContainer}>
              <View style={styles.inLine}>
                <StyledText style={styles.name}>Restaurant Name </StyledText>
                <StyledText style={styles.price}>$3.50</StyledText>
              </View>
              <StyledText style={styles.details}>
                23 Aug - Lunch - Order No 200qbyr6200qb
              </StyledText>
            </View>
            <StyledText style={styles.title}>Past </StyledText>
            <View style={styles.orderContainer}>
              <View style={styles.inLine}>
                <StyledText style={styles.name}>Restaurant Name </StyledText>
                <StyledText style={styles.price}>$3.50</StyledText>
              </View>
              <StyledText style={styles.details}>
                23 Aug - Lunch - Order No 200qbyr6200qb
              </StyledText>
            </View>

            <View style={styles.orderContainer}>
              <View style={styles.inLine}>
                <StyledText style={styles.name}>Restaurant Name </StyledText>
                <StyledText style={styles.price}>$3.50</StyledText>
              </View>
              <StyledText style={styles.details}>
                23 Aug - Lunch - Order No 200qbyr6200qb
              </StyledText>
            </View>
          </ScrollView>
        ) : (
          <View style={styles.noFavContainer}>
            <Image
              style={styles.filterIcon}
              source={require("../assets/cartoon1.png")}
            />
            <StyledText style={styles.noResBold}>No Orders to show</StyledText>
            <StyledText style={{ color: Colors.four }}>
              Your order history will appear here.
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
  title: {
    color: Colors.one,
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  noFavContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noResBold: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 100,
    paddingVertical: 20,
  },
  orderContainer: {
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.four,
  },
  inLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: Colors.one,
  },
  details: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
    color: Colors.four,
  },
  filterIcon: {
    height: 150,
    width: 150,
    paddingVertical: 50,
  },
});
