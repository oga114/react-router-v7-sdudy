

export default function Playground() {

  interface Task {
    title: string;
    description: string;
  }

  const updateTask = (task: Partial<Task>) => {
    console.log(task);
  };

  updateTask({ title: "New Title" });

  return (
    <>
      <h1>ここはPlaygroundの画面です。</h1>

    </>
  );
}
