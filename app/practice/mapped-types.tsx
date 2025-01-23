export default function MappedTypes() {

  interface Currency {
    code: string;
    name: string;
    rate: number;
  }

  // Mapped Types
  type CurrencyMap = {
    [key: string]: Currency;
  };

  const currencies: CurrencyMap = {
    USD: { code: "USD", name: "US Dollar", rate: 1 },
    JPY: { code: "JPY", name: "Japanese Yen", rate: 110 },
    EUR: { code: "EUR", name: "Euro", rate: 0.85 },
  };

  // 必要なキーのみを制限する型
  type ValidationCurrencies = {
    [key in "USD" | "JPY" | "EUR"]: Currency;
  };

  const targetCurrencies: ValidationCurrencies = {
    USD: { code: "USD", name: "US Dollar", rate: 1 },
    JPY: { code: "JPY", name: "Japanese Yen", rate: 110 },
    EUR: { code: "EUR", name: "Euro", rate: 0.85 },
    // CNY: { code: "CNY", name: "Chinese Yuan", rate: 6.5 }, // エラーが出る
  };

  console.log(currencies);

  interface User {
    name: string;
    age: number;
    email?: string;
  }

  // すべてのプロパティが必須
  const RegistUser: Required<User> = {
    name: "test",
    age: 30,
    email: "test@example.com",
  };

  // 名前のみを取得
  type DisplayUserName = Pick<User, "name">;

  const DisplayUser: DisplayUserName = {
    name: "test",
  };

  // 任意のプロパティ更新用
  const UpdateUser: Partial<User> = {
    name: "test",
    age: 30,
    email: "test@example.com",
  };

  // 関数での応用例
  const updateUser = (user: Partial<User>) => {
    console.log("Updating user:", user);
  };

  updateUser({ email: "new@example.com" }); // 部分的な更新が可能


  type Months = "Jan" | "Feb" | "Mar";

  const monthlyExpenses: Record<Months, number> = {
    Jan: 2000,
    Feb: 2500,
    Mar: 1800,
    // Apr: 1900, // エラー：Apr は許可されていないキー
  };


  console.log(monthlyExpenses);

  const updateScores = (current: Record<string, number>, updates: Partial<Record<string, number>>) => {
    return { ...current, ...updates };
  };

  const currentScores = { Alice: 50, Bob: 80 };
  const newScores = updateScores(currentScores, { Bob: 100 });

  console.log(newScores); // { Alice: 50, Bob: 100 }

  return (
    <>
      <h1>ここはMapped Typesの画面です。</h1>
    </>
  );
}
