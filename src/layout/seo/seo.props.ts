import { ReactNode } from "react";

export interface SEOProps {
  children: ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  author?: string;
  metaKeywords?: string;
}
