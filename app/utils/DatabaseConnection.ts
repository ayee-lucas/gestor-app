import mongoose from "mongoose";

const conn: any = {
  isConnected: false,
};

export default async function dbConnect() {
  try {
    if (conn.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "gestordb",
    });

    conn.isConnected = db.connections[0].readyState;

    console.log({
      message: "Database is connected",
      status: conn.isConnected,
      url: db.connection.name,
      host: db.connection.host,
      port: db.connection.port,
      name: db.connection.name,
    });
  } catch (error) {
    console.log(error);
  }


}
