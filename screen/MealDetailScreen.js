import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../component/HeaderButton";

const MealDetailScreen = (props) => {
  const MealGetId = props.navigation.getParam("mealId");
  const SelectDetail = MEALS.find((itm) => itm.id === MealGetId);

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const MealGetId = navigationData.navigation.getParam("mealId");
  const SelectDetail = MEALS.find((itm) => itm.id === MealGetId);
  return {
    headerTitle: SelectDetail.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="favourite"
            iconName="ios-star"
            onPress={() => {
              console.log("favirote");
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
