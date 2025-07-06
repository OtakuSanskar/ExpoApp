import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from "react-native";
import {ArrayColors} from "./src/components/RawData";
import ColorBox from "./src/components/ColorBox";

const App = () => {
  return (
    <FlatList
      style={style.container}
      data={ArrayColors}
      keyExtractor={(item) => item.hex}
      renderItem={({ item }) => (
        <ColorBox hexValue={item.hex} name={item.name} />
      )}
      ListHeaderComponent={<Text style={style.text}>Color List</Text>}
    />
  );
};


export default App;

const style = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  text: {
    color: "black",
    fontWeight: "800",
    marginBottom: 20,
    fontSize: 24,
    paddingTop: 25,
  }
})