import React, { Component } from "react";
import { Image, Text, View, TextInput, Button } from "react-native";
import Note from "./Note";
import axios from "axios";

export default class NoteScreen extends Component {
  state = {
    notes: [],
    noteValue: ""
  }

  renderNotes = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        let readNotes = response.data
        console.log(JSON.stringify(readNotes))
        this.setState({
          notes: readNotes
        })
        console.log(JSON.stringify(this.state.notes));
        let notes = this.state.notes.map(item => {
          console.log(item)
          return <Note delete={this.obrisi} note={item} key={item.id}/>
        })
        return notes;
      })
      .catch(err => {
        console.log(err)
      })
  };

  upisiNotes = () => {
    return true;
    let newNotes = [...this.state.notes]
    newNotes.push(this.state.noteValue)
    this.setState({
      notes: newNotes
    });
  };

  obrisi = note => {
    let notes = [...this.state.notes];
    let index = notes.indexOf(note);
    notes.splice(index, 1);
    this.setState({
      notes
    });
  };

  render() {
    return (
      <View style={{ position: "absolute", top: 70, alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            borderWidth: 3,
            padding: 7,
            borderColor: "grey",
            margin: 20,
            width: 310
          }}
        >
          <TextInput
            style={{
              height: 38,
              margin: 10,
              borderColor: "#d6d7da",
              borderWidth: 2,
              padding: 7
            }}
            placeholder="Ukucaj svoj notes ovde"
            onChangeText={noteValue => this.setState({ noteValue })}
            value={this.state.noteValue}
          />
          <Button
            onPress={this.upisiNotes}
            title="Unesi notes"
            color="#841584"
            style={{ width: 110 }}
          />
        </View>
        {this.renderNotes()}
      </View>
    );
  }
}
