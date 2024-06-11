import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { firestore } from "../../firebase/firebase";
import useSnackbar from "../../hooks/useSnackbar";

const AnonymMessage = () => {
  const [message, setMessage] = useState("");

  const snackbar = useSnackbar();

  const sendMessage = async () => {
    if (message.trim()) {
      await addDoc(collection(firestore, "messages"), {
        text: message,
        createdAt: serverTimestamp(),
      });
      snackbar.success(`Berhasil kirim pesan ke mail!`);
      setMessage("");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Send Anonymous Message to Mael!
        </h2>
        <div className="w-full max-w-md">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2 text-black"
            placeholder="Type your message here..."
          />
          <button
            onClick={sendMessage}
            className="w-full bg-[#1a2a3f] text-white p-2 rounded hover:bg-[#33445b]"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default AnonymMessage;
