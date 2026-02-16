import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthContext";


export const MsgContext = createContext();
export const MsgProvider = ({ children }) => {
    const { axios ,Socket} = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [unseenmsg, setUnseenmsg] = useState({});

    const getUsers = async () => {
        try {
            const { data } = await axios.get("/api/messages/users");
            if (data.success) {
                setUsers(data.users);
                setUnseenmsg(data.unseeMsgs);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    const getMessages = async (userId) => {
        try {
            const { data } = await axios.get(`/api/messages/${userId}`);
            if (data.success) {
                setMessages(data.messages);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    const sendMsg = async (messageData) => {
        try {
            const { data } = await axios.post(`/api/messages/send/${selectedUser._id}`, messageData);
            if (data.success) {
                setMessages((prevMessages) => [...prevMessages, data.newMessage]);

            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    const subscribeToMessages = async () => {
        if (!Socket) return;
        Socket.on("newMessage", (newMessage) => {
            if (selectedUser && newMessage.senderId === selectedUser._id) {
                newMessage.seen = true;
                setMessages((prevMessages) => [...prevMessages, newMessage]);
                axios.put(`/api/messages/mark/${selectedUser._id}`);

            } else {
                setUnseenmsg((prevUnseenMessages) => ({
                    ...prevUnseenMessages, [newMessage.senderId]: prevUnseenMessages[newMessage.senderId] ? prevUnseenMessages[newMessage, senderId] + 1 : 1
                })
                )
            }
        })
    }
    const unsubscribeToMessages = () => {
        if (Socket) Socket.off("newMessages");
    }
    const value = {
        messages,
        users,
        selectedUser,
        getUsers,
        setMessages,
        sendMsg,
        setSelectedUser,
        unseenmsg,
        setUnseenmsg,
    }
    return (

        <MsgContext.Provider value={value}>
            {children}
        </MsgContext.Provider>
    )
}