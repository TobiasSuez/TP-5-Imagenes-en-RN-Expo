import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.Container}>
        <Image source={require("../imgs/coffee1.jpeg")} style={styles.image} />
        <Text style={styles.cardText}>Mocha</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 50,
  },
  cardText: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  Container: {
    backgroundColor: "rgba(0, 150, 0, 0.7)",
    padding: 10,
    position: "relative",
    borderRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    width:'210px'
  },
});

export default Card;
