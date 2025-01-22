export default function DeepMerge() {

  function deepMerge<T extends Record<string, any>, U extends Record<string, any>>(obj1: T, obj2: U): T & U {
    const result = { ...obj1 } as T & U;

    for (const key in obj2) {
      if (Object.prototype.hasOwnProperty.call(obj2, key)) {
        if (
          typeof obj2[key] === "object" &&
          obj2[key] !== null &&
          !Array.isArray(obj2[key])
        ) {
          result[key] = deepMerge(result[key] ?? {}, obj2[key]);
        } else {
          (result as Record<string, any>)[key] = obj2[key];
        }
      }
    }

    return result;
  }

  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { b: { d: 3 }, e: 4 };

  const merged = deepMerge(obj1, obj2);
  console.log(merged);
  // 出力: { a: 1, b: { c: 2, d: 3 }, e: 4 }

  // 型チェック
  type MergedType = typeof merged;



  return (
    <div>
      <h1>Deep Merge</h1>
    </div>
  );
}
