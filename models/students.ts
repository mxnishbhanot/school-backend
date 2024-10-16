import db from "../config/database.ts";
import type { ObjectId } from "../deps.ts";

interface StudentSchema {
  _id: string | ObjectId;
  name: string;
  age: number;
  grade: number;
  status: 'ACTIVE' | 'IN_ACTIVE' | 'DELETED'
}

const students = db.collection<StudentSchema>("students");

export default students;
