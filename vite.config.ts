
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // Change to root path for Netlify deployment
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Add environment variables here
    "import.meta.env.SUPABASE_URL": JSON.stringify(process.env.SUPABASE_URL || "https://jxdqcvdwukoensyoauep.supabase.co"),
    "import.meta.env.SUPABASE_ANON_KEY": JSON.stringify(process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4ZHFjdmR3dWtvZW5zeW9hdWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExODc0MTEsImV4cCI6MjA1Njc2MzQxMX0.YHLYWhrIGvQxMxTC_r1s8dsZEJCU95-HOU77gvA7npE"),
  },
}));
