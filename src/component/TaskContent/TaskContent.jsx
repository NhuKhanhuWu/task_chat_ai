/** @format */

function TaskContent({ title, decsription }) {
  return (
    <>
      <p className="font-bold uppercase text-2xl border-b-2 border-gray-400 pb-4">
        Title: {title}
      </p>

      <p className="pt-4">
        <span className="font-bold">Description</span>: {decsription}
      </p>
    </>
  );
}

export default TaskContent;
