import mongoose, { ConnectOptions } from 'mongoose';
import 'dotenv/config'
require('dotenv').config()


let uri: string
if (process.env.MONGODB) {
  uri = process.env.MONGODB
} else {
  throw new Error("URI not defined")
}
;
const connectDB = async () => {
await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .then((res) => {
        console.log(
          'Connected to Distribution API Database - Initial Connection'
        );
      })
      .catch((err) => {
        console.log(
          `Initial Distribution API Database connection error occured -`,
          err
        );
      });
};

export default connectDB;
