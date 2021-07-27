import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const RenderMeals = (props) => {
  return (
    <View style={styles.MealContainer}>
      <TouchableOpacity onPress={props.onSelect}>
        <View style={{ height: "100%" }}>
          <View style={styles.ImageContainer}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.HeadingRecipie}>
                <Text style={styles.Headertitle}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              backgroundColor: "grey",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              flex: 0.2,
            }}
          >
            <Text style={styles.txt}>{props.duration}min</Text>
            <Text style={styles.txt}>{props.complaxity}</Text>
            <Text style={styles.txt}>{props.expensive}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MealContainer: {
    // borderColor: "black",
    // borderWidth: 1,
    width: "100%",
    height: 250,
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
    elevation: 10,
    overflow: "hidden",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  ImageContainer: {
    flexDirection: "column",
    overflow: "hidden",
    flex: 1,
    // borderColor: "red",
    // borderWidth: 3,
  },
  HeadingRecipie: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  Headertitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  txt: {
    fontSize: 14,
    color: "white",
  },
});

export default RenderMeals;
