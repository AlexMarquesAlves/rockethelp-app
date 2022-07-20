import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Duque</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#312e38",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
  },
});
