import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";

const StackNavigator = createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <StackNavigator.Navigator>
           <StackNavigator.Screen name="Home" component={Home} />
        </StackNavigator.Navigator>
      </NavigationContainer>
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