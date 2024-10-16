import { ObjectId } from "../deps.ts";
import students from "../models/students.ts";
import { sendResponse } from "../utils/response.ts";

export const getStudents = async (): Promise<Response> => {
  const allStudents = await students.find({}).toArray();
  return sendResponse({
    message: "Students fetched successfully",
    data: allStudents,
  });
};

export const addStudent = async (req: Request): Promise<Response> => {
  const body = await req.json();
  await students.insertOne(body);
  return sendResponse({
    message: "Student added successfully",
  });
};

export const editStudent = async (req: Request): Promise<Response> => {
  const body = await req.json();
  const { id , ...update } = body;
  console.log(update);
  
  const data = await students.updateOne(
    { _id: new ObjectId(id) },
    { $set: update },
  );
  return sendResponse({
    message: "Student updated successfully",
    status: 200,
    data: data,
  });
};
