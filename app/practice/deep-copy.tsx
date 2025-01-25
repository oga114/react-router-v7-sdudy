export default function DeepCopy() {
  function echo() {
    console.log("echo");
  }

  // JSONを利用した簡易版のディープコピー（欠点あり）
  function deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  // 改良版のディープコピー関数
  function deepCopy2<T>(obj: T): T {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }

    if (obj instanceof Date) {
      return new Date(obj.getTime()) as T;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => deepCopy2(item)) as T;
    }

    if (obj instanceof Map) {
      return new Map(Array.from(obj.entries(), ([key, value]) => [key, deepCopy2(value)])) as T;
    }

    if (obj instanceof Set) {
      return new Set(Array.from(obj, (value) => deepCopy2(value))) as T;
    }

    const clonedObj: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === "function") {
          clonedObj[key] = obj[key]; // 関数はそのままコピー
        } else {
          clonedObj[key] = deepCopy2(obj[key]);
        }
      }
    }
    return clonedObj;
  }

  interface Person {
    name: string;
    age: number;
    email?: string;
    createdAt: Date;
    action?: () => void;
    address: {
      city: string;
      country: string;
    };
  }

  const person: Person = {
    name: "Alice",
    age: 25,
    createdAt: new Date("1998-04-15"),
    action: echo,
    address: {
      city: "Tokyo",
      country: "Japan",
    },
  };

  // JSONベースのディープコピー（関数・日付に問題あり）
  const clonedPerson = deepCopy(person);

  // 改良版のディープコピー（完全コピー）
  const clonedPerson2 = deepCopy2(person);

  // personのcityを変更してもclonedPerson2には影響しない
  person.address.city = "Osaka";

  console.log("person", person);
  console.log("clonedPerson", clonedPerson); // createdAt は文字列、関数が消える
  console.log("clonedPerson2", clonedPerson2); // createdAt は Date、関数も維持

  return (
    <>
      <h1>ここはDeepCopyの画面です。</h1>
    </>
  );
}
