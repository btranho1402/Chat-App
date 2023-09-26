const chatModel = require("../Models/chatModel")

//createChat

//findUserChat
//findChat
const createChat = async(req, res) => {
    const {firstId, secondId} = req.body

    try{
        
        const chat = await chatModel.findOne({
            members: {$all: [firstId, secondId]}
        })
        console.log(chat);
        if(chat) return res.status(200).json(chat);
        console.log("B")
        const newChat = new chatModel({
            "members": [firstId, secondId]
        })

        const response = await newChat.save()
        res.status(200).json(response);
    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }


}
const findUserChats = async(req, res) => {
    const userId = req.params.userId

    try {
        const chats = await chatModel.find({
            members: {$in: [userId]}    
        
        })
        console.log(userId);
        console.log(chats);
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const findChat = async(req, res) => {
    const {firstId, secondId} = req.params ;
    
    try {
        const chats = await chatModel.find({
            members: {$all: [firstId, secondId]}
        });
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
module.exports = {createChat, findUserChats, findChat};
