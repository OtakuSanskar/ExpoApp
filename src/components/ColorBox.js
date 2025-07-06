import React from "react";
import {View, Text, StyleSheet} from "react-native";

const ColorBox = (props) => {
    return (
        <View style={[styles.box, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.Name}</Text>
        </View>
    );
}

export default ColorBox;

const styles = StyleSheet.create({
    box: {
    marginLeft: 20,
    marginTop: 15,
    marginRight: 20,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  }
})