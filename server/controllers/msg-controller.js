import message from "../model/msg.js";
import conversation from "../model/conversation.js";
export const newMsg = async(request, response) => {
    try {
        const newmsg = new message(request.body);
        await newmsg.save();
        await conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text })
        return response.status(200).json("msg sent");
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const getmsgs = async(request, response) => {
    try {
        const msgs = await message.find({
            conversationId: request.params.id
        })
        return response.status(200).json(msgs);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}