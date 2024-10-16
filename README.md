# Deno 2 School Admin API

This project is a basic HTTP server built using **Deno 2**. It provides API routes to manage student data for a school admin panel.

## Features
- **Deno 2:** Utilized Deno 2 as the runtime environment for building and serving the APIs.
- **HTTP Server:** A basic HTTP server is created using `Deno.serve()`.
- **API Routes for Students:** Provides RESTful API endpoints to interact with student data (e.g., create, update, delete, and fetch students).

## Setup and Installation

1. **Prerequisites:**
   - Install [Deno 2](https://deno.land/manual@v2/getting_started/installation) on your system.
   - Ensure you have Redis installed (optional, if used for caching or session management).

2. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>

3. **Running the Server**: Start the server using Deno's run command:
   ```bash
   deno run --allow-net --allow-read src/server.ts

## Technologies Used

- **Deno 2**: For running JavaScript/TypeScript-based server-side code.
- **MongoDB**: (Optional) Used as the database to store student records.

## License

This project is open-source and available under the MIT License.

