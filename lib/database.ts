import mongoose from 'mongoose';

// Create a global cache for the database connection.
// We explicitly type it to avoid future 'any' errors.
declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  }
}

// Get the MongoDB URI from environment variables.
// Its type is 'string | undefined'.
const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // If a connection is already cached, return it immediately.
  if (cached.conn) {
    return cached.conn;
  }

  // If there's no promise yet, create one.
  if (!cached.promise) {
    // We must check if the URI exists before trying to connect.
    if (!MONGODB_URI) {
      throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }

    const opts = {
      bufferCommands: false,
    };
    
    // Now, we can safely use MONGODB_URI because we've checked for its existence.
    // The connection promise is stored in the cache.
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }

  // Wait for the connection promise to resolve and cache the connection object.
  cached.conn = await cached.promise;
  
  // Return the active connection.
  return cached.conn;
}

export default dbConnect;