import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Edit, Trash2, Eye, Calendar, Users, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertSocialPostSchema, type SocialPost, type EmailSubscriber, type ContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { formatDistanceToNow } from "date-fns";

const postFormSchema = insertSocialPostSchema.extend({
  authorId: z.number().min(1, "Author is required")
});

export default function AdminPage() {
  const queryClient = useQueryClient();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const { data: posts, isLoading: postsLoading } = useQuery<SocialPost[]>({
    queryKey: ["/api/social-posts", { limit: 50 }]
  });

  const { data: subscribers, isLoading: subscribersLoading } = useQuery<EmailSubscriber[]>({
    queryKey: ["/api/subscribers"]
  });

  const { data: contacts, isLoading: contactsLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact-submissions"]
  });

  const createPostMutation = useMutation({
    mutationFn: async (data: z.infer<typeof postFormSchema>) => {
      return apiRequest("/api/social-posts", {
        method: "POST",
        body: data
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/social-posts"] });
      setIsCreateDialogOpen(false);
    }
  });

  const deletePostMutation = useMutation({
    mutationFn: async (postId: number) => {
      return apiRequest(`/api/social-posts/${postId}`, {
        method: "DELETE"
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/social-posts"] });
    }
  });

  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title: "",
      content: "",
      postType: "update",
      authorId: 1,
      isPublished: true
    }
  });

  const onSubmit = (data: z.infer<typeof postFormSchema>) => {
    createPostMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-dark-bg py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-silver mb-2">Band Admin</h1>
          <p className="text-muted-foreground">Manage your band's social presence and fan engagement</p>
        </div>

        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-charcoal">
            <TabsTrigger value="posts" className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Social Posts</span>
            </TabsTrigger>
            <TabsTrigger value="shows" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Shows</span>
            </TabsTrigger>
            <TabsTrigger value="subscribers" className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Subscribers</span>
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Contacts</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-silver">Social Feed Management</h2>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-rust-orange hover:bg-rust-orange/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-card border-border">
                  <DialogHeader>
                    <DialogTitle className="text-silver">Create New Post</DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="postType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-silver">Post Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-input border-border">
                                  <SelectValue placeholder="Select post type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="update">Band Update</SelectItem>
                                <SelectItem value="show">Show Announcement</SelectItem>
                                <SelectItem value="photo">Photo</SelectItem>
                                <SelectItem value="video">Video</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="authorId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-silver">Author</FormLabel>
                            <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value.toString()}>
                              <FormControl>
                                <SelectTrigger className="bg-input border-border">
                                  <SelectValue placeholder="Select band member" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">Alex (Guitar)</SelectItem>
                                <SelectItem value="2">Jordan (Bass)</SelectItem>
                                <SelectItem value="3">Sam (Drums)</SelectItem>
                                <SelectItem value="4">Casey (Vocals)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-silver">Title (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} className="bg-input border-border text-silver" placeholder="Post title..." />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-silver">Content</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                className="bg-input border-border text-silver min-h-[120px]"
                                placeholder="Share something with your fans..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-silver">Image URL (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} className="bg-input border-border text-silver" placeholder="https://..." />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-end space-x-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsCreateDialogOpen(false)}
                          className="border-border hover:bg-secondary"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="bg-rust-orange hover:bg-rust-orange/90"
                          disabled={createPostMutation.isPending}
                        >
                          {createPostMutation.isPending ? "Creating..." : "Create Post"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>

            {postsLoading ? (
              <div className="grid gap-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="glass-effect animate-pulse">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="h-4 bg-charcoal rounded w-1/4"></div>
                        <div className="h-3 bg-charcoal rounded w-full"></div>
                        <div className="h-3 bg-charcoal rounded w-3/4"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-4">
                {posts?.map((post) => (
                  <Card key={post.id} className="glass-effect hover-lift">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Badge className={`${post.postType === 'show' ? 'bg-rust-orange' : post.postType === 'photo' ? 'bg-neon-green' : 'bg-steel-gray'} text-white`}>
                              {post.postType}
                            </Badge>
                            {post.isPublished ? (
                              <Badge variant="outline" className="text-neon-green border-neon-green">
                                <Eye className="w-3 h-3 mr-1" />
                                Published
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="text-muted-foreground border-muted-foreground">
                                Draft
                              </Badge>
                            )}
                          </div>
                          {post.title && (
                            <h3 className="font-semibold text-silver">{post.title}</h3>
                          )}
                          <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(post.createdAt!), { addSuffix: true })}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-border hover:bg-secondary">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-blood-red text-blood-red hover:bg-blood-red hover:text-white"
                            onClick={() => deletePostMutation.mutate(post.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      {post.imageUrl && (
                        <div className="mt-4">
                          <img
                            src={post.imageUrl}
                            alt={post.title || "Post image"}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="subscribers" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-silver mb-4">Email Subscribers</h2>
              {subscribersLoading ? (
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-12 bg-charcoal rounded animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <Card className="glass-effect">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {subscribers?.map((subscriber, index) => (
                        <div key={subscriber.id} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                          <div>
                            <p className="font-medium text-silver">{subscriber.email}</p>
                            <p className="text-xs text-muted-foreground">
                              Subscribed {formatDistanceToNow(new Date(subscriber.subscribedAt), { addSuffix: true })}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-neon-green border-neon-green">
                            Active
                          </Badge>
                        </div>
                      ))}
                      {!subscribers?.length && (
                        <div className="text-center py-8">
                          <Mail className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-muted-foreground">No subscribers yet</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-silver mb-4">Contact Submissions</h2>
              {contactsLoading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <Card key={i} className="glass-effect animate-pulse">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="h-4 bg-charcoal rounded w-1/4"></div>
                          <div className="h-3 bg-charcoal rounded w-full"></div>
                          <div className="h-3 bg-charcoal rounded w-3/4"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {contacts?.map((contact) => (
                    <Card key={contact.id} className="glass-effect">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-silver">{contact.name}</h3>
                              <p className="text-sm text-muted-foreground">{contact.email}</p>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {formatDistanceToNow(new Date(contact.submittedAt), { addSuffix: true })}
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground">{contact.message}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {!contacts?.length && (
                    <Card className="glass-effect">
                      <CardContent className="p-12 text-center">
                        <MessageSquare className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">No contact submissions yet</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="shows">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-silver">Show Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Show management features coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}