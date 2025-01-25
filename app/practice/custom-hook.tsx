import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

// カスタムフック: ユーザーIDに基づいてデータを取得
function useUserData(userId: number | null) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userId === null) return;

    async function fetchUserData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch user data");

        const data: User = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, [userId]);

  return { user, loading, error };
}

export default function CustomHook() {
  const [inputId, setInputId] = useState<string>("");
  const [userId, setUserId] = useState<number | null>(null);
  const { user, loading, error } = useUserData(userId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = parseInt(inputId, 10);
    if (!isNaN(id) && id > 0) {
      setUserId(id);  // IDをセットしてAPIを呼び出す
    } else {
      alert("有効なユーザーIDを入力してください！");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter user ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
        <button type="submit">Fetch User</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      )}
    </div>
  );
}
