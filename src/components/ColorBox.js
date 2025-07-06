import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const ColorBox = (props) => {
  const backgroundStyle = {
    backgroundColor: props.hexValue,
  };
  return(
    <View style={[styles.box, backgroundStyle]}>
      <Text style={styles.text}>
        {props.name} {props.hexValue}
      </Text>
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontweight: "800",
    color: "white",
    fontSize: 16,
  }
});