import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealList from "../component/MealList";

const FavoritesScreen = (props) => {
  const FaviroteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  console.log(FaviroteMeals);
  return <MealList data={FaviroteMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Favorite",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
