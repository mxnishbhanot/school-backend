interface ResponsePayload {
  status?: number;
  message: string;
  data?: unknown;
}

export const sendResponse = (payload: ResponsePayload): Response => {
  const { status = 200, message, data } = payload;

  return new Response(
    JSON.stringify({
      message,
      data,
    }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    },
  );
};
