import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
  title: { type: String, require: true },
  body: { type: String },
  from: { type: String, require: true },
  to: { type: String, require: true },
  data: { type: String, dafault: new Date().toLocaleString('en-GB') },
})

const MessageModel = model('Message', MessageSchema);
 
export default MessageModel