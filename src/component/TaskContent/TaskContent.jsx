/** @format */

export function Description({ description = [] }) {
  return (
    <div className="p-5">
      {/* <h1 className="text-2xl font-bold mb-4">Instructions</h1> */}
      <ul className="space-y-2">
        {description.map((line, index) => {
          // Check if line starts with "a.", "b.", etc.
          const isSubItem = /^[a-z]\./.test(line.trim());

          return (
            <li key={index} className={`${isSubItem ? "ml-8" : ""} text-xl`}>
              {line}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function TaskContent({ title, decsription, message = "" }) {
  return (
    <>
      {message ? (
        <p>{message}</p>
      ) : (
        <>
          <p className="font-bold uppercase text-2xl border-b-2 border-gray-400 pb-4">
            Title: {title}
          </p>

          <p className="pt-4">
            <span className="font-bold">Description</span>:
            <Description description={decsription}></Description>
          </p>
        </>
      )}
    </>
  );
}

export default TaskContent;
