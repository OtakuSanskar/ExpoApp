import React from "react";
import {View, Text, StyleSheet, SafeAreaView, FlatList} from "react-native";
import RawData from "./scr/data/RawData";

const App = () => {
    return(
        <Flatlist data={ArrayColors} keyExtractor={(item) => item.hex}/>
    )
}

export default App;

const styles = StyleSheet.create({

})