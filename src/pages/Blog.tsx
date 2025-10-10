import { useState } from "react";
import BlogHero from "@/components/BlogHero";
import BlogList from "@/components/BlogList";
import BlogSidebar from "@/components/BlogSidebar";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <BlogHero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <BlogList 
              selectedCategory={selectedCategory}
              selectedTag={selectedTag}
            />
          </div>
          
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <BlogSidebar 
              onCategorySelect={setSelectedCategory}
              onTagSelect={setSelectedTag}
              selectedCategory={selectedCategory}
              selectedTag={selectedTag}
            />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
