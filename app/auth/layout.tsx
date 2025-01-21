import Login from "./login";
import Register from "./register";
import { useState } from "react";

export default function Layout() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        Layoutです。
      </header>
      <div className="mt-4">
        {showLogin ? <Login /> : <Register />}
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "新規登録" : "ログイン"}
      </button>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        footer
      </footer>

    </>
  );
}
