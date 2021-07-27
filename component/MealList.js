import React from "react";
import { StyleSheet, FlatList } from "react-native";
import RenderMeals from "../component/renderMeals";

const MealList = (props) => {
  const renderGridItems = (itemData) => {
    return (
      <RenderMeals
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complaxity={itemData.item.complexity}
        expensive={itemData.item.affordability}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetailScreen",
            params: { mealId: itemData.item.id },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderGridItems}
      numColumns={1}
      // backgroundColor="black"
      style={{ padding: 20 }}
    />
  );
};

const styles = StyleSheet.create({});

export default MealList;
