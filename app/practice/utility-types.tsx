export default function UtilityTypes() {

  // Partial<T>はTのプロパティを全てオプショナルにする
  interface Task {
    title: string;
    description: string;
  }

  const updateTask = (task: Partial<Task>) => {
    console.log(task);
  };

  // Required<T>はTのプロパティを全て必須にする
  updateTask({ title: "New Title" });

  interface Profile {
    username?: string;
    email?: string;
  }

  const completeProfile: Required<Profile> = {
    username: "john_doe",
    email: "john@example.com"
  };

  // Readonly<T>はTのプロパティを全て読み取り専用にする
  // ネストされたプロパティまで読み取り専用にする場合は Readonly < DeepReadonly < T >> を考慮する
  interface Config {
    apiUrl: string;
  }

  const config: Readonly<Config> = {
    apiUrl: "https://api.example.com"
  };

  // config.apiUrl = "new_url";  // これはエラーになる

  return (
    <>
      ここはUTILITY-TYPES画面です。
    </>
  );
}
