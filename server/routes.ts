import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertEmailSubscriberSchema, 
  insertContactSubmissionSchema,
  insertBookingRequestSchema,
  insertSocialPostSchema,
  insertPostReactionSchema,
  insertPostCommentSchema,
  insertBandMemberSchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const data = insertEmailSubscriberSchema.parse(req.body);
      const subscriber = await storage.createEmailSubscriber(data);
      res.json({ success: true, subscriber });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid email format", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to subscribe email" });
      }
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(data);
      res.json({ success: true, submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid contact form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  // Booking request endpoint
  app.post("/api/booking", async (req, res) => {
    try {
      const data = insertBookingRequestSchema.parse(req.body);
      const request = await storage.createBookingRequest(data);
      res.json({ success: true, request });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid booking request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit booking request" });
      }
    }
  });

  // Get shows endpoint
  app.get("/api/shows", async (req, res) => {
    try {
      const shows = await storage.getShows();
      res.json(shows);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch shows" });
    }
  });

  // Get email subscribers (admin endpoint)
  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getEmailSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch subscribers" });
    }
  });

  // Social feed endpoints
  app.get("/api/social-posts", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const posts = await storage.getSocialPosts(limit);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch social posts" });
    }
  });

  app.get("/api/social-posts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.getSocialPost(id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch post" });
    }
  });

  app.post("/api/social-posts", async (req, res) => {
    try {
      const postData = insertSocialPostSchema.parse(req.body);
      const authorId = req.body.authorId; // TODO: Get from auth session
      const post = await storage.createSocialPost(postData, authorId);
      res.json({ success: true, post });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid post data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create post" });
      }
    }
  });

  app.put("/api/social-posts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updateData = insertSocialPostSchema.partial().parse(req.body);
      const post = await storage.updateSocialPost(id, updateData);
      res.json({ success: true, post });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid post data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to update post" });
      }
    }
  });

  app.delete("/api/social-posts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteSocialPost(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete post" });
    }
  });

  // Post reactions
  app.post("/api/social-posts/:id/reactions", async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const reactionData = insertPostReactionSchema.parse({ ...req.body, postId });
      const reaction = await storage.addPostReaction(reactionData);
      res.json({ success: true, reaction });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid reaction data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to add reaction" });
      }
    }
  });

  app.get("/api/social-posts/:id/reactions", async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const reactions = await storage.getPostReactions(postId);
      res.json(reactions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch reactions" });
    }
  });

  // Post comments
  app.post("/api/social-posts/:id/comments", async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const commentData = insertPostCommentSchema.parse({ ...req.body, postId });
      const comment = await storage.addPostComment(commentData);
      res.json({ success: true, comment });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid comment data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to add comment" });
      }
    }
  });

  app.get("/api/social-posts/:id/comments", async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const comments = await storage.getPostComments(postId);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch comments" });
    }
  });

  // Band members
  app.get("/api/band-members", async (req, res) => {
    try {
      const members = await storage.getBandMembers();
      res.json(members);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch band members" });
    }
  });

  app.post("/api/band-members", async (req, res) => {
    try {
      const memberData = insertBandMemberSchema.parse(req.body);
      // TODO: Hash password before storing
      const member = await storage.createBandMember(memberData);
      res.json({ success: true, member });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid member data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create band member" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
