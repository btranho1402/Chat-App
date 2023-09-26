import { chatContext } from "../context/chatContext";
import { useContext } from "react";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/userChat";
import {AuthContext} from "../context/AuthContext";
import PotentialChats from "../components/chat/potentialChats";
import ChatBox from "../components/chat/chatBox";

const Chat = () => {

    const { user } = useContext(AuthContext);


    const {userChats, isUserChatsLoading, updateCurrentChat } = useContext(chatContext);


    return ( 
    <Container>
        <PotentialChats/>
            {userChats?.length < 1 ? null : (
            <Stack direction="horizontal" gap={4} 
            className="align-items-start">
                    <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
                        {isUserChatsLoading && <p>Loading chats..</p>}
                        {userChats?.map((chat, index)=> {
                            console.log(chat);
                            return (
                                <div key = {index} onClick = {() => updateCurrentChat(chat)}>
                                    <UserChat chat={chat} user={user}/>
                                </div>
                            );
                        })}
                    </Stack>
                    <ChatBox/>
            </Stack>
            )}
    </Container> );
}
 
export default Chat;