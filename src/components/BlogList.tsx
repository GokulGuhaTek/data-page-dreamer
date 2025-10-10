import { useState, useEffect, useRef } from "react";
import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    author: string;
    publishedAt: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    category?: string;
    tags?: string[];
  };
}

interface BlogListProps {
  selectedCategory: string | null;
  selectedTag: string | null;
}

const BlogList = ({ selectedCategory, selectedTag }: BlogListProps) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const STRAPI_API_URL = "https://your-strapi-domain.com/api/blogs";
  const POSTS_PER_PAGE = 6;

  useEffect(() => {
    fetchBlogs(1, true);
  }, [selectedCategory, selectedTag]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading]);

  useEffect(() => {
    if (page > 1) {
      fetchBlogs(page, false);
    }
  }, [page]);

  const fetchBlogs = async (pageNum: number, reset: boolean) => {
    setLoading(true);
    
    try {
      // Build query parameters
      const params = new URLSearchParams({
        "pagination[page]": pageNum.toString(),
        "pagination[pageSize]": POSTS_PER_PAGE.toString(),
        "populate": "*",
      });

      if (selectedCategory) {
        params.append("filters[category][$eq]", selectedCategory);
      }

      if (selectedTag) {
        params.append("filters[tags][$contains]", selectedTag);
      }

      const response = await fetch(`${STRAPI_API_URL}?${params}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      
      if (reset) {
        setBlogs(data.data);
      } else {
        setBlogs((prev) => [...prev, ...data.data]);
      }

      setHasMore(data.data.length === POSTS_PER_PAGE);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      
      // Fallback to demo data if API fails
      const demoBlogs: BlogPost[] = [
        {
          id: 1,
          attributes: {
            title: "The Future of AI in Software Development",
            description: "Exploring how artificial intelligence is revolutionizing the way we write, test, and deploy code in modern software development.",
            slug: "future-of-ai-software-development",
            author: "John Doe",
            publishedAt: new Date().toISOString(),
            thumbnail: {
              data: {
                attributes: {
                  url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
                },
              },
            },
          },
        },
        {
          id: 2,
          attributes: {
            title: "Building Scalable Cloud Infrastructure",
            description: "Best practices and strategies for designing cloud-native applications that can scale to millions of users.",
            slug: "scalable-cloud-infrastructure",
            author: "Jane Smith",
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            thumbnail: {
              data: {
                attributes: {
                  url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
                },
              },
            },
          },
        },
        {
          id: 3,
          attributes: {
            title: "Modern Web Development Trends 2024",
            description: "A comprehensive look at the latest frameworks, tools, and methodologies shaping web development this year.",
            slug: "modern-web-development-trends-2024",
            author: "Mike Johnson",
            publishedAt: new Date(Date.now() - 172800000).toISOString(),
            thumbnail: {
              data: {
                attributes: {
                  url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
                },
              },
            },
          },
        },
      ];

      if (reset) {
        setBlogs(demoBlogs);
      }
      
      toast({
        title: "Using Demo Data",
        description: "Could not connect to Strapi API. Showing sample blog posts.",
        variant: "default",
      });
    } finally {
      setLoading(false);
    }
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="aspect-video w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <div id="latest" className="scroll-mt-24">
        {loading && blogs.length === 0 ? (
          <LoadingSkeleton />
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard
                  id={blog.id}
                  title={blog.attributes.title}
                  description={blog.attributes.description}
                  thumbnail={blog.attributes.thumbnail?.data?.attributes?.url || "https://images.unsplash.com/photo-1499750789382-d3c6df2c8fde?w=800&auto=format&fit=crop"}
                  author={blog.attributes.author}
                  date={blog.attributes.publishedAt}
                  slug={blog.attributes.slug}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Intersection Observer Target */}
      <div ref={observerRef} className="h-10" />

      {/* Loading indicator for infinite scroll */}
      {loading && blogs.length > 0 && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      )}

      {/* Load More Button (fallback) */}
      {!loading && hasMore && (
        <div className="flex justify-center">
          <Button
            onClick={() => setPage((prev) => prev + 1)}
            variant="outline"
            size="lg"
          >
            Load More Posts
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
