
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
    if (!user?._id) return;

    socketRef.current = socketIO(ENDPOINT, { 
      transports: ["websocket"],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5
    });

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current.id);
      socketRef.current.emit("addUser", user._id);
    });

    socketRef.current.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    socketRef.current.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    socketRef.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text || null,
        images: data.images || null,
        createdAt: Date.now(),
      });
    });

    socketRef.current.on("getUsers", (data) => {
      setOnlineUsers(data);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
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
      if (!user?._id) return;
      try {
        const res = await axios.get(
          `${server}/conversation/get-all-conversation-user/${user._id}`,
          { withCredentials: true }
        );
        setConversations(res.data.conversations || []);
      } catch (err) {
        console.error("Error fetching conversations:", err);
        setConversations([]);
      }
    };
    getConversations();
  }, [user?._id]);

  // Handle opening conversation from URL query parameter
  useEffect(() => {
    if (conversations.length === 0 || !user?._id) return;
    
    // Get conversation ID from URL (format: /inbox?conversationId)
    const searchQuery = window.location.search;
    const conversationId = searchQuery.substring(1); // Remove the '?'
    
    if (conversationId) {
      const conversation = conversations.find((conv) => conv._id === conversationId);
      if (conversation && !open) {
        setCurrentChat(conversation);
        setOpen(true);
        // Fetch shop info for the conversation
        const sellerId = conversation.members.find((m) => m !== user._id);
        if (sellerId) {
          axios
            .get(`${server}/shop/get-shop-info/${sellerId}`, { withCredentials: true })
            .then((res) => {
              setUserData(res.data.shop);
              setActiveStatus(onlineCheck(conversation));
            })
            .catch((err) => console.error("Error fetching shop info:", err));
        }
      }
    }
  }, [conversations, user?._id, open]);

  // Fetch messages for current chat
  useEffect(() => {
    const getMessages = async () => {
      if (!currentChat?._id) return;
      try {
        const res = await axios.get(
          `${server}/message/get-all-messages/${currentChat._id}`,
          { withCredentials: true }
        );
        setMessages(res.data.messages || []);
      } catch (err) {
        console.error("Error fetching messages:", err);
        setMessages([]);
      }
    };
    getMessages();
  }, [currentChat]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Online check
  const onlineCheck = (chat) => {
    const memberId = chat.members.find((m) => m !== user?._id);
    return onlineUsers.some((u) => u.userId === memberId);
  };

  // Send text message
  const sendMessageHandler = async (e) => {
    e.preventDefault();
    if ((!newMessage && !images) || !currentChat) return;

    const message = {
      sender: user._id,
      text: newMessage,
      images: images || null,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find((m) => m !== user._id);

    if (socketRef.current && socketRef.current.connected) {
      socketRef.current.emit("sendMessage", {
        senderId: user._id,
        receiverId,
        text: newMessage,
        images: images || null,
      });
    } else {
      console.warn("Socket not connected, message will be saved but not sent in real-time");
    }

    try {
      const res = await axios.post(
        `${server}/message/create-new-message`,
        message,
        { withCredentials: true }
      );
      setMessages([...messages, res.data.message]);
      updateLastMessage(message.text || (images ? "Photo" : ""));
      setNewMessage("");
      setImages(null);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  // Update last message in conversation
  const updateLastMessage = async (lastMsg) => {
    if (!currentChat || !user?._id) return;
    try {
      await axios.put(
        `${server}/conversation/update-last-message/${currentChat._id}`,
        { lastMessage: lastMsg, lastMessageId: user._id },
        { withCredentials: true }
      );
    } catch (err) {
      console.error("Error updating last message:", err);
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

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user?._id) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Please login to view your messages</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {!open && (
        <>
          <Header />
          <h1 className="text-center text-2xl md:text-3xl py-4 font-semibold">
            All Messages
          </h1>
          <div className="flex flex-col space-y-2 md:space-y-3 max-w-3xl mx-auto px-4">
            {conversations.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No conversations yet. Start chatting with a seller!</p>
              </div>
            ) : (
              conversations.map((conv, idx) => (
                <MessageList
                  key={conv._id || idx}
                  data={conv}
                  me={user._id}
                  setOpen={setOpen}
                  setCurrentChat={setCurrentChat}
                  setUserData={setUserData}
                  setActiveStatus={setActiveStatus}
                  online={onlineCheck(conv)}
                />
              ))
            )}
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
          currentUserId={user?._id}
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
    if (!userId) return;
    
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${server}/shop/get-shop-info/${userId}`, {
          withCredentials: true
        });
        setUser(res.data.shop);
      } catch (err) {
        console.error("Error fetching shop info:", err);
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

  if (!user) {
    return (
      <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
        <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="pl-3 flex-1">
          <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center cursor-pointer p-3 bg-white rounded-md shadow-sm hover:bg-gray-100"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={user?.avatar?.url || "/default-avatar.png"}
          alt={user?.name}
          className="w-12 h-12 rounded-full object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/48";
          }}
        />
        <span
          className={`absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
            online ? "bg-green-500" : "bg-gray-400"
          }`}
        ></span>
      </div>
      <div className="pl-3 flex-1">
        <h1 className="text-lg font-medium">{user?.name || "Unknown Shop"}</h1>
        <p className="text-sm text-gray-600">
          {data?.lastMessageId !== me ? "You: " : (user?.name?.split(" ")[0] || "Shop") + ": "}
          {data?.lastMessage || "No messages yet"}
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
  currentUserId,
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
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">No messages yet. Start the conversation!</p>
          </div>
        ) : (
          messages.map((msg, idx) => {
            const isOwnMessage = msg.sender === currentUserId;
            return (
              <div
                key={idx}
                className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}
              >
                {!isOwnMessage && (
                  <img
                    src={userData?.avatar?.url}
                    alt=""
                    className="w-10 h-10 rounded-full mr-2 object-cover"
                  />
                )}
                <div className={`max-w-xs md:max-w-md ${isOwnMessage ? "flex flex-col items-end" : ""}`}>
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
                        isOwnMessage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {msg.text}
                    </div>
                  )}
                  <p className={`text-xs text-gray-500 mt-1 ${isOwnMessage ? "text-right" : ""}`}>
                    {format(msg.createdAt)}
                  </p>
                </div>
              </div>
            );
          })
        )}
        <div ref={scrollRef} />
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
