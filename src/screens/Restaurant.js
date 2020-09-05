import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import StyledText from "../components/StyledText";
import Colors from "../utils/colors";
import cover from "../assets/cover.jpg";
import resLogo from "../assets/resLogo.jpg";
import box from "../assets/box.png";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";
import Modal, { ModalContent, SlideAnimation } from "react-native-modals";

export default class Restaurant extends Component {
  state = {
    showInfoModal: false,
    showPaymentModal: false,
    isfav: false,
  };

  _handlePress = () => {
    Linking.openURL(
      "https://www.google.com/maps/place/21+New+Row,+Covent+Garden,+London+WC2N+4LA,+UK/@51.5112093,-0.1284137,17z/data=!3m1!4b1!4m5!3m4!1s0x487604cc4ba77f6d:0xa9956a62c06ebbbb!8m2!3d51.511206!4d-0.126225"
    );
    this.props.onPress && this.props.onPress();
  };

  render() {
    const { isfav, showInfoModal, showPaymentModal } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(0, 0, 0, 0)" style="dark" />
        <View style={[styles.option]} onPress={() => {}}>
          <ImageBackground source={cover} style={styles.cover}>
            <LinearGradient
              style={{ height: 200 }}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color="white"
                  onPress={() => alert("asdf")}
                />
                <StyledText style={styles.boxCount}>5+ Left</StyledText>
                <AntDesign
                  name={isfav ? "heart" : "hearto"}
                  size={24}
                  color="white"
                  onPress={() => this.setState({ isfav: !isfav })}
                />
              </View>
              <View style={styles.logoContainer}>
                <Image style={styles.resLogo} source={resLogo} />
                <StyledText style={styles.resName}>asdf</StyledText>
              </View>
            </LinearGradient>
          </ImageBackground>
          <View style={styles.categoryContainer}>
            <StyledText style={styles.category}>BREAD & PASTERIES</StyledText>
            <StyledText style={styles.prePriceText}>$9.50</StyledText>
          </View>
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Ionicons
                style={{ marginRight: 5 }}
                name="md-time"
                size={17}
                color="black"
              />
              <StyledText>Lunch</StyledText>
            </View>
            <StyledText style={styles.priceText}>$3.50</StyledText>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <StyledText style={styles.category}>What you could get</StyledText>
          <View style={styles.boxContainer}>
            <Image source={box} style={styles.boxImage} />
            <StyledText>
              It's a surprise! When you buy a{"\n"}mystery Bag, it will be
              filled with{"\n"}the delicious food that the store{"\n"}has left
              at the end of the day.
            </StyledText>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <StyledText style={styles.category}>Collect your bag here</StyledText>
          <StyledText style={styles.address}>
            21 New Row Covent Garden, London WC2N 4LA UK
          </StyledText>
          <StyledText style={styles.map} onPress={this._handlePress}>
            <Ionicons name="md-compass" size={20} color="black" /> Direction
          </StyledText>
        </View>
        <TouchableOpacity
          style={styles.reserveContainer}
          onPress={() => this.setState({ showInfoModal: true })}
        >
          <StyledText style={styles.reserveText}>RESERVE</StyledText>
        </TouchableOpacity>

        {/* INFO MODAL */}
        <Modal.BottomModal
          useNativeDriver
          height={0.6}
          overlayOpacity={0.4}
          visible={showInfoModal}
          onTouchOutside={() => this.setState({ showInfoModal: false })}
          onSwipeOut={() => this.setState({ showInfoModal: false })}
          modalAnimation={
            new SlideAnimation({
              slideFrom: "bottom",
            })
          }
        >
          <ModalContent style={styles.modalContainer}>
            <Image source={box} style={styles.boxImage} />
            <StyledText style={styles.infoModalTitle}>
              Your mystery box is{"\n"}surprise
            </StyledText>
            <StyledText style={styles.infoModalText}>
              We can't predict what will be in your mystery bag as it depends on
              what the store has in surplus. If you're concerned about allergens
              or ingredients please ask the store.
            </StyledText>
            <TouchableOpacity
              style={styles.infoModalButtonContainer}
              onPress={() =>
                this.setState({ showPaymentModal: true, showInfoModal: false })
              }
            >
              <StyledText style={styles.reserveText}>GOT IT!</StyledText>
            </TouchableOpacity>
          </ModalContent>
        </Modal.BottomModal>

        {/* PAYMENT MODAL */}
        <Modal.BottomModal
          useNativeDriver
          height={0.5}
          overlayOpacity={0.4}
          visible={showPaymentModal}
          onTouchOutside={() => this.setState({ showPaymentModal: false })}
          onSwipeOut={() => this.setState({ showPaymentModal: false })}
          modalAnimation={
            new SlideAnimation({
              slideFrom: "bottom",
            })
          }
        >
          <ModalContent style={styles.modalContainer}>
            <StyledText style={styles.paymentModalTitle}>
              Resturant Name - City{"\n"}Lunch
            </StyledText>
            <View style={styles.quantityContainer}>
              <StyledText style={styles.paymentModalTitle}>
                Select quantity
              </StyledText>
              <View style={styles.quantityCalculatorContainer}>
                <AntDesign name="minuscircle" size={24} color={Colors.four} />
                <StyledText style={styles.quantity}>1</StyledText>
                <AntDesign name="pluscircle" size={24} color={Colors.one} />
              </View>
              <StyledText style={styles.paymentModalTitle}>
                Total $ 3.50
              </StyledText>
            </View>
            <TouchableOpacity
              style={styles.infoModalButtonContainer}
              onPress={() => {
                this.setState({ showPaymentModal: false });
              }}
            >
              <StyledText style={styles.reserveText}>RESERVE</StyledText>
            </TouchableOpacity>
          </ModalContent>
        </Modal.BottomModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    resizeMode: "center",
    height: 200,
    width: "100%",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: Colors.five,
    borderBottomWidth: 1,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  category: {
    fontWeight: "bold",
    fontSize: 16,
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  prePriceText: {
    textDecorationLine: "line-through",
    fontSize: 14,
  },
  resName: {
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  boxCount: {
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "white",
    fontWeight: "bold",
    backgroundColor: Colors.one,
  },
  resLogo: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  logoContainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    bottom: -10,
  },
  itemContainer: {
    marginTop: 10,
    paddingTop: 5,
    paddingHorizontal: 10,
    borderColor: Colors.five,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxImage: {
    width: 150,
    height: 120,
    margin: 10,
  },
  address: {
    fontSize: 14,
    marginVertical: 10,
  },
  map: {
    borderColor: Colors.five,
    paddingVertical: 10,
    borderTopWidth: 1,
    fontWeight: "bold",
    alignSelf: "center",
  },
  reserveContainer: {
    padding: 20,
    bottom: 0,
    width: "100%",
    position: "absolute",
    borderTopWidth: 1,
    borderColor: Colors.five,
  },
  reserveText: {
    backgroundColor: "red",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  infoModalTitle: {
    textAlign: "center",
    padding: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.one,
  },
  paymentModalTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityContainer: {
    margin: 20,
    padding: 10,
    borderColor: Colors.five,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  infoModalText: {
    textAlign: "center",
    color: Colors.four,
    padding: 10,
  },
  infoModalButtonContainer: {
    padding: 20,
    width: "100%",
  },
  quantityCalculatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  quantity: {
    paddingHorizontal: 20,
    fontSize: 30,
    color: Colors.one,
    fontWeight: "bold",
  },
});
