import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI in .env.local");
}

// Extend global type
declare global {
  var mongooseGlobal: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

// Use a different variable name to avoid conflicts
const globalWithMongoose = global as typeof globalThis & {
  mongooseGlobal?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

let cached = globalWithMongoose.mongooseGlobal;

if (!cached) {
  cached = globalWithMongoose.mongooseGlobal = {
    conn: null,
    promise: null,
  };
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached!.conn) return cached!.conn;

  if (!cached!.promise) {
    cached!.promise = mongoose.connect(MONGODB_URI);
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
}