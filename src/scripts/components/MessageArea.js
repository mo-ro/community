import React from 'react';

const MessageArea = ({ message, submitting, submitMessage }) => {
  console.log(submitting, submitMessage)
  return (
    <div className="message-area">
      <div className="display">{message}</div>
      <div className="message"></div>
      <button className="submit" onClick={() => {submitMessage(message)}}>送信</button>
    </div>
  )
}

export default MessageArea;