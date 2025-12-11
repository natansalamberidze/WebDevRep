import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

async function startserver() {
  try {
    await connectDB();

    const PORT = process.env.PORT || 8000;

    const server = app.listen(PORT, () => {
      console.log(`✅ Server is running on port: ${PORT}`);
    });

    server.on("error", (error) => {
      console.error("❌ Server error:", error);
      process.exit(1);
    });

    const shutdown = async (signal) => {
      console.log(`\n🛑 Received ${signal}. Shutting down gracefully...`);

      server.close(async () => {
        console.log("✅ HTTP server closed");

        await mongoose.connection.close();
        console.log("✅ MongoDB connection closed");

        process.exit(0);
      });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
}

startserver();
