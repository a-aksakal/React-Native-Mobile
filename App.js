import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import HomeStackScreen from "./src/navigations/stack/HomeStackScreen";
import SearchStackScreen from "./src/navigations/stack/SearchStackScreen";
import CartStackScreen from "./src/navigations/stack/CartStackScreen";
import FavoriteStackScreen from "./src/navigations/stack/FavoriteStackScreen";
import ProfileStackScreen from "./src/navigations/stack/ProfileStackScreen";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Search"
          component={SearchStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" color={color} size={26} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Cart"
          component={CartStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="cart" color={color} size={26} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Favorite"
          component={FavoriteStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cards-heart"
                color={color}
                size={26}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" color={color} size={26} />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
