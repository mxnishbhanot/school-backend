import {
  addStudent,
  editStudent,
  getStudents,
} from "../controllers/students.ts";
import { sendResponse } from "../utils/response.ts";

export const router = async (req: Request): Promise<Response> => {
  const { pathname } = new URL(req.url);

  if (pathname === "/api/students" && req.method === "GET") {
    return await getStudents();
  }

  if (pathname === "/api/students" && req.method === "POST") {
    return await addStudent(req);
  }

  if (pathname === "/api/students" && req.method === "PUT") {
    return await editStudent(req);
  }

  return sendResponse({ status: 404, message: "Not Found" });
};
