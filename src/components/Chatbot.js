import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import config from './config'
import MessageParser from './MessageParser'
import 'react-chatbot-kit/build/main.css'
import ActionProvider from './ActionProvider';


const ChatbotComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};

export default ChatbotComponent;
