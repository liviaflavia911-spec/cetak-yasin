const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchAPI(query: string, variables = {}) {
  const res = await fetch(`${STRAPI_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPosts() {
  const data = await fetchAPI(`
    query Posts {
      posts {
        data {
          id
          attributes {
            title
            slug
            excerpt
            content
            coverImage {
              data {
                attributes {
                  url
                }
              }
            }
            publishedAt
          }
        }
      }
    }
  `);
  return data?.posts?.data;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(`
    query PostBySlug($slug: String!) {
      posts(filters: { slug: { eq: $slug } }) {
        data {
          id
          attributes {
            title
            slug
            content
            excerpt
            coverImage {
              data {
                attributes {
                  url
                }
              }
            }
            publishedAt
          }
        }
      }
    }
  `, { slug });
  return data?.posts?.data[0];
}