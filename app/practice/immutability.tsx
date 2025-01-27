export default function Immutability() {

  function mergeObjects<T extends object, U extends object>(
    obj1: Readonly<T>,
    obj2: Readonly<U>
  ): Readonly<T & U> {
    return Object.assign({}, obj1, obj2);
  }

  // 使用例
  const objA = { name: "Alice", age: 25 } as const;
  const objB = { job: "Engineer", location: "Tokyo" } as const;
  const objC = { name: "Alice", age: 26 } as const;
  const merged = mergeObjects(objA, objB);

  // 変更しようとするとエラー
  // merged.age = 30;  // エラー: 読み取り専用プロパティに代入不可

  // 注意： Object.assignだと上書きできる
  const updated = Object.assign(objA, objC);

  console.log("merged", merged);
  // 出力: { name: 'Alice', age: 25, job: 'Engineer', location: 'Tokyo' }

  console.log("updated", updated);
  // 出力: { name: 'Alice', age: 26 }

  // readonlyに上書きしているために不整合としてnever型になっているためプロパティにアクセスするとエラーになる
  // console.log("updated", updated.name);

  return (
    <>

      <h1>ここはImmutabilityの画面です。</h1>
    </>
  );
}
