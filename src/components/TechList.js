import React, { Component } from "react";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"]
  };

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
   * Render all content on webpage.
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
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
