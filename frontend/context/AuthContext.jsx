import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";
import { toast } from 'react-hot-toast';
import { io } from 'socket.io-client';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [Token, setToken] = useState(localStorage.getItem("token"));
    const [AuthUser, setAuthUser] = useState(null);
    const [OnlineUser, setOnlineUser] = useState([]);
    const [Socket, setSocket] = useState(null);

    const checkAuth = async () => {
        try {
            const { data } = await axios.get("/api/auth/check");
            if (data.success) {
                setAuthUser(data.user);
                connectSocket(data.user);
            }

        } catch (error) {
            toast.error(error.message);

        }
    }
    const connectSocket = (userData) => {
        if (!userData || Socket?.connected) return;
        const newSocket = io(backendUrl, {
            query: {
                userId: userData._id,
            }
        })
        newSocket.connect();
        setSocket(newSocket);
        newSocket.on("getOnlineUsers", (userIds) => {
            setOnlineUser(userIds);
        })
    }
    const login = async (state, Credentials) => {
        try {
            const { data } = await axios.post(`/api/auth/${state}`, Credentials);
            if (data.success) {
                setAuthUser(data.dataUser);
                axios.defaults.headers.common["token"] = data.token;
                setToken(data.token);
                localStorage.setItem("token", data.token);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    const logout = async () => {
        localStorage.removeItem("token");
        setAuthUser(null);
        setToken(null);
        setOnlineUser([]);
        axios.defaults.headers.common["token"] = null;
        toast.success("logged out successfully");
        Socket.disconnect();
    }
    const updateProfile = async (body) => {
        try {
            const {data} = await axios.put("/api/auth/profile",body);
            if(data.success) {
                setAuthUser(data.user);
                toast.success("profile updated");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    useEffect(() => {
        if (Token) {
            axios.defaults.headers.common["token"] = Token;
            checkAuth(); // ← THIS LINE
        }
    }, [Token]);

    const value = {
        axios,
        AuthUser,
        OnlineUser,
        Socket,
        login,
        logout,
        updateProfile
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}