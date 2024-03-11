import mongoose from "mongoose";
import validator from 'validator';
const { Schema } = mongoose;

const UserSchema = new Schema({
          userName: {
                    type: String,
          },
          email: {
                    type:String,
                    required:true,
                    trim:true,
                    unique:true,
                    lowercase:true,
                    validate(value:any): any{
                              if (!validator.isEmail(value)) {
                                        throw new Error("Email is Invalid");
                              }
                    }
          },
          password: {
                    type: String,
                    required: true,
                    trim: true,
                    validate(value: any): any {
                              if (value.length < 6) {
                                        throw new Error("Passport Length not Sufficent");
                              }
                    }
          },

})
const User = mongoose.model("User", UserSchema);

export default User;