
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import socketIO from "socket.io-client";
import { format } from "timeago.js";
import Header from "../components/Layout/Header";
import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";
import { TfiGallery } from "react-icons/tfi";
import { server, socket_server } from "../server";
import styles from "../styles/styles";

const ENDPOINT = socket_server;

const UserInbox = () => {
  const { user, loading } = useSelector((state) => state.user);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [userData, setUserData] = useState(null);
  const [activeStatus, setActiveStatus] = useState(false);
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const socketRef = useRef();

  // Initialize Socket
  useEffect(() => {
    socketRef.current = socketIO(ENDPOINT, { transports: ["websocket"] });

    socketRef.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text || null,
        images: data.images || null,
        createdAt: Date.now(),
      });
    });

    if (user?._id) {
      socketRef.current.emit("addUser", user._id);
      socketRef.current.on("getUsers", (data) => setOnlineUsers(data));
    }

    return () => socketRef.current.disconnect();
  }, [user?._id]);

  // Handle incoming message
  useEffect(() => {
    if (arrivalMessage && currentChat?.members.includes(arrivalMessage.sender)) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage, currentChat]);

  // Fetch conversations
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          `${server}/conversation/get-all-conversation-user/${user?._id}`,
          { withCredentials: true }
        );
        setConversations(res.data.conversations);
      } catch (err) {
        console.log(err);
      }
    };
    if (user?._id) getConversations();
  }, [user?._id]);

  // Fetch messages for current chat
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `${server}/message/get-all-messages/${currentChat?._id}`
        );
        setMessages(res.data.messages);
      } catch (err) {
        console.log(err);
      }
    };
    if (currentChat) getMessages();
  }, [currentChat]);

  // Scroll to bottom on new messages
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Online check
  const onlineCheck = (chat) => {
    const memberId = chat.members.find((m) => m !== user?._id);
    return onlineUsers.some((u) => u.userId === memberId);
  };

  // Send text message
  const sendMessageHandler = async (e) => {
    e.preventDefault();
    if (!newMessage && !images) return;

    const message = {
      sender: user._id,
      text: newMessage,
      images: images || null,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find((m) => m !== user._id);

    socketRef.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
      images: images || null,
    });

    try {
      const res = await axios.post(
        `${server}/message/create-new-message`,
        message
      );
      setMessages([...messages, res.data.message]);
      updateLastMessage(message.text || (images ? "Photo" : ""));
      setNewMessage("");
      setImages(null);
    } catch (err) {
      console.log(err);
    }
  };

  // Update last message in conversation
  const updateLastMessage = async (lastMsg) => {
    if (!currentChat) return;
    try {
      await axios.put(
        `${server}/conversation/update-last-message/${currentChat._id}`,
        { lastMessage: lastMsg, lastMessageId: user._id }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImages(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {!open && (
        <>
          <Header />
          <h1 className="text-center text-2xl md:text-3xl py-4 font-semibold">
            All Messages
          </h1>
          <div className="flex flex-col space-y-2 md:space-y-3 max-w-3xl mx-auto">
            {conversations.map((conv, idx) => (
              <MessageList
                key={idx}
                data={conv}
                me={user?._id}
                setOpen={setOpen}
                setCurrentChat={setCurrentChat}
                setUserData={setUserData}
                setActiveStatus={setActiveStatus}
                online={onlineCheck(conv)}
              />
            ))}
          </div>
        </>
      )}

      {open && currentChat && (
        <ChatBox
          setOpen={setOpen}
          messages={messages}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMessageHandler={sendMessageHandler}
          handleImageUpload={handleImageUpload}
          userData={userData}
          activeStatus={activeStatus}
          scrollRef={scrollRef}
        />
      )}
    </div>
  );
};

// Individual conversation item
const MessageList = ({
  data,
  me,
  setOpen,
  setCurrentChat,
  setUserData,
  setActiveStatus,
  online,
}) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = data.members.find((m) => m !== me);
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${server}/shop/get-shop-info/${userId}`);
        setUser(res.data.shop);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
    setActiveStatus(online);
  }, [data, me, online, setActiveStatus]);

  const handleClick = () => {
    navigate(`/inbox?${data._id}`);
    setOpen(true);
    setCurrentChat(data);
    setUserData(user);
  };

  return (
    <div
      className="flex items-center cursor-pointer p-3 bg-white rounded-md shadow-sm hover:bg-gray-100"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={user?.avatar?.url}
          alt=""
          className="w-12 h-12 rounded-full object-cover"
        />
        <span
          className={`absolute top-0 right-0 w-3 h-3 rounded-full ${
            online ? "bg-green-500" : "bg-gray-400"
          }`}
        ></span>
      </div>
      <div className="pl-3 flex-1">
        <h1 className="text-lg font-medium">{user?.name}</h1>
        <p className="text-sm text-gray-600">
          {data?.lastMessageId !== user?._id ? "You: " : user?.name.split(" ")[0] + ": "}
          {data?.lastMessage}
        </p>
      </div>
    </div>
  );
};

// Chat box for current conversation
const ChatBox = ({
  setOpen,
  messages,
  newMessage,
  setNewMessage,
  sendMessageHandler,
  handleImageUpload,
  userData,
  activeStatus,
  scrollRef,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-50 flex flex-col md:max-w-3xl md:mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <div className="flex items-center">
          <img
            src={userData?.avatar?.url}
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="pl-3">
            <h1 className="text-lg font-semibold">{userData?.name}</h1>
            <p className="text-sm">{activeStatus ? "Active Now" : ""}</p>
          </div>
        </div>
        <AiOutlineArrowRight
          size={24}
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === userData?._id ? "justify-start" : "justify-end"}`}
            ref={scrollRef}
          >
            {msg.sender !== userData?._id && (
              <img
                src={userData?.avatar?.url}
                alt=""
                className="w-10 h-10 rounded-full mr-2 object-cover"
              />
            )}
            <div className="max-w-xs md:max-w-md">
              {msg.images && (
                <img
                  src={msg.images?.url || msg.images}
                  alt=""
                  className="w-full h-auto rounded-lg mb-1 object-cover"
                />
              )}
              {msg.text && (
                <div
                  className={`p-2 rounded ${
                    msg.sender === userData?._id ? "bg-green-500 text-white" : "bg-black text-white"
                  }`}
                >
                  {msg.text}
                </div>
              )}
              <p className="text-xs text-gray-500 mt-1">{format(msg.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessageHandler}
        className="flex items-center p-4 border-t border-gray-300 relative"
      >
        <input
          type="file"
          id="image"
          className="hidden"
          onChange={handleImageUpload}
        />
        <label htmlFor="image">
          <TfiGallery size={24} className="cursor-pointer mr-3" />
        </label>
        <input
          type="text"
          placeholder="Enter your message..."
          className={`${styles.input} flex-1`}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          required
        />
        <button type="submit" className="ml-3">
          <AiOutlineSend size={24} />
        </button>
      </form>
    </div>
  );
};

export default UserInbox;
