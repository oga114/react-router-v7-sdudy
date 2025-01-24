export default function KeyOf() {

  type Car = { brand: string; year: number };
  function getCarProperty<T extends Car, K extends keyof T>(car: T, key: K): T[K] {
    return car[key];
  }

  const myCar = { brand: "Toyota", year: 2022 };
  const brand = getCarProperty(myCar, "brand"); // OK
  // const invalid = getCarProperty(myCar, "color"); // エラー！

  console.log(brand);


  const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
  };

  type ConfigType = typeof config;

  const fetchData = (url: ConfigType["apiUrl"], timeout: ConfigType["timeout"]) => {
    console.log(`Fetching from ${url} with timeout ${timeout}`);
  };

  fetchData(config.apiUrl, config.timeout); // OK


  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const person = { name: "Alice", age: 30 };

  let carBrand = getProperty(myCar, "brand"); // OK

  let personName = getProperty(person, "name");  // OK
  // let invalidKey = getProperty(person, "height");



  return (
    <>
      <h1>ここはKeyOfの画面です。</h1>
    </>
  );
}
