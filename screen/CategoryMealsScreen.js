import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealList from "../component/MealList";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("catId");
  // const selectCategory = CATEGORIES.find((itm) => itm.id === categoryId);
  const displayModels = MEALS.filter(
    (itm) => itm.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList data={displayModels} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("catId");
  const selectCategory = CATEGORIES.find((itm) => itm.id === categoryId);
  return {
    headerTitle: selectCategory.title,
  };
};
const styles = StyleSheet.create({});

export default CategoryMealsScreen;
