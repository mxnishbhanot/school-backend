import { serve } from "./deps.ts";
import { router } from "./routes/students.ts";
import { errorMiddleware } from "./middlewares/error.ts";

// Load environment variables from .env file
const port = Deno.env.get("PORT") || 8080;

function handler(req: Request): Promise<Response> {
  return errorMiddleware(() => router(req));
}

console.log(`Server running on http://localhost:${port}`);
serve(handler, { port: +port });
