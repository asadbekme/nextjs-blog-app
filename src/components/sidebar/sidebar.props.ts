import { BlogType } from "@/types/blog";
import { CategoryType } from "@/types/category";

export interface SidebarProps {
  latestBlogs: BlogType[];
  categories: CategoryType[];
}
