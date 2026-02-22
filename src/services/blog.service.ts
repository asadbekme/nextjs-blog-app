import { request, gql } from "graphql-request";
import { BlogType } from "@/types/blog";
import { CategoryType } from "@/types/category";
import { GRAPHQLAPI } from "@/config/constants";

export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          excerpt
          id
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogType[] }>(GRAPHQLAPI, query);
    return result.blogs;
  },

  async getLatestBlogs() {
    const query = gql`
      query GetLatestBlogs {
        blogs(last: 3) {
          title
          slug
          id
          createdAt
          author {
            name
            avatar {
              url
            }
          }
          image {
            url
          }
          description {
            text
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogType[] }>(GRAPHQLAPI, query);
    return result.blogs;
  },

  async getCategories() {
    const query = gql`
      query GetCategories {
        categories {
          slug
          label
        }
      }
    `;

    const result = await request<{ categories: CategoryType[] }>(
      GRAPHQLAPI,
      query,
    );
    return result.categories;
  },

  async getDetailedBlog(slug: string) {
    const query = gql`
      query GetDetailedBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          excerpt
          id
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
            html
          }
        }
      }
    `;

    const result = await request<{ blog: BlogType }>(GRAPHQLAPI, query, {
      slug,
    });
    return result.blog;
  },

  async getDetailedCategoryBlogs(slug: string) {
    const query = gql`
      query GetCategoryBlogs($slug: String!) {
        blogs(where: { category: { slug: $slug } }) {
          excerpt
          id
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogType[] }>(GRAPHQLAPI, query, {
      slug,
    });
    return result.blogs;
  },

  async getAllSlugs(): Promise<{ slug: string }[]> {
    const query = gql`
      query GetAllSlugs {
        blogs {
          slug
        }
      }
    `;

    const result = await request<{ blogs: { slug: string }[] }>(
      GRAPHQLAPI,
      query,
    );
    return result.blogs;
  },
};
