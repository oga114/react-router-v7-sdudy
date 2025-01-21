import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPostById = async (id: string): Promise<Post | null> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch post with ID: ${id}. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};


const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchPostById(id)
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setError("記事が見つかりませんでした");
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {post.title}
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        {post.body}
      </p>
    </div>
  );

};

export default PostPage;
