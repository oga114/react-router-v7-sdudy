const API_URL = 'http://localhost:3000/users';

// ユーザー一覧を取得
export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
};

// ユーザーを追加
export const addUser = async (username: string) => {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();  // 追加されたユーザー情報を返す
  } catch (error) {
    console.error('Failed to add user:', error);
    return null;
  }
};

// ユーザー削除
export const deleteUser = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;  // 削除成功
  } catch (error) {
    console.error('Failed to delete user:', error);
    return false;
  }
};
