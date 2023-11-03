import { useState } from 'react';

const Message = () => {
  const [messages, setMessages] = useState(['메세지1', '메세지2', '메세지3']);

  const lis = messages.map((m, i) => <li key={i}>{m}</li>);

  const handleClick = () => {
    setMessages(messages.concat('메세지4'));
    console.log(messages);
  };

  return (
    <>
      <ul>{lis}</ul>
      <button type="button" onClick={handleClick}>
        메세지4 추가
      </button>
    </>
  );
};

export default Message;
