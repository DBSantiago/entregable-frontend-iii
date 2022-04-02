import React from "react";
import StoryText from "../StoryText/StoryText.js";
import StoryButtons from "../StoryButtons/StoryButtons.js";
import StorySelections from "../StorySelections/StorySelections.js";
import "./StoryCard.css";

export default class StoryCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pointer: "1",
      text: "",
      buttonTextA: "",
      buttonTextB: "",
      selections: [],
    };

    this.newSelection = this.newSelection.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    const data = require("../data.json");

    this.setState({
      text: data[0].historia,
      buttonTextA: data[0].opciones.a,
      buttonTextB: data[0].opciones.b,
    });
  }

  newSelection(selection) {
    const newSelections = [...this.state.selections, selection];

    this.setState({
      selections: newSelections,
    });
  }

  changeText(newPointer) {
    const data = require("../data.json");

    let newText = "";
    let newButtonTextA = "";
    let newButtonTextB = "";

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.id === newPointer) {
        newText = element.historia;
        newButtonTextA = element.opciones.a;
        newButtonTextB = element.opciones.b;
      }
    }

    this.setState({
      pointer: newPointer,
      text: newText,
      buttonTextA: newButtonTextA,
      buttonTextB: newButtonTextB,
    });

    //console.log("new pointer:" + newPointer);
    //console.log("se ejecuto changetext");
  }

  render() {
    return (
      <div className="story-card">
        <StoryText text={this.state.text} />
        <StoryButtons
          newSelection={this.newSelection}
          changeText={this.changeText}
          buttonTextA={this.state.buttonTextA}
          buttonTextB={this.state.buttonTextB}
          pointer={this.state.pointer}
        />
        <StorySelections selections={this.state.selections} />
      </div>
    );
  }
}
