import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../component/HeaderButton";

const CategoriesScreen = (props) => {
  // console.log(props);
  const renderGridItems = (itemData) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.gridItem,
          ...{ backgroundColor: itemData.item.color },
        }}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMealsScreen",
            params: { catId: itemData.item.id },
          });
        }}
      >
        <View>
          <Text style={styles.textStyle}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItems}
      numColumns={2}
      // backgroundColor="black"
    />
  );
};

CategoriesScreen.navigationOptions = (navdata) => {
  return {
    headerTitle: "Meals categories",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="favourite"
            iconName="ios-menu"
            onPress={() => {
              navdata.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 50,
    // borderColor: "black",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
    elevation: 10,
  },
  textStyle: {
    // fontFamily: "open-sans",
    fontWeight: "700",
    fontSize: 18,
    color: "black",
  },
});

export default CategoriesScreen;
