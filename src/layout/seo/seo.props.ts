import { ReactNode } from "react";

export interface SEOProps {
  children: ReactNode;
  appName?: string;
  metaTitle?: string;
  metaDescription?: string;
  author?: string;
  metaKeywords?: string;
  opengraphImage?: string;
  opengraphUrl?: string;
  type?: "website" | "article";
}
