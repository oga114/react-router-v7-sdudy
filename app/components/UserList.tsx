import { useEffect, useState } from 'react';
import { fetchUsers, addUser, deleteUser } from '../api/users';

interface User {
  id: number;
  name: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  const handleAddUser = async () => {
    if (username.trim() === '') return;
    const newUser = await addUser(username);
    if (newUser) {
      setUsers([...users, newUser]);
      setUsername('');
    }
  };

  const handleDeleteUser = async (id: number) => {
    const success = await deleteUser(id);
    if (success) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="list-disc pl-5">
        {users.map(user => (
          <li key={user.id} className="mb-3 flex justify-between items-center border-b pb-2">
            {user.name}
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="border p-2 rounded w-full"
        />
        <button onClick={handleAddUser} className="mt-2 bg-blue-500 text-white p-2 rounded">
          Add User
        </button>
      </div>
    </div>
  );
}
