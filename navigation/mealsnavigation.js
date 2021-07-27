import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import CategoriesScreen from "../screen/CategoriesScreen";
import CategoryMealsScreen from "../screen/CategoryMealsScreen";
import MealDetailScreen from "../screen/MealDetailScreen";
import FavoritesScreen from "../screen/FavoritesScreen";
import FiltersScreen from "../screen/FiltersScreen";
import { Ionicons } from "@expo/vector-icons";
// import { DrawerItems } from "react-navigation-drawer";

const defaultNavigationSettings = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "blue" : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : "blue",
};

const Mealnavigator = createStackNavigator(
  //Categories Name
  {
    CategoriesScreen: CategoriesScreen,
    CategoryMealsScreen: CategoryMealsScreen,
    MealDetailScreen: MealDetailScreen,
  },

  //default Navigation Options
  {
    defaultNavigationOptions: defaultNavigationSettings,
  }
);

const favorite = createStackNavigator(
  {
    favorite: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationSettings,
  }
);
const FilterNavigater = createStackNavigator(
  {
    Filter: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationSettings,
  }
);

const favtabNavigation = createBottomTabNavigator({
  Meals: {
    screen: Mealnavigator,

    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />
        );
      },
    },
  },

  Favorites: {
    screen: favorite,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />;
      },
    },
  },
});

const MainDrawer = createDrawerNavigator({
  Home: favtabNavigation,
});

// export default createAppContainer(Mealnavigator);
// export default createAppContainer(favtabNavigation);
export default createAppContainer(MainDrawer);
