import conversation from "../model/conversation.js";
export const newConversation = async(request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        const exist = await conversation.findOne({ members: { $all: { senderId, receiverId } } });
        if (exist) {
            return response.status(200).json("already exist");
        }
        const newConversation = new conversation({ members: [senderId, receiverId] })
        await newConversation.save();
        return response.status(200).json("saved conversation");
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const getConv = async(request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        let conv = await conversation.findOne({ members: { $all: [senderId, receiverId] } })
        return response.status(200).json(conv);
    } catch (error) { return response.status(500).json(error.message); }
}