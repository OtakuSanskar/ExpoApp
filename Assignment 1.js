import React from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import ColorBox from "./scr/components/ColorBox";


const App = () => {
  return (
      <View style={style.container}>
        <Text style={style.head}>Boxes</Text>
        <ColorBox color= "red" Name= "Red"/>
        <ColorBox color= "blue" Name= "Blue"/>
        <ColorBox color= "green" Name= "Green"/>
        <ColorBox color= "violet" Name= "Violet"/>
        <ColorBox color= "pink" Name= "Pink"/>
      </View>
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  head: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  }
})