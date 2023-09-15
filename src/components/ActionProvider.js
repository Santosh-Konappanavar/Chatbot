class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello, Welcome to student info system!");
    this.addMessageToState(message);
  };

  handleGotIt = () => {
    const message = this.createChatBotMessage(
      "Enter your Name",
      {
        widget: "entername",
      }
    );

    this.addMessageToState(message);
  };

  handleName = () => {
    const message = this.createChatBotMessage(
      "Select Your Age",
      {
        widget: "selectage",
      }
    );

    this.addMessageToState(message);
  };

  handleAge = (age) => {
    console.log(age)
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
