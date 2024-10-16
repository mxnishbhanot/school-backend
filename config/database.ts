import { MongoClient } from "../deps.ts";

const client = new MongoClient();
await client.connect(Deno.env.get("MONGO_URI") || "mongodb://localhost:27017");

const db = client.database(Deno.env.get("DB_NAME") || "school_admin");

export default db;
