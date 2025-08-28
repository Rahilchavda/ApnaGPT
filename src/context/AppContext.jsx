import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyChats, dummyUserData } from "../assets/assets";
const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const fetchUser = async () => {
        setUser(dummyUserData);
    }
    
    const fetchUserChat = async () => {
        setChats(dummyChats);
        setSelectedChat(dummyChats[0]);
    }

    useEffect(() => {
        if(user){
            fetchUserChat();
        }else{
            setChats([]);
            setSelectedChat(null);
        }
    })
    useEffect(() => {  
        fetchUser();
    },[])

    useEffect(() =>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    })

    const value = {
        user,
        chats,
        selectedChat,
        theme,
        setUser,
        setChats,
        setSelectedChat,
        setTheme,
        navigate,
    };

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => useContext(AppContext);