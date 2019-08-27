import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };

  /**
   * Run on component load event.
   * On load event read techs and put it on the screen.
   */
  componentDidMount() {
    const techs = localStorage.getItem("techs");
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  /**
   * Run every time that prop and states are changed.
   * If prev state are diff then actual state, save to local storage.
   */
  componentDidUpdate(prevProps, prevState) {
    // this.props
    // this.state
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  /**
   * Run on after component are destroyed.
   */
  componentWillUnmount() {}

  /**
   * Get all type on screen and save on newTech.
   */
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  /**
   * Submit event, prevent page reload after click on send button.
   * Save text inside input form on techs.
   * After that, the newTech are cleaned up.
   */
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  /**
   * Delete a tech inside techs.
   */
  hadleDelete = __tech => {
    this.setState({
      techs: this.state.techs.filter(__techIndex => __techIndex !== __tech)
    });
    console.log(__tech);
  };

  /**
   * Render all content on webpage.
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.hadleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default TechList;
