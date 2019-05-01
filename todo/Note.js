import React, { Component } from "react";
import { Image, Text, View, CheckBox, TouchableHighlight } from "react-native";

export default class Note extends Component {
  state = {
    checked: false,
    text: ""
  };

  menjaj = () => {
    console.log("Menjaj me!");
    this.setState(previousState => ({
      checked: !previousState.checked
    }));
  };

  handleDelete = () => {
    this.props.delete(this.props.note);
  };

  render() {
    return (
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          borderWidth: 0.5,
          padding: 2,
          margin: 3,
          borderColor: "#d6d7da",
          width: 310
        }}
      >
        <CheckBox onChange={this.menjaj} value={this.props.note.completed} />
        <View>
          <Text style={{ flex: 1, fontSize: 20 }}>{this.props.note.title}</Text>
        </View>
        <TouchableHighlight onPress={this.handleDelete}>
          <Image
            source={require("./assets/smece.png")}
            style={{ width: 25, height: 25 }}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>
    );
  }
}
