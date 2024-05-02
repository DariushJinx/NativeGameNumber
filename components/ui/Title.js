import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import React from "react";

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 12,
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 24,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
