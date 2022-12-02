import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CoursesNav = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, paddingTop: 60, backgroundColor: "white" }}>
      <Pressable style={styles.button} onPress={() => navigation.push("fling")}>
        <Text style={styles.buttonText}>lesson 1 - Fling</Text>
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

export default CoursesNav;
