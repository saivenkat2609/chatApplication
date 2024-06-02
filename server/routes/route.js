import express from 'express';
const route = express.Router();
import { addUser, getUser } from '../controllers/user-controll.js';
import { newConversation, getConv } from '../controllers/conv-controller.js';
import { newMsg, getmsgs } from '../controllers/msg-controller.js';

route.post('/add', addUser);
route.get('/user', getUser);
route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConv);
route.post('/message/add', newMsg);
route.get('/message/get/:id', getmsgs);
export default route;