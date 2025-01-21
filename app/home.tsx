import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold ">ここはHOME画面です。</h1>
        <div className="mt-4">
          <p className="text-gray-600">コンフィグベースのルーティングを採用しています。</p>
        </div>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>

            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/playground">Playground</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
