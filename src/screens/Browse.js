import React, { Component } from "react";
import { StyleSheet, View, Image, Picker } from "react-native";
import FavList from "../components/FavList";
import Nav from "../components/Nav";
import Colors from "../utils/colors";
import { Entypo } from "@expo/vector-icons";
import StyledText from "../components/StyledText";
import { TextInput } from "react-native-gesture-handler";
import Modal, { ModalContent, SlideAnimation } from "react-native-modals";

export default class Browse extends Component {
  state = {
    isFav: true,
    filterByName: "",
    filterByCategory: "",
    filterByTime: "",
    filterByDiet: "",
    showFilters: false,
  };

  onchange = (text, name) => this.setState({ [name]: text });

  render() {
    const {
      isFav,
      filterByName,
      showFilters,
      filterByCategory,
      filterByTime,
      filterByDiet,
    } = this.state;
    return (
      <View style={styles.container}>
        <Nav browse />
        <View style={styles.searchSection}>
          <TextInput
            value={filterByName}
            style={styles.input}
            placeholder="Filter By Name"
            onChangeText={(text) => this.onchange(text, "filterByName")}
          />
          <Entypo
            onPress={() => this.setState({ showFilters: true })}
            style={styles.searchIcon}
            name="dots-three-vertical"
            size={24}
            color="black"
          />
        </View>
        {isFav ? (
          <FavList />
        ) : (
          <View style={styles.noFavContainer}>
            <Image
              style={styles.filterIcon}
              source={require("../assets/cartoon1.png")}
            />
            <StyledText style={styles.noResBold}>
              No stores matching your filters
            </StyledText>
            <StyledText style={styles.noRes}>
              Try removing some of your filters to get more results.
            </StyledText>
          </View>
        )}
        <Modal.BottomModal
          useNativeDriver
          height={0.4}
          overlayOpacity={0.4}
          visible={showFilters}
          onTouchOutside={() => this.setState({ showFilters: false })}
          onSwipeOut={() => this.setState({ showFilters: false })}
          modalAnimation={
            new SlideAnimation({
              slideFrom: "bottom",
            })
          }
        >
          <ModalContent style={styles.modalContainer}>
            <StyledText
              style={styles.clear}
              onPress={() =>
                this.setState({
                  filterByCategory: false,
                  filterByDiet: false,
                  filterByTime: false,
                })
              }
            >
              Clear All <Entypo name="cross" size={26} color="red" />
            </StyledText>

            <StyledText style={{ fontWeight: "bold" }}>By Category</StyledText>
            <Picker
              selectedValue={filterByCategory}
              style={styles.select}
              onValueChange={(itemValue) =>
                this.setState({ filterByCategory: itemValue })
              }
            >
              <Picker.Item label="Any" value="" />
              <Picker.Item label="Bread & Pasteries" value="bread" />
              <Picker.Item label="Meals" value="meal" />
              <Picker.Item label="Groceries" value="groceries" />
              <Picker.Item label="Other" value="other" />
            </Picker>
            <StyledText style={{ fontWeight: "bold" }}>By Time</StyledText>
            <Picker
              selectedValue={filterByTime}
              style={styles.select}
              onValueChange={(itemValue) =>
                this.setState({ filterByTime: itemValue })
              }
            >
              <Picker.Item label="Any" value="" />
              <Picker.Item label="Breakfast" value="breakfast" />
              <Picker.Item label="Lunch" value="lunch" />
              <Picker.Item label="Dinner" value="dinner" />
            </Picker>
            <StyledText style={{ fontWeight: "bold" }}>
              By Diet Prefernces
            </StyledText>
            <Picker
              selectedValue={filterByDiet}
              style={styles.select}
              onValueChange={(itemValue) =>
                this.setState({ filterByDiet: itemValue })
              }
            >
              <Picker.Item label="Any" value="" />
              <Picker.Item label="Vegan" value="vegan" />
              <Picker.Item label="Non Vegan" value="nonVegan" />
            </Picker>
          </ModalContent>
        </Modal.BottomModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
  noFavContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  filterContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  noRes: {
    textAlign: "center",
    fontSize: 16,
    paddingHorizontal: 70,
    color: Colors.four,
  },
  noResBold: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 100,
    paddingVertical: 20,
  },
  filterIcon: {
    height: 150,
    width: 150,
    paddingVertical: 50,
  },
  searchSection: {
    marginTop: 10,
    marginHorizontal: 10,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 6,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
  select: {
    marginBottom: 20,
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
  clear: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
    color: Colors.one,
    justifyContent: "center",
  },
});
