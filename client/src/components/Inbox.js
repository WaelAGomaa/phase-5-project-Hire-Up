import {useEffect, useState} from 'react';
import ChatSummary from "./ChatSummery";

function InBox({ currentUser}) {
    const [conversations, setConversations] = useState([]);
    const [currentConvo, setCurrentConvo] = useState();
  useEffect(() => {
    fetch(`/conversations/userindex/${currentUser.id}`)
      .then((res) => res.json())
      .then((res_conversations) => setConversations(res_conversations));
  }, []);
  return (
    <div className="Inbox">
      <h1>{`${currentUser.username}'s Inbox`}</h1>
      {conversations.map((conversation) => (
        <ChatSummary
          id={conversation.id}
          conversation={conversation}
          currentUser={currentUser}
          setCurrentConvo={setCurrentConvo}
        />
      ))}
    </div>
  );
}

export default InBox;
