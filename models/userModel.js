import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: {type: String, require: true, uniqe: true}
})

const UserModel = model('User', UserSchema);
 
export default UserModel