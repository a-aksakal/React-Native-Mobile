import React, { useContext } from "react";

import { StyleSheet, Text, View, TextInput } from "react-native";
import { FavReducer } from "./src/store/reducers/fav.reducer";

import CartContext, { CartProvider } from "./src/store/CartContext";
import TabNavigator from "./src/navigations/tab/TabNavigator";
import { createStore } from "redux";
import { Provider } from "react-redux";

export default function App() {
  const store = createStore(FavReducer);
  return (
    <>
      <Provider store={store}>
        <CartProvider>
          <TabNavigator></TabNavigator>
        </CartProvider>
      </Provider>
    </>
  );
}
