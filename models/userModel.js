import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, require: true, uniqe: true },
  status: {type: Boolean, default: false}
})

const UserModel = model('User', UserSchema);
 
export default UserModel