// src/components/MessagesList.js
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase";

const MessagesList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesRef = collection(firestore, "messages");
        const q = query(messagesRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const messagesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messagesData);
      } catch (error) {
        console.error("Error fetching messages: ", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="p-4 bg-[#0a141f] text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">All Messages</h2>
      <ul>
        {messages.map((message) => (
          <li
            key={message.id}
            className="mb-2 p-2 border border-gray-700 rounded"
          >
            {message.text}
            <br />
            <span className="font-bold text-sm opacity-50">
              {message.createdAt.toDate().toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesList;
