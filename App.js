import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Mealnavigator from "./navigation/mealsnavigation";
import AppLoading from "expo-app-loading";
// import { AppLoading } from "expo";

import * as Font from "expo-font";
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontloaded, setfontloaded] = useState(false);

  if (!fontloaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setfontloaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
    // console.log(fetchfonts);
  }
  return <Mealnavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
