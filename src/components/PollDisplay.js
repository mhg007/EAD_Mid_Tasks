import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const poll = {
  question: "What is your favorite programming language?",

  choices: [
    { id: 1, label: "JavaScript", votes: 0 },

    { id: 2, label: "Python", votes: 0 },

    { id: 3, label: "Java", votes: 0 },

    { id: 4, label: "C#", votes: 0 },
  ],
};

class PollDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vote_javascript: 0,
      vote_python: 0,
      vote_java: 0,
      vote_csharp: 0,
      poll,
    };
  }
  increaseVoteJavaScript = () => {
    this.setState({
      vote_javascript: this.state.vote_javascript + 1,
    });
    console.log(this.state.vote_javascript);
  };
  increaseVotePython = () => {
    this.setState({
      vote_python: this.state.vote_python + 1,
    });
    console.log(this.state.vote_python);
  };
  increaseVoteJava = () => {
    this.setState({
      vote_java: this.state.vote_java + 1,
    });
    console.log(this.state.vote_java);
  };
  increaseVoteCsharp = () => {
    this.setState({
      vote_csharp: this.state.vote_csharp + 1,
    });
    console.log(this.state.vote_csharp);
  };
  render() {
    return (
      <>
        <nav>
          <button>User 1</button>
          <button>User 2</button>
        </nav>

        <h1>Polling App</h1>
        <div>PollDisplayComponent</div>
        <h2>{this.state.poll.question}</h2>

        <form>
          <div className="radio">
            <label>
              <input
                name="javascript"
                id="javascript"
                type="radio"
                value="JavaScript"
                onClick={this.increaseVoteJavaScript}
              />
              JavaScript
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                name="python"
                id="python"
                type="radio"
                value="Python"
                onClick={this.increaseVotePython}
              />
              Python
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                name="java"
                id="java"
                type="radio"
                value="Java"
                onClick={this.increaseVoteJava}
              />
              Java
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                name="csharp"
                id="csharp"
                type="radio"
                value="C#"
                onClick={this.increaseVoteCsharp}
              />
              C#
            </label>
          </div>
        </form>
      </>
    );
  }
}
export default PollDisplay;
