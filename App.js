import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";
const App = () => {
  return (
      <View>
        <Text style={style.top}>Hello Sanskar!!</Text>
      </View>
  );
}

export default App;

const style = StyleSheet.create({
  top: {
    padding: 100,
    backgroundColor: "blue",
    color: "white",
    fontSize: 30,
    textAlign: "center",
  }
})