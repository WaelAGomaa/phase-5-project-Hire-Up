function ChatBox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`/conversations/${currentConvo.id}/messages`)
      .then((res) => res.json())
      .then((msgs) => setMessages(msgs));
  }, []);

  let me = currentConvo.user_a_name === currentUser.name;

  const [newMessage, setNewMessage] = useState("");
  
  function handleChange(e) {
    setNewMessage(e.target.value);
    function handleSend(e) {
      e.preventDefault();
      fetch(`conversations/${currentConvo.id}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: newMessage,
          user_id: currentUser.id,
          conversation_id: currentConvo.id,
        }),
      })
        .then((res) => res.json())
        .then((newMessage) => {
          setMessages([...messages, newMessage]);
          setNewMessage("");
        });
      e.target.reset();
    }
  }
  return (
    <div className="container-sm chatbox">
      <h1>{me ? currentConvo.user_a_name : currentConvo.user_b_name}</h1>
      {messages.map((message) => (
        <p
          className={messageClass(message)}
        >{`${message.sender} said: ${message.body}`}</p>
      ))}
      <form onSubmit={handleSend}>
        <input type="text" value={newMessage} onChange={handleChange}></input>
        <button type="submit" >send</button>
      </form>
    </div>
  );
}

export default ChatBox;
