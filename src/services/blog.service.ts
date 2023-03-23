import { request, gql } from "graphql-request";
import { BlogsType } from "src/interfaces/blogs.interface";
import { CategoryType } from "src/interfaces/categories.interface";
const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

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

    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
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

    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
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
      graphqlAPI,
      query
    );
    return result.categories;
  },

  async getDetailedBlogs(slug: string) {
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

    const result = await request<{ blog: BlogsType }>(graphqlAPI, query, {
      slug,
    });
    return result.blog;
  },
};
