import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import StyledText from "./StyledText";
import Colors from "../utils/colors";
import cover from "../assets/cover.jpg";
import resLogo from "../assets/resLogo.jpg";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Actions } from "react-native-router-flux";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    time: "Launch",
    price: "6.00",
    name: "Burger Hub",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    time: "Breakfast",
    price: "4.00",
    name: "Pizza Hut",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    time: "Dinner",
    price: "2.00",
    name: "KFC",
  },
  {
    id: "58694a0f-3da1-471f-bd96-asdf145571e29d72",
    time: "Launch",
    price: "3.00",
    name: "Papa Johns",
  },
];

const Item = ({ time, price, name }) => (
  <TouchableOpacity style={[styles.option]} onPress={Actions.restaurant}>
    <ImageBackground source={cover} style={styles.cover}>
      <LinearGradient
        style={{ height: 80 }}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]}
      >
        <StyledText style={styles.boxCount}>5+ Left</StyledText>
        <View style={styles.logoContainer}>
          <Image style={styles.resLogo} source={resLogo} />
          <StyledText style={styles.resName}>{name}</StyledText>
        </View>
      </LinearGradient>
    </ImageBackground>
    <View style={styles.priceContainer}>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <Ionicons
          style={{ marginRight: 5 }}
          name="md-time"
          size={17}
          color="black"
        />
        <StyledText>{time}</StyledText>
      </View>
      <StyledText style={styles.priceText}>${price}</StyledText>
    </View>
  </TouchableOpacity>
);

export default class RestaurantsList extends Component {
  render() {
    const renderItem = ({ item }) => (
      <Item time={item.time} price={item.price} name={item.name} />
    );
    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: "white",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 6,
  },
  cover: {
    resizeMode: "center",
    height: 80,
    width: 250,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  priceText: {
    color: Colors.one,
    fontWeight: "bold",
    fontSize: 15,
  },
  resName: {
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  boxCount: {
    position: "absolute",
    margin: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
    color: "white",
    fontWeight: "bold",
    backgroundColor: Colors.one,
  },
  resLogo: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  logoContainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    bottom: -10,
  },
});
