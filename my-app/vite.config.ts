import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "localhost";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: PORT,
    host: HOST,
  },
});
