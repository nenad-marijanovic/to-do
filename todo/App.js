import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NoteScreen from "./NotesScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: NoteScreen }
    //todo: add additional screens
  },
  {
    initialRouteName: "Home"
  }
);

const App = createAppContainer(AppNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
