import React, { Component } from "react";
import axios from "axios";
class Jokelist extends Component {
  async componentDidMount() {
    let res = await axios.get("https://icanhazdadjoke.com/", {
      header: {
        Accept: "application/json",
      },
    });
    console.log(res.data.joke);
  }

  render() {
    return (
      <div>
        <h1>Dad Jokes</h1>
      </div>
    );
  }
}

export default Jokelist;
