import { Link } from "react-router-dom";
import { fetchPosts } from "../api";

import type { Post } from "../types/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <li className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-blue-600">
        <Link to={`/posts/${post.id}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600">{post.body.substring(0, 50)}...</p>
    </li>
  );
}
