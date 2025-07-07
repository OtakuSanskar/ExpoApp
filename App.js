import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
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
        <StackNavigator.Navigator initialRouteName="Home">
           <StackNavigator.Screen name="Home" component={Home} options={{title: "Dashboard"}}/>
           <StackNavigator.Screen name="Profile" component={Profile} options={{title: "User Settings"}}/>
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