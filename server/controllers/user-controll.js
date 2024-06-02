import user from "../model/user.js";
export const addUser = async(request, response) => {
    try {
        let exist = await user.findOne({ sub: request.body.sub });
        if (exist) {
            response.status(200).json({ msg: 'user already exist' });
            return;
        }
        const newuser = new user(request.body);
        await newuser.save();
        return response.status(200).json(newuser);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const getUser = async(request, response) => {
    try {
        const users = await user.find({});
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json(error.message)
    }
}