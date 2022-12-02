import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

const Navigator = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, paddingTop: 60, backgroundColor: "white" }}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.push("courses")}
      >
        <Text style={styles.buttonText}>courses</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.push("basic")}>
        <Text style={styles.buttonText}>basic nav</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.push("shared")}
      >
        <Text style={styles.buttonText}>shared element nav</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.push("shared-gesture")}
      >
        <Text style={styles.buttonText}>shared element + gesture nav</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.push("interpolation")}
      >
        <Text style={styles.buttonText}>interpolation</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 60,
    marginHorizontal: 20,
    paddingBottom: 10,
    borderBottomHeight: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#efefef",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "700",
  },
});

export default Navigator;
