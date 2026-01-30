import { 
  users, 
  emailSubscribers, 
  contactSubmissions, 
  bookingRequests, 
  shows,
  bandMembers,
  socialPosts,
  postReactions,
  postComments,
  type User, 
  type InsertUser, 
  type EmailSubscriber, 
  type InsertEmailSubscriber,
  type ContactSubmission,
  type InsertContactSubmission,
  type BookingRequest,
  type InsertBookingRequest,
  type Show,
  type InsertShow,
  type BandMember,
  type InsertBandMember,
  type SocialPost,
  type InsertSocialPost,
  type PostReaction,
  type InsertPostReaction,
  type PostComment,
  type InsertPostComment
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createEmailSubscriber(subscriber: InsertEmailSubscriber): Promise<EmailSubscriber>;
  getEmailSubscribers(): Promise<EmailSubscriber[]>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  createBookingRequest(request: InsertBookingRequest): Promise<BookingRequest>;
  getBookingRequests(): Promise<BookingRequest[]>;
  
  getShows(): Promise<Show[]>;
  createShow(show: InsertShow): Promise<Show>;

  // Band members
  getBandMember(id: number): Promise<BandMember | undefined>;
  getBandMemberByUsername(username: string): Promise<BandMember | undefined>;
  getBandMembers(): Promise<BandMember[]>;
  createBandMember(member: InsertBandMember): Promise<BandMember>;

  // Social posts
  getSocialPosts(limit?: number): Promise<SocialPost[]>;
  getSocialPost(id: number): Promise<SocialPost | undefined>;
  createSocialPost(post: InsertSocialPost, authorId: number): Promise<SocialPost>;
  updateSocialPost(id: number, post: Partial<InsertSocialPost>): Promise<SocialPost>;
  deleteSocialPost(id: number): Promise<void>;

  // Post reactions
  addPostReaction(reaction: InsertPostReaction): Promise<PostReaction>;
  getPostReactions(postId: number): Promise<PostReaction[]>;

  // Post comments
  addPostComment(comment: InsertPostComment): Promise<PostComment>;
  getPostComments(postId: number): Promise<PostComment[]>;
  approveComment(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createEmailSubscriber(insertSubscriber: InsertEmailSubscriber): Promise<EmailSubscriber> {
    const [subscriber] = await db
      .insert(emailSubscribers)
      .values(insertSubscriber)
      .returning();
    return subscriber;
  }

  async getEmailSubscribers(): Promise<EmailSubscriber[]> {
    return await db.select().from(emailSubscribers).orderBy(desc(emailSubscribers.subscribedAt));
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.submittedAt));
  }

  async createBookingRequest(insertRequest: InsertBookingRequest): Promise<BookingRequest> {
    const [request] = await db
      .insert(bookingRequests)
      .values(insertRequest)
      .returning();
    return request;
  }

  async getBookingRequests(): Promise<BookingRequest[]> {
    return await db.select().from(bookingRequests).orderBy(desc(bookingRequests.submittedAt));
  }

  async getShows(): Promise<Show[]> {
    return await db.select().from(shows).orderBy(shows.date);
  }

  async createShow(insertShow: InsertShow): Promise<Show> {
    const [show] = await db
      .insert(shows)
      .values(insertShow)
      .returning();
    return show;
  }

  // Band members
  async getBandMember(id: number): Promise<BandMember | undefined> {
    const [member] = await db.select().from(bandMembers).where(eq(bandMembers.id, id));
    return member || undefined;
  }

  async getBandMemberByUsername(username: string): Promise<BandMember | undefined> {
    const [member] = await db.select().from(bandMembers).where(eq(bandMembers.username, username));
    return member || undefined;
  }

  async getBandMembers(): Promise<BandMember[]> {
    return await db.select().from(bandMembers);
  }

  async createBandMember(insertMember: InsertBandMember): Promise<BandMember> {
    const [member] = await db
      .insert(bandMembers)
      .values(insertMember)
      .returning();
    return member;
  }

  // Social posts
  async getSocialPosts(limit = 20): Promise<SocialPost[]> {
    return await db
      .select()
      .from(socialPosts)
      .where(eq(socialPosts.isPublished, true))
      .orderBy(desc(socialPosts.createdAt))
      .limit(limit);
  }

  async getSocialPost(id: number): Promise<SocialPost | undefined> {
    const [post] = await db.select().from(socialPosts).where(eq(socialPosts.id, id));
    return post || undefined;
  }

  async createSocialPost(insertPost: InsertSocialPost, authorId: number): Promise<SocialPost> {
    const [post] = await db
      .insert(socialPosts)
      .values({ ...insertPost, authorId })
      .returning();
    return post;
  }

  async updateSocialPost(id: number, updateData: Partial<InsertSocialPost>): Promise<SocialPost> {
    const [post] = await db
      .update(socialPosts)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(socialPosts.id, id))
      .returning();
    return post;
  }

  async deleteSocialPost(id: number): Promise<void> {
    await db.delete(socialPosts).where(eq(socialPosts.id, id));
  }

  // Post reactions
  async addPostReaction(insertReaction: InsertPostReaction): Promise<PostReaction> {
    const [reaction] = await db
      .insert(postReactions)
      .values(insertReaction)
      .returning();
    return reaction;
  }

  async getPostReactions(postId: number): Promise<PostReaction[]> {
    return await db.select().from(postReactions).where(eq(postReactions.postId, postId));
  }

  // Post comments
  async addPostComment(insertComment: InsertPostComment): Promise<PostComment> {
    const [comment] = await db
      .insert(postComments)
      .values(insertComment)
      .returning();
    return comment;
  }

  async getPostComments(postId: number): Promise<PostComment[]> {
    return await db
      .select()
      .from(postComments)
      .where(and(eq(postComments.postId, postId), eq(postComments.isApproved, true)))
      .orderBy(desc(postComments.createdAt));
  }

  async approveComment(id: number): Promise<void> {
    await db
      .update(postComments)
      .set({ isApproved: true })
      .where(eq(postComments.id, id));
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private emailSubscribers: Map<number, EmailSubscriber>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private bookingRequests: Map<number, BookingRequest>;
  private shows: Map<number, Show>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.emailSubscribers = new Map();
    this.contactSubmissions = new Map();
    this.bookingRequests = new Map();
    this.shows = new Map();
    this.currentId = 1;
    
    // Initialize with some sample shows
    this.initializeShows();
  }

  private initializeShows() {
    const sampleShows: InsertShow[] = [
      {
        venue: "Sleeping Lady Resort",
        city: "Fairfax",
        state: "CA",
        date: "2024-03-15",
        time: "8:00 PM",
        ticketUrl: "https://sleepinglady.com/tickets",
        isFestival: false
      },
      {
        venue: "Big Rock",
        city: "Mill Valley",
        state: "CA", 
        date: "2024-03-22",
        time: "9:00 PM",
        ticketUrl: "https://bigrockclub.com",
        isFestival: false
      },
      {
        venue: "The Independent",
        city: "San Francisco",
        state: "CA",
        date: "2024-04-12",
        time: "7:30 PM",
        ticketUrl: "https://theindependentsf.com",
        isFestival: false
      }
    ];

    sampleShows.forEach(show => {
      this.createShow(show);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEmailSubscriber(insertSubscriber: InsertEmailSubscriber): Promise<EmailSubscriber> {
    const id = this.currentId++;
    const subscriber: EmailSubscriber = { 
      ...insertSubscriber, 
      id, 
      subscribedAt: new Date() 
    };
    this.emailSubscribers.set(id, subscriber);
    return subscriber;
  }

  async getEmailSubscribers(): Promise<EmailSubscriber[]> {
    return Array.from(this.emailSubscribers.values());
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentId++;
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      submittedAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createBookingRequest(insertRequest: InsertBookingRequest): Promise<BookingRequest> {
    const id = this.currentId++;
    const request: BookingRequest = {
      ...insertRequest,
      id,
      submittedAt: new Date(),
      organization: insertRequest.organization ?? null,
      eventType: insertRequest.eventType ?? null,
      eventDate: insertRequest.eventDate ?? null,
      budgetRange: insertRequest.budgetRange ?? null
    };
    this.bookingRequests.set(id, request);
    return request;
  }

  async getBookingRequests(): Promise<BookingRequest[]> {
    return Array.from(this.bookingRequests.values());
  }

  async getShows(): Promise<Show[]> {
    return Array.from(this.shows.values()).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  async createShow(insertShow: InsertShow): Promise<Show> {
    const id = this.currentId++;
    const show: Show = { 
      ...insertShow, 
      id,
      ticketUrl: insertShow.ticketUrl ?? null,
      isFestival: insertShow.isFestival ?? false
    };
    this.shows.set(id, show);
    return show;
  }

  // Band members - stub methods for mem storage
  async getBandMember(id: number): Promise<BandMember | undefined> {
    return undefined;
  }

  async getBandMemberByUsername(username: string): Promise<BandMember | undefined> {
    return undefined;
  }

  async getBandMembers(): Promise<BandMember[]> {
    return [];
  }

  async createBandMember(member: InsertBandMember): Promise<BandMember> {
    throw new Error("Not implemented in MemStorage");
  }

  // Social posts - stub methods for mem storage
  async getSocialPosts(limit?: number): Promise<SocialPost[]> {
    return [];
  }

  async getSocialPost(id: number): Promise<SocialPost | undefined> {
    return undefined;
  }

  async createSocialPost(post: InsertSocialPost, authorId: number): Promise<SocialPost> {
    throw new Error("Not implemented in MemStorage");
  }

  async updateSocialPost(id: number, post: Partial<InsertSocialPost>): Promise<SocialPost> {
    throw new Error("Not implemented in MemStorage");
  }

  async deleteSocialPost(id: number): Promise<void> {
    throw new Error("Not implemented in MemStorage");
  }

  // Post reactions - stub methods for mem storage
  async addPostReaction(reaction: InsertPostReaction): Promise<PostReaction> {
    throw new Error("Not implemented in MemStorage");
  }

  async getPostReactions(postId: number): Promise<PostReaction[]> {
    return [];
  }

  // Post comments - stub methods for mem storage
  async addPostComment(comment: InsertPostComment): Promise<PostComment> {
    throw new Error("Not implemented in MemStorage");
  }

  async getPostComments(postId: number): Promise<PostComment[]> {
    return [];
  }

  async approveComment(id: number): Promise<void> {
    throw new Error("Not implemented in MemStorage");
  }
}

export const storage = new DatabaseStorage();
