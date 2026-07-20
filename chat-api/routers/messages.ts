import express from "express";
import fileDb from "../fileDb";
import {MessageFromUserWithoutId} from "../types";

const messagesRouter = express.Router();


messagesRouter.get("/", async (req,res) => {
    const messages = await fileDb.getItems();

    if (req.query.datetime){
        const queryDate = req.query.datetime as string;

        if (isNaN(Date.parse(queryDate))){
            return res.status(400).send({error :"Incorrect datetime"});
        }

       const filteredMessages = messages.filter(
           message => message.datetime > queryDate
       );

        return res.send(filteredMessages);
    }
        res.send(messages);
});

messagesRouter.post("/", async (req,res) => {
   if(!req.body.author || !req.body.message) {
      return res.status(400).send({error :"Author and message must be present in the request"});
   }
    const newMessage: MessageFromUserWithoutId = {
       author: req.body.author,
       message: req.body.message
   }
    const message = await  fileDb.addItem(newMessage);
    res.send(message);
});



export default messagesRouter;