/** ===========================================
 *  db.js — Mongo connection helper
 *  -------------------------------------------
 *  TASK DB-1:
 *    - Export connectDB() that connects Mongoose using MONGO_URL
 *    - Log success; throw on failure
 */
import mongoose from "mongoose";

export async function connectDB() {
  try {
    const uri = String(process.env.MONGO_URL ?? "").trim();
    if (!uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://")) {
      console.error(
        "Set MONGO_URL in server/.env to a string starting with mongodb:// or mongodb+srv://"
      );
      throw new Error("Invalid or missing MONGO_URL");
    }
    await mongoose.connect(uri);
    console.log("[DB] Mongo connected");
  } catch (err) {
    console.error("Connection error:", err.message);
    throw err;
  }
}
