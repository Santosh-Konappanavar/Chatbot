import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Option from "./chatoptions/Option";
import Age from "./chatoptions/Age";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(` Hello, Welcome to student info system!`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Option {...props} />,
    },
    {
      widgetName: "selectage",
      widgetFunc: (props) => <Age {...props} />,
    },
  ],
};

export default config;
