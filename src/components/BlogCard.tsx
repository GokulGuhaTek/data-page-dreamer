import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  date: string;
  slug: string;
  className?: string;
}

const BlogCard = ({
  id,
  title,
  description,
  thumbnail,
  author,
  date,
  slug,
  className = "",
}: BlogCardProps) => {
  return (
    <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale ${className}`}>
      <div className="aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>
      
      <CardHeader>
        <h3 className="text-2xl font-bold text-foreground hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground line-clamp-3 mb-4">
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/blog/${slug}`} className="w-full">
          <Button variant="outline" className="w-full group">
            Read More
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
