import { pgTable, text, serial, integer, boolean, timestamp, varchar, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const emailSubscribers = pgTable("email_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

export const bookingRequests = pgTable("booking_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  organization: text("organization"),
  eventType: text("event_type"),
  eventDate: text("event_date"),
  budgetRange: text("budget_range"),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

export const shows = pgTable("shows", {
  id: serial("id").primaryKey(),
  venue: text("venue").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  ticketUrl: text("ticket_url"),
  isFestival: boolean("is_festival").default(false),
});

// Session storage table for authentication
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: text("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Band members with admin access
export const bandMembers = pgTable("band_members", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  instrument: text("instrument").notNull(),
  bio: text("bio"),
  profileImage: text("profile_image"),
  isAdmin: boolean("is_admin").default(false),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Social feed posts
export const socialPosts = pgTable("social_posts", {
  id: serial("id").primaryKey(),
  authorId: integer("author_id").references(() => bandMembers.id).notNull(),
  title: text("title"),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  postType: text("post_type").notNull(), // 'update', 'show', 'photo', 'video'
  showId: integer("show_id").references(() => shows.id),
  isPublished: boolean("is_published").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Post likes/reactions
export const postReactions = pgTable("post_reactions", {
  id: serial("id").primaryKey(),
  postId: integer("post_id").references(() => socialPosts.id).notNull(),
  email: text("email").notNull(),
  reactionType: text("reaction_type").notNull(), // 'like', 'love', 'rock'
  createdAt: timestamp("created_at").defaultNow(),
});

// Post comments
export const postComments = pgTable("post_comments", {
  id: serial("id").primaryKey(),
  postId: integer("post_id").references(() => socialPosts.id).notNull(),
  authorName: text("author_name").notNull(),
  authorEmail: text("author_email").notNull(),
  content: text("content").notNull(),
  isApproved: boolean("is_approved").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertEmailSubscriberSchema = createInsertSchema(emailSubscribers).pick({
  email: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  message: true,
});

export const insertBookingRequestSchema = createInsertSchema(bookingRequests).pick({
  name: true,
  email: true,
  organization: true,
  eventType: true,
  eventDate: true,
  budgetRange: true,
  message: true,
});

export const insertShowSchema = createInsertSchema(shows).pick({
  venue: true,
  city: true,
  state: true,
  date: true,
  time: true,
  ticketUrl: true,
  isFestival: true,
});

export const insertBandMemberSchema = createInsertSchema(bandMembers).pick({
  username: true,
  email: true,
  name: true,
  instrument: true,
  bio: true,
  profileImage: true,
  password: true,
});

export const insertSocialPostSchema = createInsertSchema(socialPosts).pick({
  title: true,
  content: true,
  imageUrl: true,
  postType: true,
  showId: true,
  isPublished: true,
});

export const insertPostReactionSchema = createInsertSchema(postReactions).pick({
  postId: true,
  email: true,
  reactionType: true,
});

export const insertPostCommentSchema = createInsertSchema(postComments).pick({
  postId: true,
  authorName: true,
  authorEmail: true,
  content: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type EmailSubscriber = typeof emailSubscribers.$inferSelect;
export type InsertEmailSubscriber = z.infer<typeof insertEmailSubscriberSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type BookingRequest = typeof bookingRequests.$inferSelect;
export type InsertBookingRequest = z.infer<typeof insertBookingRequestSchema>;
export type Show = typeof shows.$inferSelect;
export type InsertShow = z.infer<typeof insertShowSchema>;
export type BandMember = typeof bandMembers.$inferSelect;
export type InsertBandMember = z.infer<typeof insertBandMemberSchema>;
export type SocialPost = typeof socialPosts.$inferSelect;
export type InsertSocialPost = z.infer<typeof insertSocialPostSchema>;
export type PostReaction = typeof postReactions.$inferSelect;
export type InsertPostReaction = z.infer<typeof insertPostReactionSchema>;
export type PostComment = typeof postComments.$inferSelect;
export type InsertPostComment = z.infer<typeof insertPostCommentSchema>;
