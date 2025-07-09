import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "public", "resume.pdf");
      res.download(resumePath, "Pratyush_Goutam_Resume.pdf", (err) => {
        if (err) {
          console.error("Resume download error:", err);
          res.status(404).json({ error: "Resume file not found" });
        }
      });
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ error: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}