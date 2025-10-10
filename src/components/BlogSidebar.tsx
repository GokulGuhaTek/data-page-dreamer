import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag, Folder } from "lucide-react";

interface BlogSidebarProps {
  onCategorySelect: (category: string | null) => void;
  onTagSelect: (tag: string | null) => void;
  selectedCategory: string | null;
  selectedTag: string | null;
}

const BlogSidebar = ({
  onCategorySelect,
  onTagSelect,
  selectedCategory,
  selectedTag,
}: BlogSidebarProps) => {
  const categories = [
    { name: "Technology", count: 12 },
    { name: "AI & ML", count: 8 },
    { name: "Web Development", count: 15 },
    { name: "Cloud Computing", count: 6 },
    { name: "DevOps", count: 9 },
  ];

  const tags = [
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "AI",
    "Machine Learning",
    "Python",
    "JavaScript",
  ];

  const recentPosts = [
    {
      title: "Getting Started with TypeScript",
      date: "2024-01-15",
    },
    {
      title: "Building Microservices with Docker",
      date: "2024-01-10",
    },
    {
      title: "Introduction to GraphQL",
      date: "2024-01-05",
    },
  ];

  return (
    <div className="space-y-6 sticky top-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Folder className="w-5 h-5" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <button
            onClick={() => onCategorySelect(null)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              !selectedCategory
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategorySelect(category.name)}
              className={`w-full text-left px-3 py-2 rounded-md flex items-center justify-between transition-colors ${
                selectedCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              <span>{category.name}</span>
              <Badge variant="secondary">{category.count}</Badge>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() =>
                  onTagSelect(selectedTag === tag ? null : tag)
                }
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="border-b border-border last:border-0 pb-3 last:pb-0"
            >
              <h4 className="font-medium text-foreground hover:text-primary transition-colors cursor-pointer line-clamp-2 mb-1">
                {post.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
