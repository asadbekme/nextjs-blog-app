export const GRAPHQLAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const navItems = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/category",
    label: "Category",
  },
  {
    route: "/blog",
    label: "Blogs",
  },
];

export const data = [
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Technical SEO with Hygraph",
    excerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Asadbek Rakhimov",
      image:
        "https://us-east-1-shared-usea1-02.graphassets.com/A2erVEXLmToWgOBwbU6zez/KSYPHIyMQJ6wJY6r6kqt",
    },
  },
  {
    image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
    title: "Union Types and Sortable Relations with Hygraph",
    excerpt:
      "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
    author: {
      name: "Asadbek Rakhimov",
      image:
        "https://us-east-1-shared-usea1-02.graphassets.com/A2erVEXLmToWgOBwbU6zez/KSYPHIyMQJ6wJY6r6kqt",
    },
  },
];
