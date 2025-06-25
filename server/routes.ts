import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import path from "path";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // In a real application, you would:
      // 1. Send an email using a service like SendGrid, Nodemailer, etc.
      // 2. Store the message in a database
      // 3. Send a notification
      
      console.log("Contact form submission:", validatedData);
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "resume_1750861860780.pdf");
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

  // Project files download endpoint
  app.get("/api/download-project", (req, res) => {
    try {
      const { exec } = require('child_process');
      const zipPath = path.join(process.cwd(), "portfolio-project.zip");
      
      // Create zip file excluding unnecessary directories
      const excludePattern = '-x "node_modules/*" ".git/*" "*.log" ".replit" "package-lock.json" ".venv/*"';
      const command = `cd ${process.cwd()} && zip -r portfolio-project.zip . ${excludePattern}`;
      
      exec(command, (error: any) => {
        if (error) {
          console.error("Zip creation error:", error);
          return res.status(500).json({ error: "Failed to create project archive" });
        }
        
        res.download(zipPath, "Pratyush_Portfolio_Project.zip", (downloadErr) => {
          if (downloadErr) {
            console.error("Project download error:", downloadErr);
            res.status(404).json({ error: "Project files not found" });
          }
          // Clean up zip file after download
          setTimeout(() => {
            try {
              require('fs').unlinkSync(zipPath);
            } catch (cleanupErr) {
              console.log("Cleanup note: Could not remove temporary zip file");
            }
          }, 5000);
        });
      });
    } catch (error) {
      console.error("Project download error:", error);
      res.status(500).json({ error: "Failed to download project files" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
