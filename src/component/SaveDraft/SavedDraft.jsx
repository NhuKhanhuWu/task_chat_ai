/** @format */

import { useState } from "react";
import { Description } from "../TaskContent/TaskContent";

function SaveDraft({ draft }) {
  const description = draft.description;
  const [isShowFull, setIsShowFull] = useState(false);

  return (
    <tr>
      {/* id */}
      <td className="border border-gray-300 px-4 py-2 text-xl">{draft.id}</td>

      {/* title */}
      <td className="border border-gray-300 px-4 py-2 text-xl">
        {draft.title}
      </td>

      {/* description */}
      <td className="border border-gray-300 px-4 py-2">
        {/* show more/less btn */}
        <button
          className="text-xl underline cursor-pointer sticky top-0 right-0 p-4 font-semibold text-teal-600"
          onClick={() => setIsShowFull((isShowFull) => !isShowFull)}>
          Show {isShowFull ? "less" : "more"}
        </button>

        <Description
          description={
            isShowFull ? description : description.slice(0, 4)
          }></Description>
      </td>

      {/* userTitle */}
      <td className="border border-gray-300 px-4 py-2 text-xl">
        {draft.userTitle}
      </td>

      {/* userDescription */}
      <td className="border border-gray-300 px-4 py-2 text-xl">
        {draft.userDescription}
      </td>

      {/* saveDate */}
      <td className="border border-gray-300 px-4 py-2 text-xl">
        {draft.saveDate}
      </td>
    </tr>
  );
}

export default SaveDraft;
