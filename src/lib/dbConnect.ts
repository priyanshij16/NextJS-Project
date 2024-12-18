import { accessSync } from "fs";
import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};

// Here void means idc about the type
async function dbConnect(): Promise<void> {
    // just ensure if it is connected else choking aajti h bar bar krne se
  if (connection.isConnected) {
    console.log("Already Connected");
    return;
  }
  try {
    // also u can pass options {}
    const db = await mongoose.
    connect(process.env.MONGODB_URI || "", {});
    console.log("db us ..", db);
    connection.isConnected = db.connections[0].readyState;
    console.log('db.connections ', db.connections);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    process.exit(1);
  }
}
export default dbConnect;
