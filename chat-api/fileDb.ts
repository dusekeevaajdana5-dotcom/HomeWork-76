import { promises as fs } from "fs";
import {MessageFromUser, MessageFromUserWithoutId} from "./types";

const fileName = "db.json";
let data: MessageFromUser[] = [];

const fileDb = {
  async init() {
      try {
         const fileContents = await fs.readFile(fileName);
         data = JSON.parse(fileContents.toString());
      } catch (err) {
          data = [];
      }
  },
    async getItems () {
      return data;
    },
    async addItem (item : MessageFromUserWithoutId) {
      const messageData : MessageFromUser = {
          ...item,
          id: crypto.randomUUID(),
          datetime: new Date().toISOString()
      };
       data.push(messageData);
       await this.save()
        return messageData;
    },
    async save () {
      await fs.writeFile(fileName, JSON.stringify(data));
    }
};

export default fileDb;