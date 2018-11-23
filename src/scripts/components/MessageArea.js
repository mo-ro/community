import React from 'react';

const MessageArea = ({ message, submitMessage, editMessage }) => {
  return (
    <div className="message-area">
      <div className="display">{message}</div>
      <div className="message" contentEditable="true" onInput={(event) => editMessage(event.target.textContent)}>
      </div>
      <button className="submit" onClick={submitMessage}>送信</button>
    </div>
  )
}

export default MessageArea;