import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Heart, MessageCircle, Share2, Calendar, Music, Camera, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { apiRequest } from "@/lib/queryClient";
import type { SocialPost, PostReaction } from "@shared/schema";

interface SocialFeedProps {
  limit?: number;
  showCreateButton?: boolean;
}

interface PostWithAuthor extends SocialPost {
  author?: {
    name: string;
    instrument: string;
    profileImage?: string;
  };
}

export function SocialFeed({ limit = 10, showCreateButton = false }: SocialFeedProps) {
  const queryClient = useQueryClient();
  const [expandedPosts, setExpandedPosts] = useState<Set<number>>(new Set());

  const { data: posts, isLoading } = useQuery<PostWithAuthor[]>({
    queryKey: limit ? ["/api/social-posts", { limit }] : ["/api/social-posts"],
    queryFn: () => {
      const url = limit ? `/api/social-posts?limit=${limit}` : '/api/social-posts';
      return fetch(url).then(res => res.json());
    },
    select: (data) => data.map(post => ({
      ...post,
      author: {
        name: getAuthorName(post.authorId),
        instrument: getAuthorInstrument(post.authorId),
        profileImage: getAuthorImage(post.authorId)
      }
    }))
  });

  const reactionMutation = useMutation({
    mutationFn: async ({ postId, email, reactionType }: { postId: number; email: string; reactionType: string }) => {
      return apiRequest(`/api/social-posts/${postId}/reactions`, {
        method: "POST",
        body: { email, reactionType }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/social-posts"] });
    }
  });

  const handleReaction = (postId: number, reactionType: string) => {
    const email = prompt("Enter your email to react:") || "anonymous@example.com";
    reactionMutation.mutate({ postId, email, reactionType });
  };

  const toggleExpanded = (postId: number) => {
    const newExpanded = new Set(expandedPosts);
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId);
    } else {
      newExpanded.add(postId);
    }
    setExpandedPosts(newExpanded);
  };

  const getPostIcon = (postType: string) => {
    switch (postType) {
      case "show": return <Calendar className="w-4 h-4" />;
      case "photo": return <Camera className="w-4 h-4" />;
      case "video": return <Video className="w-4 h-4" />;
      case "update": return <Music className="w-4 h-4" />;
      default: return <Music className="w-4 h-4" />;
    }
  };

  const getPostTypeColor = (postType: string) => {
    switch (postType) {
      case "show": return "bg-rust-orange";
      case "photo": return "bg-neon-green";
      case "video": return "bg-blood-red";
      case "update": return "bg-steel-gray";
      default: return "bg-steel-gray";
    }
  };

  const getAuthorName = (authorId: number) => {
    const names = ["Alex", "Jordan", "Sam", "Casey"];
    return names[authorId % names.length] || "Band Member";
  };

  const getAuthorInstrument = (authorId: number) => {
    const instruments = ["Guitar", "Bass", "Drums", "Vocals"];
    return instruments[authorId % instruments.length] || "Music";
  };

  const getAuthorImage = (authorId: number) => {
    return `https://images.unsplash.com/photo-${1500000000000 + authorId}?w=100&h=100&fit=crop&crop=face`;
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="glass-effect animate-pulse">
            <CardHeader className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-charcoal rounded-full"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-charcoal rounded w-1/4"></div>
                  <div className="h-3 bg-charcoal rounded w-1/6"></div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="h-4 bg-charcoal rounded w-3/4"></div>
                <div className="h-4 bg-charcoal rounded w-1/2"></div>
                <div className="h-32 bg-charcoal rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {showCreateButton && (
        <div className="text-center">
          <Button className="bg-rust-orange hover:bg-rust-orange/90">
            Create New Post
          </Button>
        </div>
      )}

      {posts?.map((post, index) => (
        <Card key={post.id} className="glass-card hover-lift border-0 overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
          <CardHeader className="pb-6">
            <div className="flex items-start space-x-4">
              <div className="relative">
                <Avatar className="w-14 h-14 border-2 border-rust-orange/20">
                  <AvatarImage src={post.author?.profileImage} alt={post.author?.name} />
                  <AvatarFallback className="bg-gradient-to-br from-rust-orange/20 to-electric-orange/20 text-silver font-semibold">
                    {post.author?.name?.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-rust-orange rounded-full flex items-center justify-center">
                  {getPostIcon(post.postType)}
                </div>
              </div>
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-silver">{post.author?.name}</h3>
                    <p className="text-sm text-electric-orange font-medium">{post.author?.instrument}</p>
                  </div>
                  <Badge variant="secondary" className="bg-rust-orange/15 text-rust-orange border-0 text-xs">
                    <span className="capitalize">{post.postType}</span>
                  </Badge>
                </div>
                <p className="text-xs text-silver/60 bg-white/5 px-2 py-1 rounded-lg inline-block">
                  {formatDistanceToNow(new Date(post.createdAt!), { addSuffix: true })}
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {post.title && (
              <h4 className="font-semibold text-silver text-lg">{post.title}</h4>
            )}
            
            <div className="text-muted-foreground">
              {expandedPosts.has(post.id) || post.content.length <= 200 ? (
                <p>{post.content}</p>
              ) : (
                <div>
                  <p>{post.content.slice(0, 200)}...</p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-rust-orange hover:text-rust-orange/80"
                    onClick={() => toggleExpanded(post.id)}
                  >
                    Read more
                  </Button>
                </div>
              )}
              
              {expandedPosts.has(post.id) && post.content.length > 200 && (
                <Button
                  variant="link"
                  className="p-0 h-auto text-rust-orange hover:text-rust-orange/80 block mt-2"
                  onClick={() => toggleExpanded(post.id)}
                >
                  Show less
                </Button>
              )}
            </div>

            {post.imageUrl && (
              <div className="rounded-lg overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title || "Post image"}
                  className="w-full h-auto max-h-96 object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-rust-orange"
                  onClick={() => handleReaction(post.id, "like")}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-silver"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comment
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-silver"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {!posts?.length && !isLoading && (
        <Card className="glass-effect text-center py-12">
          <CardContent>
            <Music className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-silver mb-2">No posts yet</h3>
            <p className="text-muted-foreground">Be the first to share something with the fans!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}