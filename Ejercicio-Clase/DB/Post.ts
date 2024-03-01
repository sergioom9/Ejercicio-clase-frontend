import mongoose from "npm:mongoose";
import { Post } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect("mongodb+srv://sergioom9:nebrija22@cluster0.9dzkoo1.mongodb.net/?retryWrites=true&w=majority");
}

const schema = new mongoose.Schema<Post>({
  titulo: String,
  autor: String,
 contenido: String
});

export default mongoose.model<Post>("Post", schema);