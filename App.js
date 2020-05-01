import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Ball from "./src/Ball";
import Deck from "./src/Deck";
import { Card, Button } from "react-native-elements";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    text: "Card #2",
    uri:
      "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    text: "Card #3",
    uri:
      "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    text: "Card #4",
    uri:
      "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    text: "Card #5",
    uri: "https://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg",
  },
  {
    id: 6,
    text: "Card #6",
    uri: "https://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg",
  },
  {
    id: 7,
    text: "Card #7",
    uri: "https://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg",
  },
  {
    id: 8,
    text: "Card #8",
    uri: "https://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg",
  },
];

class App extends Component {
  renderCard = (item) => {
    return (
      <Card title={item.text} image={{ uri: item.uri }} key={item.id}>
        <Text style={{ marginBottom: 10 }}>i can customize this further</Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor='#03A9F4'
          title='View Now !!'
        />
      </Card>
    );
  };

  renderNoMoreCards = () => {
    return (
      <Card title='All Done'>
        <Text style={{ marginBottom: 10 }}>There are no more content Here</Text>
        <Button backgroundColor='#03A9F4' title='Get More' />
      </Card>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          onSwipeRight={() => console.log("something was swiped")}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
