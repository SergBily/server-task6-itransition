import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
  title: { type: String, require: true },
  body: { type: String },
  sender: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true
    },
    name: { type: String, require: true },
  },
  recipient: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true
    },
    name: { type: String, require: true },
  },
},
{
  timestamps: true
  }
)

const MessageModel = model('Message', MessageSchema);
 
export default MessageModel