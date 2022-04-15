import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { connect } from "react-redux";
const FavoriteScreen = (props) => {
  return (
    <SafeAreaView>
      <Text>FavoriteScreen</Text>
      <Text>{props.favorite.length}</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    favorite: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (data) => {
      dispatch(addFav(data));
    },
  };
};

export default connect(mapStateToProps)(FavoriteScreen);
