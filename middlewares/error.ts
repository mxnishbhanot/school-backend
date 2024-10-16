import { sendResponse } from "../utils/response.ts";

type Handler = () => Promise<Response>;

export const errorMiddleware = async (handler: Handler): Promise<Response> => {
  try {
    return await handler();
  } catch (err) {
    if (err instanceof Error) {
      return sendResponse({ status: 500, message: err.message });
    } else {
      return sendResponse({
        status: 500,
        message: "An unknown error occurred",
      });
    }
  }
};
