import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // shadow for android
    shadowColor: "black", // shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // shadow for iOS
    shadowRadius: 6, // shadow for iOS
    shadowOpacity: 0.25, // shadow for iOS
  },
});
