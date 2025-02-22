import React from "react";
import userContext from "../utils/userContext";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  render() {
    return (
      <div>
        <h2>Counter : {this.state.counter}</h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase Count
        </button>
        <userContext.Consumer>
          {(data) => <div>{data.firstName}</div>}
        </userContext.Consumer>
      </div>
    );
  }
}

export default AboutClass;
