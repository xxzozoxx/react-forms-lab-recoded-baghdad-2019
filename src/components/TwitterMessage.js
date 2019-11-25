import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageContent:""
    };
  }
handleInput = (event) => {
  this.setState({messageContent:event.target.value})
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.messageContent} onChange={event => this.handleInput(event)} />
        {this.props.maxChars-this.state.messageContent.length}
      </div>
    );
  }
}

export default TwitterMessage;
