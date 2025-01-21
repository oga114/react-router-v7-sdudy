

export default function Playground() {


  function greet(name: string): string {
    return 'Hello, ' + name;
  }
  console.log(greet('John'));

  return (
    <>
      <h1>ここはPlaygroundの画面です。</h1>

    </>
  );
}
