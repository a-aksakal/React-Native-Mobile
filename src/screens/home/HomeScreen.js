import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import ImageZoom from "react-native-image-pan-zoom";

//https://www.korezin.com/wp-content/uploads/2020/02/download-36.jpg

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const Pressed = () => {
    alert("ok");
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.box2_box} key={item.id}>
        <View style={styles.box2_box_element_image}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.box2_box_image}
          ></Image>
        </View>

        <View style={styles.box2_box_element_detail}>
          <Text style={styles.box2_detail_name}>{item.title.slice(0, 30)}</Text>
          <View style={styles.box2_box_element_detail_star}>
            <AntDesign name="star"></AntDesign>
            <AntDesign name="star"></AntDesign>
            <AntDesign name="star"></AntDesign>
            <AntDesign name="star"></AntDesign>
            <AntDesign name="star"></AntDesign>
          </View>
        </View>
        <View style={styles.box2_box_element_price}>
          <Text style={styles.box2_price_name}>
            {item.description.slice(0, 40)}
          </Text>
          <Text style={styles.box2_price_number}>{item.price}TL</Text>
        </View>
        <View style={styles.box2_box_element_button}>
          <Pressable style={styles.cart_pressable}>
            <Text style={styles.cart_pressable_text}>Sepete Ekle</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.header_pressable}>
          <MaterialCommunityIcons name="menu" size={45} />
        </Pressable>
        <Pressable style={styles.header_pressable}>
          <Ionicons name="notifications" size={30} />
        </Pressable>
      </View>
      <View style={styles.box1}>
        <Text style={styles.box1_text}>New Arrival</Text>
        <Pressable>
          <MaterialCommunityIcons
            name="arrow-right"
            size={26}
          ></MaterialCommunityIcons>
        </Pressable>
      </View>
      <View style={styles.box2}>
        <FlatList
          data={products}
          renderItem={renderItem}
          horizontal
          style={styles.flatlist}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#EBECF4",
  },
  flatlist: {
    backgroundColor: "#EBECF4",
  },
  header: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_pressable: {
    backgroundColor: "#F0F0FF",
    height: 50,
    width: 50,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  cart_pressable: {
    backgroundColor: "#F0F0FF",
    height: 40,
    width: 100,
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  cart_pressable_text: {
    fontWeight: "700",
  },
  box1: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box1_text: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Helvetica Neue",
  },
  box2: {
    flex: 15,
    flexDirection: "row",
  },
  box2_box: {
    flex: 2,
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    marginRight: 20,
    borderRadius: 15,
  },
  box2_box_element_image: {
    flex: 5,
  },
  box2_box_element_button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,
  },
  box2_box_element_detail: {
    flex: 2,
    justifyContent: "flex-start",
    paddingLeft: 10,
    flexShrink: 1,
  },
  box2_box_element_detail_star: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  box2_detail_name: {
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 10,
    paddingTop: 10,
  },
  box2_price_name: {
    fontSize: 12,
    fontWeight: "600",
    paddingBottom: 10,
  },
  box2_price_number: {
    color: "#D1D1DF",
    fontWeight: "bold",
    fontSize: 20,
  },
  box2_box_element_price: {
    flex: 2,
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  box2_box_image: {
    flex: 1,
    width: "100%",
    height: 200,
    borderRadius: 15,
    resizeMode: "contain",
  },
  box2_box_button: {
    flex: 1,
    borderStyle: "solid",
  },
});

export default HomeScreen;
