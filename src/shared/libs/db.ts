import mongoose from "mongoose";
import { driver, createAstraUri } from "stargate-mongoose";

export const connectDb = async () => {
  try {
    // Reutilize a conexão existente, se houver uma conexão ativa
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    const uri = createAstraUri(
      process.env.ASTRA_DB_API_ENDPOINT!,
      process.env.ASTRA_DB_APPLICATION_TOKEN!
    );

    mongoose.set("autoCreate", true);
    mongoose.setDriver(driver);

    await mongoose.connect(uri, {
      isAstra: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
