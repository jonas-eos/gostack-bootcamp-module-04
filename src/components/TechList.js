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
            <li key={tech}>
              {tech}
              <button type="button" onClick={() => this.hadleDelete(tech)}>
                Remove
              </button>
            </li>
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
