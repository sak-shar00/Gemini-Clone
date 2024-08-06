import React, { useContext, useState } from 'react';
import "./Sidebar.css";
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className='sidebar'>
            <div className="top">
                <img
                    onClick={() => setExtended(prev => !prev)}
                    className="menu"
                    src="https://cdn-icons-png.flaticon.com/512/9293/9293128.png"
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                />
                <div onClick={() => newChat()} className="new-chat">
                    <img
                        src="https://www.iconpacks.net/icons/2/free-icon-plus-3107.png"
                        alt=""
                        style={{ height: "20px", width: "20px" }}
                    />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? (
                    <div className="recent">
                        <p className='recent-title'>Recent</p>
                        {prevPrompts.map((item) => (
                            <div
                                key={item.id}  // Assuming each item has a unique 'id'
                                onClick={() => loadPrompt(item)}
                                className="recent-entry"
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIOyJ_knccbzqWBMpVAbJQOtTNleFDB97ZA&s"
                                    alt=""
                                    style={{ height: "20px", width: "20px" }}
                                />
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img
                        src="https://t4.ftcdn.net/jpg/05/28/64/79/360_F_528647979_RWpvktPzHhZhG0nDMYv964Fz6Gf7FSEm.jpg"
                        alt=""
                        style={{ height: "20px", width: "20px" }}
                    />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img
                        src="https://www.pngitem.com/pimgs/m/257-2577930_history-icon-png-browsing-history-icon-png-transparent.png"
                        alt=""
                        style={{ height: "20px", width: "20px" }}
                    />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMd00Iyt1BZfnfMrjZbLZKh0BJ1kEc1OnUzw&s"
                        alt=""
                        style={{ height: "20px", width: "20px" }}
                    />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
