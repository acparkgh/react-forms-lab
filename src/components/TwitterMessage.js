import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      twitterMessage: ""
    };
  }

  handleTwitterMessage = (twitterMessage) => {
    // debugger
    this.setState({
      twitterMessage: twitterMessage.target.value
    })
  }

  handleRemainingCount = () => {
    //  debugger
    const maxCharacters = this.props.maxChars
    let usedCharacters = this.state.twitterMessage.length
    return (
      // this.props.maxChars - this.state.twitterMessage.length
      maxCharacters - usedCharacters
    )
  }

  render() {
    let remainingChar = this.props.maxChars - this.state.twitterMessage.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
               value={this.state.twitterMessage} 
               onChange={event => this.handleTwitterMessage(event)}
        />
        {/* <h4>{this.props.maxChars - this.state.twitterMessage.length} characters remaining</h4> */}
        <h4>{this.handleRemainingCount()} characters remaining</h4>
        {remainingChar} remaining characters
      </div>
    );
  }
}

export default TwitterMessage;
