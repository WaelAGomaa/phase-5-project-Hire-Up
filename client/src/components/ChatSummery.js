import {useNavigate} from 'react';
function ChatSummary({ setCurrentUser, currentUser, conversation, setCurrentConvo }) {
    let me = conversation.user_a_name === currentUser.username;
    let navigate = useNavigate();
    function renderChatbox() {
      setCurrentConvo(conversation);
      navigate(`/inbox/${conversation.id}`);
    }
  return (
    <div className="chatsummary" onClick={renderChatbox}>
      <h2>{me ? conversation.recipient : conversation.sender}</h2>{" "}
      <p>
        {me
          ? `${conversation.last_message.sender} said: ${conversation.last_message.body}`
          : `you said: ${conversation.last_message.body}`}
      </p>
    </div>
  );
}
export default ChatSummary;
