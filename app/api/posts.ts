export interface Post {
  id: number;
  title: string;
  body: string;
}

// すべての投稿を取得
export const fetchPosts = async (): Promise<Post[]> => {
  console.log("fetchPosts");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
};

// ID指定で投稿を取得
export const fetchPostById = async (id: string): Promise<Post | null> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post with ID: ${id}`);
  }
  return await response.json();
};
