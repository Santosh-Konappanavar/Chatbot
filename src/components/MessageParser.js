class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      if(message != ''){
        this.actionProvider.handleName()
      }
    }
  }
  
  export default MessageParser;